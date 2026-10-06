"use client";

import { motion } from "framer-motion";

const TrustBenefit = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="
        flex
        items-start
        gap-4
        border-b
        border-gray-200
        py-6

        sm:border-b-0
        sm:border-r
        sm:px-5
        sm:py-2

        lg:px-7

        xl:px-9
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-gray-200
          bg-white
          text-[#171717]
        "
      >
        <Icon size={19} strokeWidth={1.4} />
      </div>

      <div>
        <h3
          className="
            text-[12px]
            font-medium
            uppercase
            tracking-[0.08em]
            text-[#171717]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-1.5
            max-w-[220px]
            text-[12px]
            leading-5
            text-gray-500
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default TrustBenefit;