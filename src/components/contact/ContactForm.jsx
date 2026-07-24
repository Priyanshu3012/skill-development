"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import Button from "@/components/shared/Button";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white/10 p-10 text-center text-white">
        <Icon icon="ph:check-circle-bold" className="size-10 text-white" />
        <p className="font-semibold">Thank you! Your message has been recorded.</p>
        <p className="text-sm text-brand-100">Our admissions team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>
      <input
        type="text"
        required
        name="user_name"
        placeholder="Your full name"
        className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <input
        type="email"
        required
        name="user_email"
        placeholder="Your email address"
        className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <input
        type="tel"
        required
        minLength={10}
        maxLength={10}
        name="user_phone"
        placeholder="Your 10 digit phone number"
        className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <textarea
        name="msg"
        rows={4}
        placeholder="What are you looking for?"
        className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <Button type="submit" variant="accent" className="mt-1 w-full">
        Submit Now
        <Icon icon="ph:paper-plane-tilt-bold" className="size-4" />
      </Button>
    </form>
  );
}
