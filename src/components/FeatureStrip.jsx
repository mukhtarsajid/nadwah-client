// components/FeatureStrip.jsx
"use client";
import { motion } from "framer-motion";
import { Truck, BadgeCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { features } from "../app/data/homeData";

const icons = { Truck, BadgeCheck, RefreshCw, ShieldCheck };

export default function FeatureStrip() {
  return (
    <section className="border-b border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-200">
        {features.map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 px-4 sm:px-6 py-6 justify-center lg:justify-start"
            >
              <Icon size={24} className="shrink-0" />
              <div>
                <p className="text-sm font-medium">{f.title}</p>
                <p className="text-xs text-stone-500">{f.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}