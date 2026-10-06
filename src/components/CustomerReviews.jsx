"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

import ReviewCard from "../components/ReviewCard";

const CustomerReviews = ({ reviews = [] }) => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.82;

    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-[#f7f6f4] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10 lg:mb-12">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4"
            >
              <Quote
                size={25}
                strokeWidth={1}
                className="text-[#171717]"
              />
            </motion.div>

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
              Loved by fragrance lovers
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="
                text-2xl
                font-medium
                tracking-[-0.025em]
                text-[#171717]
                sm:text-3xl
                lg:text-4xl
              "
            >
              Customer Reviews
            </motion.h2>
          </div>

          {/* Desktop Controls */}
          <div className="hidden items-center gap-5 sm:flex">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlider("prev")}
                aria-label="Previous reviews"
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
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>

              <button
                type="button"
                onClick={() => scrollSlider("next")}
                aria-label="Next reviews"
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
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>

            <Link
              href="/reviews"
              className="
                border-b
                border-black
                pb-1
                text-[11px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-[#171717]
                transition-opacity
                hover:opacity-50
              "
            >
              All Reviews
            </Link>
          </div>
        </div>

        {/* Review Slider */}
        <div
          ref={sliderRef}
          className="
            flex
            snap-x
            snap-mandatory
            gap-3
            overflow-x-auto
            scroll-smooth
            pb-4

            sm:gap-4
            lg:gap-5

            [&::-webkit-scrollbar]:hidden
            [-ms-overflow-style:none]
            [scrollbar-width:none]
          "
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="
                min-w-[85vw]
                max-w-[85vw]
                snap-start

                sm:min-w-[calc(50%-8px)]
                sm:max-w-[calc(50%-8px)]

                lg:min-w-[calc(33.333%-14px)]
                lg:max-w-[calc(33.333%-14px)]
              "
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Mobile Indicator */}
        <div className="mt-5 flex justify-center sm:hidden">
          <div className="h-[2px] w-20 overflow-hidden bg-gray-300">
            <div className="h-full w-1/2 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;