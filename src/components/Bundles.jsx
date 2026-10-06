"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import ProductCard from "../components/ProductCard";

const Bundles = ({ products = [] }) => {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.8;

    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Section Header */}
        <div className="mb-7 flex items-end justify-between gap-4 sm:mb-9 lg:mb-10">
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
              Curated Together
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
                tracking-[-0.02em]
                text-[#171717]
                sm:text-3xl
                lg:text-4xl
              "
            >
              Bundles
            </motion.h2>
          </div>

          {/* Desktop Controls */}
          <div className="hidden items-center gap-5 sm:flex">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollSlider("prev")}
                aria-label="Previous bundles"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
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
                aria-label="Next bundles"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white
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
              href="/product"
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
              View All
            </Link>
          </div>

          {/* Mobile View All */}
          <Link
            href="/collections/bundles"
            className="
              shrink-0
              border-b
              border-black
              pb-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.14em]
              text-[#171717]
              sm:hidden
            "
          >
            View All
          </Link>
        </div>

        {/* Product Slider */}
        <div className="relative">
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
            {products.map((product) => (
              <div
                key={product.id}
                className="
                  min-w-[calc(50%-6px)]
                  max-w-[calc(50%-6px)]
                  snap-start

                  sm:min-w-[calc(33.333%-11px)]
                  sm:max-w-[calc(33.333%-11px)]

                  md:min-w-[calc(25%-12px)]
                  md:max-w-[calc(25%-12px)]

                  lg:min-w-[calc(25%-15px)]
                  lg:max-w-[calc(25%-15px)]

                  xl:min-w-[calc(20%-16px)]
                  xl:max-w-[calc(20%-16px)]
                "
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="mt-5 flex items-center justify-center sm:hidden">
          <div className="h-[2px] w-20 overflow-hidden bg-gray-200">
            <div className="h-full w-1/2 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bundles;