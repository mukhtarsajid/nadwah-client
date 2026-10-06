"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import CollectionCard from "../components/CollectionCard";

const ExploreCollection = ({ collections = [] }) => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.85;

    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#f7f6f4] py-14 sm:py-18 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10 lg:mb-12">

          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="
                mb-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-gray-500
                sm:text-[11px]
              "
            >
              Find your signature scent
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.05,
              }}
              className="
                text-2xl
                font-medium
                tracking-[-0.025em]
                text-[#171717]
                sm:text-3xl
                lg:text-4xl
              "
            >
              Explore Our Collection
            </motion.h2>
          </div>

          {/* Desktop Controls */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollSlider("prev")}
              aria-label="Previous collections"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                bg-transparent
                text-[#171717]
                transition-all
                duration-300
                hover:border-black
                hover:bg-black
                hover:text-white
              "
            >
              <ChevronLeft
                size={18}
                strokeWidth={1.5}
              />
            </button>

            <button
              type="button"
              onClick={() => scrollSlider("next")}
              aria-label="Next collections"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-gray-300
                bg-transparent
                text-[#171717]
                transition-all
                duration-300
                hover:border-black
                hover:bg-black
                hover:text-white
              "
            >
              <ChevronRight
                size={18}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </div>

        {/* ================= COLLECTION SLIDER ================= */}
        <div
          ref={sliderRef}
          className="
            flex
            snap-x
            snap-mandatory
            gap-3
            overflow-x-auto
            scroll-smooth
            pb-3

            sm:grid
            sm:grid-cols-2
            sm:gap-4
            sm:overflow-visible

            lg:grid-cols-4
            lg:gap-5

            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="
                min-w-[82vw]
                snap-start

                sm:min-w-0
              "
            >
              <CollectionCard collection={collection} />
            </div>
          ))}
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="mt-5 flex justify-center sm:hidden">
          <div className="h-[2px] w-20 overflow-hidden bg-gray-300">
            <div className="h-full w-1/2 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCollection;