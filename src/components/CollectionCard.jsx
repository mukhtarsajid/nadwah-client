"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const CollectionCard = ({ collection }) => {
  const {
    title,
    subtitle,
    image,
    href = "#",
  } = collection;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="group relative w-full overflow-hidden"
    >
      <Link
        href={href}
        className="relative block aspect-[4/5] w-full overflow-hidden"
      >
        {/* Collection Image */}
        <Image
          src={image}
          alt={title}
          fill
          sizes="
            (max-width: 640px) 82vw,
            (max-width: 1024px) 50vw,
            25vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-105
          "
        />

        {/* Dark Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/20
            transition-all
            duration-500
            group-hover:bg-black/40
          "
        />

        {/* Bottom Gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-1/2
            bg-gradient-to-t
            from-black/70
            via-black/20
            to-transparent
          "
        />

        {/* Content */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            p-5
            text-white
            sm:p-6
            lg:p-7
            xl:p-8
          "
        >
          {subtitle && (
            <p
              className="
                mb-2
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-white/75
                sm:text-[10px]
              "
            >
              {subtitle}
            </p>
          )}

          <div className="flex items-end justify-between gap-4">
            <h3
              className="
                max-w-[80%]
                text-xl
                font-medium
                leading-tight
                tracking-[-0.02em]
                sm:text-2xl
                lg:text-3xl
              "
            >
              {title}
            </h3>

            {/* Arrow */}
            <motion.span
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.25 }}
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/60
                bg-white/10
                backdrop-blur-sm
                transition-colors
                duration-300
                group-hover:border-white
                group-hover:bg-white
                group-hover:text-black
              "
            >
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
              />
            </motion.span>
          </div>

          {/* Explore */}
          <div
            className="
              mt-3
              max-h-0
              overflow-hidden
              opacity-0
              transition-all
              duration-500
              group-hover:max-h-10
              group-hover:opacity-100
            "
          >
            <span
              className="
                inline-block
                border-b
                border-white
                pb-1
                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]
              "
            >
              Explore Collection
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default CollectionCard;