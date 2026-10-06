// components/PromoBanner.jsx
"use client";
import { motion } from "framer-motion";

export default function PromoBanner() {
  return (
    <section className="relative bg-stone-800 text-white overflow-hidden">
      <img
        src="/images/hero-bg.jpg"
        alt="Limited time offer"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col items-end text-right">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.3em] mb-2"
        >
          LIMITED TIME OFFER
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl leading-tight max-w-sm"
        >
          Get 20% Off Your First Order
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="mt-6 bg-white text-black px-6 py-3"
        >
          Shop Now →
        </motion.button>
      </div>
    </section>
  );
}