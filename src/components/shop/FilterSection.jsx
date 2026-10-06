"use client";

import { useState } from "react";
import { ChevronDown } from "./Icon";

export default function FilterSection({
  title,
  children,
  defaultOpen = true,
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="border-b border-black/10 py-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111]">
          {title}
        </span>

        <span
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={15} />
        </span>
      </button>

      {open && (
        <div className="pt-4">
          {children}
        </div>
      )}
    </section>
  );
}