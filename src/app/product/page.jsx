'use client';
import ProductCard from "../../components/ProductCard";
import { products } from "../data/products";

export default function Products() {
  return (
    <div className=" grid
    grid-cols-2
    gap-x-3
    gap-y-8
    sm:grid-cols-2
    sm:gap-x-5
    sm:gap-y-10
    lg:grid-cols-3
    lg:gap-x-6
    lg:gap-y-12
    xl:grid-cols-4
    xl:gap-x-7">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onWishlist={(product) => {
            console.log("Wishlist:", product);
          }}
        />
      ))}
    </div>
  );
}
