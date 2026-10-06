// components/BrandStory.jsx
"use client";
import { motion } from "framer-motion";

export default function BrandStory() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="aspect-[4/3] overflow-hidden bg-stone-100"
      >
        <img
          src="/images/brand-story.jpg"
          alt="Scentora brand story"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <p className="text-xs tracking-[0.2em] text-stone-500 mb-2">OUR STORY</p>
        <h2 className="font-serif text-3xl sm:text-4xl mb-4">Crafted for A More You</h2>
        <p className="text-stone-600 mb-6 max-w-md">
          We believe a fragrance is more than a scent — it&apos;s a story, a memory, and a part of who you are.
          At Scentora, we bring you authentic, timeless fragrances from the world&apos;s most iconic brands.
        </p>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors"
        >
          About Us →
        </motion.button>
      </motion.div>
    </section>
  );
}