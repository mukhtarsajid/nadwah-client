"use client";

import Link from "next/link";

const FooterColumn = ({ title, links = [] }) => {
  return (
    <div className="w-full">
      <h3
        className="
          mb-5
          text-[11px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-white
          sm:mb-6
        "
      >
        {title}
      </h3>

      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="
                group
                inline-flex
                items-center
                text-[13px]
                text-white/55
                transition-colors
                duration-300
                hover:text-[#C9A45C]
              "
            >
              <span
                className="
                  mr-0
                  h-px
                  w-0
                  bg-[#C9A45C]
                  transition-all
                  duration-300
                  group-hover:mr-2
                  group-hover:w-[10px]
                "
              />

              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;