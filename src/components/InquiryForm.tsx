"use client";

import { useState } from "react";

const programOptions = [
  "Art Foundations Residency",
  "Artists Who Changed the World",
  "Creative Expression After-School",
  "Color & Creativity Workshop",
  "Corporate team building",
  "Adult continuing education",
  "Custom / not sure yet",
];

const ageGroupOptions = [
  "Elementary (K–5)",
  "Middle school (6–8)",
  "High school (9–12)",
  "Mixed ages",
  "Adults",
  "Corporate team",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-2.5 font-sans text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-rose-mid";

const labelClass = "mb-1.5 block font-sans text-xs font-medium text-rose-deep";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-rose-light bg-rose-pale px-6 py-10 text-center">
        <p className="font-serif text-xl text-rose-deep">Thank you for reaching out!</p>
        <p className="mt-2 font-sans text-sm text-muted">
          We&apos;ll review your inquiry and respond within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <label htmlFor="organization" className={labelClass}>
          Organization name
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="contactName" className={labelClass}>
          Contact name
        </label>
        <input
          id="contactName"
          name="contactName"
          type="text"
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClass} />
      </div>
      <div>
        <label htmlFor="programInterest" className={labelClass}>
          Program interest
        </label>
        <select
          id="programInterest"
          name="programInterest"
          required
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select a program
          </option>
          {programOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="ageGroup" className={labelClass}>
          Age group
        </label>
        <select
          id="ageGroup"
          name="ageGroup"
          required
          className={inputClass}
          defaultValue=""
        >
          <option value="" disabled>
            Select age group
          </option>
          {ageGroupOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label htmlFor="preferredDates" className={labelClass}>
          Preferred dates
        </label>
        <input
          id="preferredDates"
          name="preferredDates"
          type="text"
          placeholder="e.g. Fall 2025, weekdays after 3pm"
          className={inputClass}
        />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="notes" className={labelClass}>
          Additional notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="Tell us about your group size, goals, or any questions..."
        />
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="rounded-lg bg-rose-mid px-8 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-rose-dark"
        >
          Submit inquiry →
        </button>
      </div>
    </form>
  );
}
