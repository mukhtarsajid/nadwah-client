"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const ReviewCard = ({ review }) => {
  const {
    name,
    location,
    comment,
    rating = 5,
    product,
  } = review;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="
        flex
        h-full
        min-h-[260px]
        flex-col
        justify-between
        border
        border-gray-200
        bg-white
        p-5
        sm:min-h-[280px]
        sm:p-6
        lg:p-7
      "
    >
      <div>
        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={13}
              strokeWidth={1.3}
              className={
                index < Math.round(rating)
                  ? "fill-black text-black"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        {/* Review */}
        <p
          className="
            mt-5
            text-[14px]
            leading-6
            text-[#333]
            sm:text-[15px]
            sm:leading-7
          "
        >
          “{comment}”
        </p>
      </div>

      <div className="mt-7 border-t border-gray-100 pt-5">
        <p className="text-[12px] font-medium text-[#171717]">
          {name}
        </p>

        <div className="mt-1 flex flex-wrap items-center gap-2">
          {location && (
            <span className="text-[10px] uppercase tracking-[0.12em] text-gray-400">
              {location}
            </span>
          )}

          {product && (
            <>
              <span className="text-gray-300">•</span>

              <span className="text-[10px] uppercase tracking-[0.12em] text-gray-400">
                {product}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ReviewCard;