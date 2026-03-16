"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { type Locale } from "@/i18n";

type ContactFormProps = {
  locale: Locale;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  consentAccepted: boolean;
  honeypot: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
  consentAccepted: false,
  honeypot: "",
};

const copy = {
  es: {
    heading: "Envianos un Mensaje",
    name: "Nombre",
    email: "Email",
    phone: "Telefono",
    subject: "Asunto (opcional)",
    message: "Mensaje",
    consent:
      "Acepto que Etika Bikes almacene mis datos para responder a esta consulta.",
    sending: "Enviando...",
    submit: "Enviar",
    success: "Mensaje enviado correctamente. Te responderemos pronto.",
    errorGeneric: "No se pudo enviar el mensaje. Intentalo de nuevo.",
  },
  en: {
    heading: "Send Us A Message",
    name: "Name",
    email: "Email",
    phone: "Phone",
    subject: "Subject (optional)",
    message: "Message",
    consent:
      "I agree that Etika Bikes may store my data to reply to this enquiry.",
    sending: "Sending...",
    submit: "Send",
    success: "Message sent successfully. We will get back to you soon.",
    errorGeneric: "The message could not be sent. Please try again.",
  },
  ca: {
    heading: "Envia'ns un Missatge",
    name: "Nom",
    email: "Email",
    phone: "Telefon",
    subject: "Assumpte (opcional)",
    message: "Missatge",
    consent:
      "Accepto que Etika Bikes desi les meves dades per respondre aquesta consulta.",
    sending: "Enviant...",
    submit: "Enviar",
    success: "Missatge enviat correctament. Et respondrem aviat.",
    errorGeneric: "No s'ha pogut enviar el missatge. Torna-ho a provar.",
  },
} as const;

export function ContactForm({ locale }: ContactFormProps) {
  const t = copy[locale];
  const pathname = usePathname();
  const consentId = useId();

  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  useEffect(() => {
    if (status.type === "idle") return;

    const timeout = setTimeout(() => {
      setStatus({ type: "idle", message: "" });
    }, 5000);

    return () => clearTimeout(timeout);
  }, [status]);

  const updateField = <K extends keyof FormState>(
    key: K,
    value: FormState[K],
  ) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "idle", message: "" });

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
          locale,
          consentAccepted: form.consentAccepted,
          sourcePage: pathname,
          honeypot: form.honeypot,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        success?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || t.errorGeneric);
      }

      setForm(initialState);
      setStatus({ type: "success", message: t.success });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : t.errorGeneric,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {status.type !== "idle" && (
        <div className="fixed right-4 top-24 z-50 w-[calc(100%-2rem)] max-w-md sm:right-6 sm:top-28">
          <div
            role="alert"
            aria-live="polite"
            className={`toast-shell rounded-2xl border px-4 py-3 shadow-xl backdrop-blur ${
              status.type === "success"
                ? "border-green-200 bg-green-50/95 text-green-900"
                : "border-red-200 bg-red-50/95 text-red-900"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 rounded-full p-1.5 ${
                  status.type === "success" ? "bg-green-100" : "bg-red-100"
                }`}
                aria-hidden="true"
              >
                {status.type === "success" ? (
                  <svg
                    className="h-4 w-4 text-green-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4 text-red-700"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.707-4.707a1 1 0 001.414 1.414L10 14.414l.293.293a1 1 0 001.414-1.414L11.414 13l.293-.293a1 1 0 00-1.414-1.414L10 11.586l-.293-.293a1 1 0 00-1.414 1.414l.293.293-.293.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>

              <div className="flex-1">
                <p className="text-sm leading-6 tracking-[0.015em]">
                  {status.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-gray-50 p-5 lg:p-8 lg:rounded-r-2xl rounded-2xl flex flex-col justify-center"
      >
        <h2 className="text-primary-600 text-3xl font-semibold leading-10 mb-6">
          {t.heading}
        </h2>

        <input
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500 pl-4 mb-6"
          placeholder={t.name}
        />

        <input
          type="email"
          autoComplete="email"
          required
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500 pl-4 mb-6"
          placeholder={t.email}
        />

        <input
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500 pl-4 mb-6"
          placeholder={t.phone}
        />

        <input
          type="text"
          value={form.subject}
          onChange={(event) => updateField("subject", event.target.value)}
          className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none focus:border-primary-500 pl-4 mb-6"
          placeholder={t.subject}
        />

        <textarea
          required
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none focus:border-primary-500 p-4 mb-6 resize-none"
          placeholder={t.message}
        />

        <div className="mb-6">
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.honeypot}
            onChange={(event) => updateField("honeypot", event.target.value)}
            aria-hidden="true"
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          />

          <label
            htmlFor={consentId}
            className="flex items-start gap-3 text-sm leading-6 text-gray-700"
          >
            <input
              id={consentId}
              type="checkbox"
              required
              checked={form.consentAccepted}
              onChange={(event) =>
                updateField("consentAccepted", event.target.checked)
              }
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span>{t.consent}</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-70 hover:bg-primary-800 bg-primary-600 shadow-sm"
        >
          {isSubmitting ? t.sending : t.submit}
        </button>
      </form>

      <style jsx>{`
        .toast-shell {
          animation: toast-enter 220ms ease-out;
        }

        @keyframes toast-enter {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
}
