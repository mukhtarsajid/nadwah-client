"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const PromotionalBanner = ({
  eyebrow = "Limited Time Offer",
  title = "Find Your Signature Scent",
  description = "Discover premium fragrances curated for every moment and every mood.",
  buttonText = "Shop Now",
  buttonHref = "/collections/all",
  image,
}) => {
  return (
    <section className="w-full overflow-hidden bg-[#171717]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row">
        {/* Content */}
        <div
          className="
            relative
            flex
            min-h-[420px]
            w-full
            flex-col
            justify-center
            overflow-hidden
            px-6
            py-14
            sm:min-h-[480px]
            sm:px-10
            lg:min-h-[560px]
            lg:w-1/2
            lg:px-14
            xl:px-20
          "
        >
          {/* Background Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72" />

          <div className="relative z-10 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-4
                text-[10px]
                font-medium
                uppercase
                tracking-[0.22em]
                text-white/60
                sm:text-[11px]
              "
            >
              {eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="
                max-w-lg
                text-4xl
                font-medium
                leading-[1.05]
                tracking-[-0.035em]
                text-white
                sm:text-5xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-white/60
                sm:mt-6
                sm:text-[15px]
                sm:leading-7
              "
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="mt-8"
            >
              <Link
                href={buttonHref}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  bg-white
                  px-6
                  py-3.5
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.16em]
                  text-black
                  transition-all
                  duration-300
                  hover:bg-white/90
                  sm:px-7
                "
              >
                {buttonText}

                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[360px] w-full overflow-hidden sm:min-h-[450px] lg:min-h-[560px] lg:w-1/2">
          {image && (
            <Image
              src={image}
              alt={title}
              fill
              sizes="
                (max-width: 1024px) 100vw,
                50vw
              "
              className="
                object-cover
                transition-transform
                duration-1000
                hover:scale-105
              "
            />
          )}

          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;