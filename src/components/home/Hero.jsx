// components/Hero.jsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Scentora perfume"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-xs sm:text-sm tracking-[0.3em] mb-4"
        >
          A Fragrance for Every Chapter
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-tight max-w-xl"
        >
          More Than A Scent
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-stone-200 max-w-md"
        >
          Discover iconic perfumes crafted for your mood, your moments, and your story.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 bg-white text-black px-6 py-3 flex items-center gap-2 font-medium"
        >
          Shop Now →
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src={`/images/avatar-${i}.jpg`}
                alt="Customer"
                className="w-8 h-8 rounded-full border-2 border-black object-cover"
              />
            ))}
          </div>
          <p className="text-xs sm:text-sm text-stone-300">
            Trusted by 50,000+ fragrance lovers worldwide.
          </p>
        </motion.div>
      </div>

      <div className="relative flex justify-center gap-2 pb-6">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
}