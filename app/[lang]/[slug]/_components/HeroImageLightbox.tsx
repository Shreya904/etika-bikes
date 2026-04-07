"use client";

import { useEffect, useState } from "react";

interface HeroImageLightboxProps {
  src: string;
  alt: string;
  locale: "es" | "en" | "ca";
}

export function HeroImageLightbox({
  src,
  alt,
  locale,
}: HeroImageLightboxProps) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const copy = {
    es: {
      expand: "Ampliar imagen",
      close: "Cerrar",
    },
    en: {
      expand: "Expand image",
      close: "Close",
    },
    ca: {
      expand: "Ampliar imatge",
      close: "Tancar",
    },
  }[locale];

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function openLightbox() {
    if (!src) return;
    setOpen(true);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
  }

  function closeLightbox() {
    setOpen(false);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setIsDragging(false);
  }

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    const direction = event.deltaY < 0 ? 1 : -1;
    setZoom((value) => {
      const next = Math.min(
        4,
        Math.max(1, Number((value + direction * 0.15).toFixed(2))),
      );
      if (next === 1) {
        setPan({ x: 0, y: 0 });
      }
      return next;
    });
  }

  function handleDragStart(clientX: number, clientY: number) {
    if (zoom <= 1) return;
    setIsDragging(true);
    setDragStart({ x: clientX - pan.x, y: clientY - pan.y });
  }

  function handleDragMove(clientX: number, clientY: number) {
    if (!isDragging || zoom <= 1) return;
    setPan({ x: clientX - dragStart.x, y: clientY - dragStart.y });
  }

  function handleDragEnd() {
    setIsDragging(false);
  }

  if (!src) {
    return (
      <div className="flex h-full items-center justify-center bg-primary-100 text-primary-300">
        <svg
          className="h-24 w-24 opacity-30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"
          />
        </svg>
      </div>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        aria-label={copy.expand}
        className="group relative block h-full w-full text-left"
      >
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-110 bg-black/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={copy.expand}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-120 rounded-full border border-white/30 bg-black/40 p-2 text-white transition-colors hover:bg-black/70"
            aria-label={copy.close}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6l12 12M18 6L6 18"
              />
            </svg>
          </button>

          <div className="flex h-full items-center justify-center">
            <div
              className="relative max-h-full max-w-full overflow-hidden rounded-xl border border-white/10 bg-black/20"
              onWheel={handleWheel}
              onMouseDown={(event) =>
                handleDragStart(event.clientX, event.clientY)
              }
              onMouseMove={(event) =>
                handleDragMove(event.clientX, event.clientY)
              }
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={(event) => {
                const touch = event.touches[0];
                if (!touch) return;
                handleDragStart(touch.clientX, touch.clientY);
              }}
              onTouchMove={(event) => {
                const touch = event.touches[0];
                if (!touch) return;
                event.preventDefault();
                handleDragMove(touch.clientX, touch.clientY);
              }}
              onTouchEnd={handleDragEnd}
            >
              <img
                src={src}
                alt={alt}
                draggable={false}
                className={`max-h-[82vh] max-w-[92vw] origin-center object-contain transition-transform duration-100 ${
                  zoom > 1
                    ? isDragging
                      ? "cursor-grabbing"
                      : "cursor-grab"
                    : "cursor-zoom-in"
                }`}
                style={{
                  transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
