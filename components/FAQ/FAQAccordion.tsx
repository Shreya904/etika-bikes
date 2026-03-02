"use client";

import React from "react";
import { type Locale } from "@/i18n";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  questions: FAQItem[];
  locale: Locale;
}

export function FAQAccordion({ questions }: FAQAccordionProps) {
  const [openAccordions, setOpenAccordions] = React.useState<Set<number>>(
    new Set([0]),
  );

  const toggleAccordion = (index: number) => {
    const newOpenAccordions = new Set(openAccordions);
    if (newOpenAccordions.has(index)) {
      newOpenAccordions.delete(index);
    } else {
      newOpenAccordions.add(index);
    }
    setOpenAccordions(newOpenAccordions);
  };

  return (
    <div className="accordion-group">
      {questions.map((faq, index) => (
        <div
          key={index}
          className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-primary-50 ${
            openAccordions.has(index)
              ? "accordion-active:bg-primary-50 bg-primary-50"
              : ""
          } ${index === questions.length - 1 ? "" : "border-b"}`}
        >
          <button
            className={`accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-primary-600 ${
              openAccordions.has(index) ? "font-medium text-primary-600" : ""
            }`}
            onClick={() => toggleAccordion(index)}
            aria-expanded={openAccordions.has(index)}
          >
            <h5 className="text-left">{faq.question}</h5>
            <svg
              className={`text-gray-500 transition duration-500 group-hover:text-primary-600 ${
                openAccordions.has(index) ? "text-primary-600 rotate-180" : ""
              }`}
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div
            className={`accordion-content w-full px-0 overflow-hidden transition-all duration-500 ${
              openAccordions.has(index)
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-base text-gray-900 leading-6 pt-4">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
