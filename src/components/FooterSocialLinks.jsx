"use client";

import { motion } from "framer-motion";

const FooterSocialLinks = () => {
  const socialLinks = [
    {
      id: 1,
      label: "Instagram",
      href: "#",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" />
        </svg>
      ),
    },

    {
      id: 2,
      label: "Facebook",
      href: "#",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
        >
          <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.67.33-1 1-1Z" />
        </svg>
      ),
    },

    {
      id: 3,
      label: "TikTok",
      href: "#",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
        >
          <path d="M15.5 3h3.1c.3 1.7 1.3 3 2.9 3.7v3.2c-1.4-.1-2.8-.6-4-1.4v6.7c0 3.8-2.7 5.8-5.8 5.8-3 0-5.2-2-5.2-4.8 0-3 2.4-5.1 5.7-5.1.4 0 .8 0 1.2.1v3.1c-.4-.1-.7-.2-1.1-.2-1.3 0-2.4.7-2.4 2 0 1 .7 1.8 1.8 1.8 1.3 0 2-.9 2-2.4V3h1.8Z" />
        </svg>
      ),
    },

    {
      id: 4,
      label: "YouTube",
      href: "#",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
        >
          <path d="M23 12s0-3.5-.4-5.1c-.2-.9-.9-1.6-1.8-1.8C19.2 4.7 12 4.7 12 4.7s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 8.5 1 12 1 12s0 3.5.4 5.1c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8C23 15.5 23 12 23 12ZM10 15.5v-7l6 3.5-6 3.5Z" />
        </svg>
      ),
    },
  ];

  return (
    <div>
      <h3
        className="
          mb-5
          text-[11px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-white
        "
      >
        Follow Us
      </h3>

      <div className="flex items-center gap-2.5">
        {socialLinks.map((social) => (
          <motion.a
            key={social.id}
            href={social.href}
            aria-label={social.label}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/5
              text-white/70
              backdrop-blur-sm
              transition-all
              duration-300
              hover:border-[#C9A45C]
              hover:bg-[#C9A45C]
              hover:text-black
            "
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocialLinks;