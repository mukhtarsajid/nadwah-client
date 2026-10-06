
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

const ProductCard = ({
  product,
  onWishlist,
}) => {
  const {
    id,
    slug,
    name,
    brand,
    image,
    hoverImage,
    price,
    comparePrice,
    rating = 5,
    reviews = 0,
    badge,
    isSoldOut = false,
  } = product;

  const discount =
    comparePrice && comparePrice > price
      ? Math.round(((comparePrice - price) / comparePrice) * 100)
      : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group relative w-full"
    >
      {/* Product Image */}
<div
  className="
    group
    relative
    aspect-square
    overflow-hidden
    rounded-2xl
    bg-[#F7F7F5]
  "
>
  <Link
    href={`/products/${slug}`}
    className="relative block h-full w-full"
  >
    {/* Main Image */}
    <Image
      src={image}
      alt={name}
      fill
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      className={`
        object-contain
        p-5
        sm:p-6
        lg:p-8
        transition-all
        duration-700
        ease-out
        ${
          hoverImage
            ? "group-hover:scale-[1.04] group-hover:opacity-0"
            : "group-hover:scale-[1.04]"
        }
      `}
    />

    {/* Hover Image */}
    {hoverImage && (
      <Image
        src={hoverImage}
        alt={`${name} alternate view`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="
          absolute
          inset-0
          object-contain
          p-5
          sm:p-6
          lg:p-8
          opacity-0
          transition-all
          duration-700
          ease-out
          group-hover:scale-[1.04]
          group-hover:opacity-100
        "
      />
    )}
  </Link>

  {/* Badge */}
  {(badge || discount) && !isSoldOut && (
    <div className="absolute left-3 top-3 z-10 sm:left-4 sm:top-4">
      <span
        className="
          inline-flex
          rounded-sm
          bg-black
          px-3
          py-1.5
          text-[9px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-white
          sm:px-3.5
          sm:py-1.5
        "
      >
        {badge || `${discount}% Off`}
      </span>
    </div>
  )}

  {/* Sold Out */}
  {isSoldOut && (
    <div className="absolute left-3 top-3 z-10 sm:left-4 sm:top-4">
      <span
        className="
          inline-flex
          rounded-sm
          bg-white
          px-3
          py-1.5
          text-[9px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-black
          shadow-sm
        "
      >
        Sold Out
      </span>
    </div>
  )}

  {/* Wishlist */}
  <motion.button
    type="button"
    whileTap={{ scale: 0.88 }}
    onClick={() => onWishlist?.(product)}
    aria-label={`Add ${name} to wishlist`}
    className="
      absolute
      right-3
      top-3
      z-20
      flex
      h-9
      w-9
      items-center
      justify-center
      rounded-full
      bg-white/95
      text-black
      shadow-sm
      backdrop-blur-sm
      transition-all
      duration-300
      hover:bg-black
      hover:text-white
      sm:right-4
      sm:top-4
      sm:h-10
      sm:w-10
    "
  >
    <Heart
      size={17}
      strokeWidth={1.5}
    />
  </motion.button>

  {/* Quick View */}
  {!isSoldOut && (
    <div
      className="
        absolute
        bottom-3
        left-3
        right-3
        z-10
        hidden
        translate-y-2
        overflow-hidden
        rounded-xl
        bg-black
        opacity-0
        transition-all
        duration-500
        group-hover:translate-y-0
        group-hover:opacity-100
        sm:block
        sm:bottom-4
        sm:left-4
        sm:right-4
      "
    >
      <Link
        href={`/products/${slug}`}
        className="
          flex
          h-11
          items-center
          justify-center
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-white
          transition-colors
          duration-300
          hover:bg-[#C6A15B]
          hover:text-black
        "
      >
        Quick View
      </Link>
    </div>
  )}
</div>

      {/* Product Information */}
      <div className="pt-4">
        {/* Brand */}
        {brand && (
          <p className="mb-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">
            {brand}
          </p>
        )}

        {/* Product Name */}
        <Link href={`/products/${slug}`}>
          <h3
            className="
              line-clamp-2
              text-[14px]
              font-medium
              leading-5
              text-[#171717]
              transition-colors
              duration-300
              hover:text-gray-500
            "
          >
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={12}
                strokeWidth={1}
                className={
                  index < Math.round(rating)
                    ? "fill-black text-black"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          {reviews > 0 && (
            <span className="text-[11px] text-gray-500">
              ({reviews})
            </span>
          )}
        </div>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2">
          <span className="text-[14px] font-medium text-[#171717]">
            ৳{price.toLocaleString()}
          </span>

          {comparePrice && comparePrice > price && (
            <span className="text-[13px] text-gray-400 line-through">
              ৳{comparePrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
// import Link from 'next/link';
// import Image from 'next/image';
// import { Heart } from 'lucide-react';

// export default function ProductCard({ product }) {
//   if (!product) {
//     console.log("Product prop is missing");
//     return null;
//   }

//   console.log("Product:", product);


//   return (
//     <div className="group relative flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-md transition-all">
//       {/* Product Image */}
//       <div className="relative aspect-[3/4] w-full bg-gray-50 overflow-hidden">
//         <Image
//           src={product?.images?.[0]}
//           alt={product?.title}
//           fill
//           className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
//           sizes="(max-width: 768px) 50vw, 25vw"
//         />

//         {/* Wishlist Button */}
//         <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-black hover:text-white transition-colors">
//           <Heart size={16} />
//         </button>

//         {/* Badge */}
//         {product?.discount > 0 && (
//           <span className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
//             -{product?.discount}%
//           </span>
//         )}
//       </div>

//       {/* Details */}
//       <div className="p-4 flex flex-col flex-grow">
//         <span className="text-[11px] text-gray-400 uppercase tracking-wider">{product?.brand || 'LUXE'}</span>
//         <Link href={`/products/${product?._id}`} className="mt-1 text-sm font-medium text-gray-800 hover:text-black line-clamp-1">
//           {product?.title}
//         </Link>

//         <div className="mt-2 flex items-center space-x-2">
//           {/* <span className="text-sm font-bold text-black">BDT {product?.price?.toLocaleString()}</span>
//           {product?.compareAtPrice > product?.price && (
//             <span className="text-xs text-gray-400 line-through">BDT {product?.compareAtPrice?.toLocaleString()}</span>
//           )} */}
//           <button>
//             <Link href={`/product/${product?._id}`}>
//               View detail
//             </Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }