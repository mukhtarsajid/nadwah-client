// components/ProductSection.jsx
"use client";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";
import { products } from "../app/data/homeData";

export default function ProductSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-8 py-16 bg-stone-50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-xs tracking-[0.2em] text-stone-500 mb-2">FEATURED PRODUCTS</p>
          <h2 className="font-serif text-2xl sm:text-3xl">Most Loved Fragrances</h2>
        </div>
        <a href="#" className="text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-white group"
          >
            <div className="relative aspect-square overflow-hidden bg-stone-100 mb-3">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button
                aria-label="Add to wishlist"
                className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow"
              >
                <Heart size={16} />
              </button>
            </div>

            <p className="text-sm font-medium leading-tight">{p.name}</p>
            <p className="text-xs text-stone-500">{p.type}</p>

            <div className="flex items-center gap-1 mt-1 text-xs">
              <Star size={12} className="fill-amber-400 text-amber-400" />
              <span>{p.rating}</span>
              <span className="text-stone-400">({p.reviews})</span>
            </div>

            <p className="font-medium mt-1">${p.price}</p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 w-full bg-black text-white text-sm py-2"
            >
              Add to Cart
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}