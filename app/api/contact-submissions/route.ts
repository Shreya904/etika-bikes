import { NextResponse } from "next/server";
import { locales, type Locale } from "@/i18n";

type ContactSubmissionPayload = {
  name?: string;
  email?: string;
  message?: string;
  locale?: string;
  consentAccepted?: boolean;
  phone?: string;
  subject?: string;
  sourcePage?: string;
  honeypot?: string;
};

function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function POST(request: Request) {
  const cmsApiBaseUrl = process.env.CMS_API_BASE_URL?.trim();

  if (!cmsApiBaseUrl) {
    return NextResponse.json(
      {
        success: false,
        error: "CMS_API_BASE_URL is not configured.",
      },
      { status: 500 },
    );
  }

  let payload: ContactSubmissionPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();
  const locale = payload.locale?.trim();
  const phone = payload.phone?.trim() || undefined;
  const subject = payload.subject?.trim() || undefined;
  const sourcePage = payload.sourcePage?.trim() || undefined;
  const honeypot = payload.honeypot?.trim() || "";
  const consentAccepted = payload.consentAccepted === true;

  if (!name || !email || !message || !locale || !isValidLocale(locale)) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing required fields or invalid locale.",
      },
      { status: 400 },
    );
  }

  if (!consentAccepted) {
    return NextResponse.json(
      {
        success: false,
        error: "Consent is required.",
      },
      { status: 400 },
    );
  }

  if (honeypot) {
    return NextResponse.json(
      { success: false, error: "Bot submission rejected." },
      { status: 400 },
    );
  }

  const cmsResponse = await fetch(
    `${cmsApiBaseUrl.replace(/\/$/, "")}/contact-submissions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "x-forwarded-for": request.headers.get("x-forwarded-for") ?? "",
        "x-real-ip": request.headers.get("x-real-ip") ?? "",
        "cf-connecting-ip": request.headers.get("cf-connecting-ip") ?? "",
        "user-agent": request.headers.get("user-agent") ?? "",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        locale,
        consentAccepted,
        phone,
        subject,
        sourcePage,
        honeypot,
      }),
    },
  );

  const responseText = await cmsResponse.text();
  const data = responseText ? safeJsonParse(responseText) : null;

  if (!cmsResponse.ok) {
    return NextResponse.json(
      {
        success: false,
        error:
          getErrorMessage(data) ??
          `CMS request failed with status ${cmsResponse.status}.`,
      },
      { status: cmsResponse.status },
    );
  }

  return NextResponse.json(data ?? { success: true });
}

function safeJsonParse(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function getErrorMessage(value: unknown) {
  if (!value || typeof value !== "object") return null;

  const error = (value as { error?: unknown }).error;
  if (typeof error === "string") return error;

  const message = (value as { message?: unknown }).message;
  if (typeof message === "string") return message;

  return null;
}
