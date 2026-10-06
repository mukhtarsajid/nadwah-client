"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

import FooterColumn from "./FooterColumn";
import FooterSocialLinks from "./FooterSocialLinks";
import CurrencySelector from "./CurrencySelector";

const Footer = () => {
  const quickShopLinks = [
    {
      label: "New Arrivals",
      href: "/collections/new-arrivals",
    },
    {
      label: "Best Sellers",
      href: "/collections/best-sellers",
    },
    {
      label: "For Him",
      href: "/collections/for-him",
    },
    {
      label: "For Her",
      href: "/collections/for-her",
    },
    {
      label: "Bundles",
      href: "/collections/bundles",
    },
  ];

  const supportLinks = [
    {
      label: "Contact Us",
      href: "/contact",
    },
    {
      label: "Shipping & Delivery",
      href: "/shipping",
    },
    {
      label: "Returns & Refunds",
      href: "/returns",
    },
    {
      label: "FAQs",
      href: "/faq",
    },
    {
      label: "Track Order",
      href: "/track-order",
    },
  ];

  const aboutLinks = [
    {
      label: "Our Story",
      href: "/about",
    },
    {
      label: "Our Fragrances",
      href: "/fragrances",
    },
    {
      label: "Journal",
      href: "/journal",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms",
    },
  ];

  return (
    <footer className="w-full overflow-hidden bg-[#171717] text-white">
      {/* Gold Top Accent */}
      <div className="h-[2px] w-full bg-[#C9A45C]" />

      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* ================================================== */}
        {/* Newsletter / Brand Area */}
        {/* ================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-10
            border-b
            border-white/10
            py-12

            sm:py-14

            lg:grid-cols-[1.3fr_1fr]
            lg:items-end
            lg:gap-16
            lg:py-16

            xl:py-20
          "
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="
                inline-block
                text-2xl
                font-semibold
                tracking-[0.22em]
                text-white
                transition-colors
                duration-300
                hover:text-[#C9A45C]
                sm:text-3xl
              "
            >
              LOVIRR
            </Link>

            <p
              className="
                mt-5
                max-w-md
                text-[13px]
                leading-6
                text-white/50
                sm:text-[14px]
                sm:leading-7
              "
            >
              Discover refined fragrances created to become
              part of your everyday moments, memories and
              personal expression.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="mailto:hello@lovirr.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-[12px]
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-[#C9A45C]
                "
              >
                <Mail
                  size={15}
                  strokeWidth={1.4}
                  className="text-[#C9A45C]"
                />

                hello@lovirr.com
              </a>

              <a
                href="tel:+8801000000000"
                className="
                  flex
                  items-center
                  gap-3
                  text-[12px]
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-[#C9A45C]
                "
              >
                <Phone
                  size={15}
                  strokeWidth={1.4}
                  className="text-[#C9A45C]"
                />

                +880 1000 000000
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:justify-self-end lg:w-full lg:max-w-xl">
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#C9A45C]
              "
            >
              Stay in the world of fragrance
            </p>

            <h2
              className="
                mt-2
                text-2xl
                font-medium
                tracking-[-0.02em]
                text-white
                sm:text-3xl
              "
            >
              Join our fragrance list.
            </h2>

            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email address"
                className="
                  h-12
                  min-w-0
                  flex-1
                  border
                  border-white/15
                  bg-white/5
                  px-4
                  text-[12px]
                  text-white
                  outline-none
                  placeholder:text-white/30
                  transition-all
                  duration-300
                  focus:border-[#C9A45C]
                "
              />

              <button
                type="submit"
                className="
                  group
                  flex
                  h-12
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  bg-[#C9A45C]
                  px-6
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-white
                "
              >
                Subscribe

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </div>
        </div>

        {/* ================================================== */}
        {/* Footer Navigation */}
        {/* ================================================== */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-8
            gap-y-10
            border-b
            border-white/10
            py-12

            sm:grid-cols-2
            sm:gap-y-12
            sm:py-14

            md:grid-cols-4
            md:gap-8

            lg:py-16
          "
        >
          <FooterColumn
            title="Quick Shop"
            links={quickShopLinks}
          />

          <FooterColumn
            title="Customer Support"
            links={supportLinks}
          />

          <FooterColumn
            title="About"
            links={aboutLinks}
          />

          {/* Social + Currency */}
          <div className="space-y-9">
            <FooterSocialLinks />

            <CurrencySelector />
          </div>
        </div>

        {/* ================================================== */}
        {/* Bottom Footer */}
        {/* ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            py-6

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:py-7
          "
        >
          <p className="text-[10px] tracking-[0.04em] text-white/35">
            © {new Date().getFullYear()} LOVIRR. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="
                text-[10px]
                text-white/35
                transition-colors
                duration-300
                hover:text-[#C9A45C]
              "
            >
              Privacy
            </Link>

            <span className="h-3 w-px bg-white/10" />

            <Link
              href="/terms"
              className="
                text-[10px]
                text-white/35
                transition-colors
                duration-300
                hover:text-[#C9A45C]
              "
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;