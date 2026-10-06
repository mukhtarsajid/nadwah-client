// components/CollectionSection.jsx
"use client";
import { motion } from "framer-motion";
import { collections } from "../app/data/homeData";

export default function CollectionSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs tracking-[0.2em] text-stone-500 mb-2">OUR COLLECTIONS</p>
          <h2 className="font-serif text-2xl sm:text-3xl">Scents for Every Moment</h2>
        </div>
        <a href="#" className="text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {collections.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden bg-stone-100 mb-3">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-sm font-medium">{c.name}</p>
            <p className="text-xs text-stone-500">{c.tagline}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}