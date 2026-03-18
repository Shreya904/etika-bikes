import assert from "node:assert/strict";
import test from "node:test";
import { normalizeCmsGalleryItems } from "./bikes-api";

test("uses mediaKind from CMS media object as primary signal", async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async () => {
    throw new Error("fetch should not be called when mediaKind is present");
  };

  try {
    const normalized = await normalizeCmsGalleryItems(
      [
        {
          url: {
            gridFsFileId: "video-gridfs-id",
            mediaKind: "video",
          },
          alt: { en: "Urban bike motion clip" },
          order: 1,
        },
      ],
      "en",
    );

    assert.equal(normalized[0]?.mediaKind, "video");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("enriches mimeType when mediaKind is video but mimeType is missing", async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async () =>
    new Response(null, {
      status: 200,
      headers: {
        "content-type": "video/quicktime",
        "content-disposition": 'attachment; filename="Modelo1.mov"',
      },
    });

  try {
    const normalized = await normalizeCmsGalleryItems(
      [
        {
          url: {
            gridFsFileId: "video-gridfs-id",
            mediaKind: "video",
          },
          alt: { en: "Urban bike motion clip" },
          order: 1,
        },
      ],
      "en",
    );

    assert.equal(normalized[0]?.mediaKind, "video");
    assert.equal(normalized[0]?.mimeType, "video/quicktime");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("classifies gridFs-only gallery item as video via metadata enrichment", async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async () =>
    new Response(null, {
      status: 200,
      headers: { "content-type": "video/mp4" },
    });

  try {
    const normalized = await normalizeCmsGalleryItems(
      [
        {
          url: {
            gridFsFileId: "video-gridfs-id",
          },
          alt: { en: "Urban bike motion clip" },
          order: 1,
        },
      ],
      "en",
    );

    assert.equal(normalized[0]?.mediaKind, "video");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("classifies octet-stream gridFs media as video via binary signature sniff", async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = async () => {
    // 8-byte minimal MP4-like header with 'ftyp' marker at bytes 4..7
    const mp4Header = new Uint8Array([
      0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70,
    ]);
    return new Response(mp4Header, {
      status: 206,
      headers: { "content-type": "application/octet-stream" },
    });
  };

  try {
    const normalized = await normalizeCmsGalleryItems(
      [
        {
          url: {
            gridFsFileId: "video-gridfs-id",
          },
          alt: { en: "Urban bike motion clip" },
          order: 1,
        },
      ],
      "en",
    );

    assert.equal(normalized[0]?.mediaKind, "video");
    assert.equal(normalized[0]?.mimeType, "video/mp4");
  } finally {
    globalThis.fetch = originalFetch;
  }
});
