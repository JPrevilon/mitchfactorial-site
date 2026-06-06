"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/data/mitchfactorial-data";

const inputClass =
  "min-h-12 rounded-card border border-cream/12 bg-black/60 px-3 text-base font-medium normal-case tracking-normal text-cream outline-none transition placeholder:text-cream/28 focus:border-kompa-gold";
const labelClass =
  "grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-cream/72";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fields = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      city: String(formData.get("city") ?? ""),
      eventDate: String(formData.get("eventDate") ?? ""),
      venue: String(formData.get("venue") ?? ""),
      bookingType: String(formData.get("bookingType") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      message: String(formData.get("message") ?? ""),
    };
    const subject = encodeURIComponent(
      `Booking inquiry from ${fields.name || "M!TCHFACTOR!AL site"}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${fields.name}`,
        `Email: ${fields.email}`,
        `Phone: ${fields.phone}`,
        `City: ${fields.city}`,
        `Event date: ${fields.eventDate}`,
        `Venue/event name: ${fields.venue}`,
        `Booking type: ${fields.bookingType}`,
        `Budget range: ${fields.budget}`,
        "",
        "Message:",
        fields.message,
      ].join("\n"),
    );

    window.location.href = `mailto:${siteConfig.bookingEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="metal-panel grid gap-4 p-5 sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Name
          <input name="name" required className={inputClass} />
        </label>
        <label className={labelClass}>
          Email
          <input name="email" type="email" required className={inputClass} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Phone
          <input name="phone" type="tel" className={inputClass} />
        </label>
        <label className={labelClass}>
          City
          <input name="city" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Event date
          <input name="eventDate" type="date" className={inputClass} />
        </label>
        <label className={labelClass}>
          Venue / event name
          <input name="venue" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Booking type
          <select name="bookingType" className={inputClass} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Club Set</option>
            <option>Festival Set</option>
            <option>Private Event</option>
            <option>Brand Activation</option>
            <option>Radio / Guest Mix</option>
            <option>Hosting / Curation</option>
          </select>
        </label>
        <label className={labelClass}>
          Budget range
          <input
            name="budget"
            placeholder="$"
            className={inputClass}
          />
        </label>
      </div>
      <label className={labelClass}>
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="resize-y rounded-card border border-cream/12 bg-black/60 px-3 py-3 text-base font-medium normal-case tracking-normal text-cream outline-none transition placeholder:text-cream/28 focus:border-kompa-gold"
          placeholder="Audience, set length, room details, cultural direction, tech notes, and timing."
        />
      </label>
      <button
        type="submit"
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-3 rounded-card border border-kompa-gold bg-kompa-gold px-4 py-2 text-sm font-black uppercase tracking-[0.08em] text-black transition hover:bg-cream"
      >
        Send booking inquiry
        <Send aria-hidden className="h-4 w-4" />
      </button>
      {submitted ? (
        <p className="text-sm font-bold text-kompa-gold">
          Opening your email client with the inquiry details. Formspree or
          another form backend can be connected later.
        </p>
      ) : null}
    </form>
  );
}
