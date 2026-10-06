"use client";

import {
  BadgeCheck,
  RotateCcw,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

import TrustBenefit from "../components/TrustBenefit";

const TrustBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: BadgeCheck,
      title: "Authentic",
      description: "100% genuine products sourced with care.",
    },
    {
      id: 2,
      icon: RotateCcw,
      title: "Easy Returns",
      description: "Simple and hassle-free return experience.",
    },
    {
      id: 3,
      icon: Truck,
      title: "Free Shipping",
      description: "Enjoy free delivery on qualifying orders.",
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: "Secure Checkout",
      description: "Your payment and information stay protected.",
    },
  ];

  return (
    <section className="w-full border-y border-gray-200 bg-[#f7f6f4]">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            grid
            grid-cols-1

            sm:grid-cols-2
            sm:divide-x
            sm:divide-gray-200

            lg:grid-cols-4
          "
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`
                ${
                  index === benefits.length - 1
                    ? "sm:border-r-0"
                    : ""
                }
              `}
            >
              <TrustBenefit
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBenefits;