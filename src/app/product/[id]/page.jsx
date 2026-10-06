"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from 'axios';
// import { api } from "../../../lib/api";

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
   const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!id) return;
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`)
      .then((res) => {
        console.log('Respons', res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const buyNow = () => {
    router.push(`/checkout?product=${product._id}&quantity=${quantity}`);
  };

  return (
    <main className="mx-auto grid min-h-screen max-w-5xl gap-10 px-5 py-12 md:grid-cols-2">
      <img
        src={product.images?.[0]}
        alt={product.title}
        className="aspect-square w-full rounded-3xl object-cover"
      />

      <section className="flex flex-col justify-center">
        <p className="text-sm font-medium uppercase tracking-widest text-slate-500">Product</p>
        <h1 className="mt-2 text-4xl font-bold">{product.title}</h1>
        <p className="mt-5 text-3xl font-bold">৳{product.price}</p>
        <p className="mt-5 leading-7 text-slate-600">{product.description}</p>

        <div className="mt-8 flex items-center gap-3">
          <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-11 w-11 rounded-xl border">−</button>
          <span className="w-10 text-center font-semibold">{quantity}</span>
          <button onClick={() => setQuantity(q => Math.min(product.stock, q + 1))} className="h-11 w-11 rounded-xl border">+</button>
        </div>

        <button
          onClick={buyNow}
          disabled={!product.stock}
          className="mt-8 rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
        >
          {product.stock ? "Buy Now" : "Out of Stock"}
        </button>
      </section>
    </main>
  );
}


// 'use client';
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// // import { useCart } from '../../../../context/CartContext';
// import { ShoppingBag, Truck, RotateCcw } from 'lucide-react';
// import axios from 'axios';
// import { useParams, useRouter } from 'next/navigation';


// export default function ProductDetailPage({ params }) {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const [selectedColor, setSelectedColor] = useState('');
//   const [selectedSize, setSelectedSize] = useState('');
//   const [qty, setQty] = useState(1);
//   //  const { addToCart } = useCart();

//   const { id } = useParams();


//   useEffect(() => {
//     if (!id) return;
//     axios
//       .get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`)
//       .then((res) => {
//         console.log('Respons', res);
//         setProduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//       .finally(() => setLoading(false));
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const addToCart = () => {
//     router.push(`/checkout?product=${product._id}&quantity=${quantity}`);
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Gallery */}
//         <div className="relative aspect-[3/4] w-full bg-gray-100 overflow-hidden rounded-md">
//           <Image
//             src={product.images?.[0]}
//             alt={product.title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex flex-col space-y-6">
//           <span className="text-xs uppercase tracking-widest text-gray-400">{product.brand}</span>
//           <h1 className="text-3xl font-serif font-bold text-gray-900">{product.title}</h1>

//           <div className="flex items-center space-x-3 text-xl font-semibold">
//             <span>BDT {product.price?.toLocaleString()}</span>
//             {product.compareAtPrice > product.price && (
//               <span className="text-sm text-gray-400 line-through">BDT {product.compareAtPrice?.toLocaleString()}</span>
//             )}
//           </div>

//           <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>

//           {/* Color Selection */}
//           {product.colors?.length > 0 && (
//             <div>
//               <label className="text-xs uppercase font-medium text-gray-700 block mb-2">Color: {selectedColor}</label>
//               <div className="flex space-x-2">
//                 {product.colors.map((c) => (
//                   <button
//                     key={c.name}
//                     onClick={() => setSelectedColor(c.name)}
//                     className={`px-3 py-1.5 border text-xs font-medium rounded-sm ${selectedColor === c.name ? 'border-black bg-black text-white' : 'border-gray-200'}`}
//                   >
//                     {c.name}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Size Selection */}
//           {product.sizes?.length > 0 && (
//             <div>
//               <label className="text-xs uppercase font-medium text-gray-700 block mb-2">Size: {selectedSize}</label>
//               <div className="flex space-x-2">
//                 {product.sizes.map((s) => (
//                   <button
//                     key={s}
//                     onClick={() => setSelectedSize(s)}
//                     className={`w-10 h-10 border text-xs font-medium flex items-center justify-center rounded-sm ${selectedSize === s ? 'border-black bg-black text-white' : 'border-gray-200'}`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           <div className="mt-8 flex items-center gap-3">
//             <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="h-11 w-11 rounded-xl border">−</button>
//             <span className="w-10 text-center font-semibold">{quantity}</span>
//             <button onClick={() => setQuantity(q => Math.min(product.stock, q + 1))} className="h-11 w-11 rounded-xl border">+</button>
//           </div>
//           {/* Actions */}
//           <div className="pt-4 flex space-x-4">
//             <button
//               onClick={() => addToCart(product, selectedColor, selectedSize, qty)}
//               className="flex-1 bg-black text-white py-4 uppercase text-xs tracking-wider font-medium hover:bg-amber-800 transition-colors flex items-center justify-center space-x-2"
//             >
//               <ShoppingBag size={18} />
//               <span>Add To Shopping Bag</span>
//             </button>
//           </div>

//           {/* Shipping Info */}
//           <div className="border-t border-gray-100 pt-6 space-y-3 text-xs text-gray-500">
//             <div className="flex items-center space-x-3"><Truck size={16} /><span>Standard Shipping within 2-4 business days across BD.</span></div>
//             <div className="flex items-center space-x-3"><RotateCcw size={16} /><span>7 Days easy return policy.</span></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }