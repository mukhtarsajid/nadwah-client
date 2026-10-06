"use client";

import { useState } from "react";
import { HeartIcon, StarIcon } from "./Icon";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className="group relative min-w-0">
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f3f0]">
        <a
          href={`/products/${product.slug}`}
          className="block h-full w-full"
        >
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
          />
        </a>

        {/* Badge */}
        {product.badge && (
          <span className="absolute left-3 top-3 bg-[#111] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.18em] text-white">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setLiked(!liked)}
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-[#111] backdrop-blur transition hover:bg-white"
        >
          <HeartIcon
            size={17}
            fill={liked ? "currentColor" : "none"}
          />
        </button>

        {/* Quick Add */}
        <button
          type="button"
          className="absolute bottom-3 left-3 right-3 translate-y-3 bg-[#111] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          Quick Add
        </button>
      </div>

      {/* Product Information */}
      <div className="pt-4">
        <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#9a7a35]">
          {product.brand}
        </p>

        <a
          href={`/products/${product.slug}`}
          className="mt-1 block text-[14px] font-medium tracking-[-0.01em] text-[#111] hover:underline"
        >
          {product.name}
        </a>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-2">
          <div className="flex items-center gap-1 text-[#9a7a35]">
            <StarIcon size={11} />

            <span className="text-[11px] text-[#555]">
              {product.rating}
            </span>
          </div>

          <span className="text-[10px] text-[#999]">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[13px] font-semibold text-[#111]">
            ৳{product.price.toLocaleString()}
          </span>

          {product.compareAtPrice && (
            <span className="text-[11px] text-[#999] line-through">
              ৳{product.compareAtPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}