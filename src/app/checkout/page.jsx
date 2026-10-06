// "use client";
// import axios from "axios";
// import { useEffect,useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// // import { api } from "../../lib/api";
  

// export default function CheckoutPage() {
//   const params = useSearchParams();
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const productId = params.get("product");
//   const quantity = Number(params.get("quantity") || 1);

//   const [product, setProduct] = useState(null);
//  const [form, setForm] = useState({
//   fullName: "",
//   phone: "",
//   email: "",
//   division: "",
//   district: "",
//   upazila: "",
//   address: ""
// });
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState("");

//  useEffect(() => {
//   if (!productId) return;

//   axios
//     .get(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${productId}`)
//     .then((res) => {
//       console.log("Response:", res);
//       setProduct(res.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => setLoading(false));
// }, [productId]);
  
//   const update = e => setForm({ ...form, [e.target.name]: e.target.value });

//   const submit = async e => {
//     e.preventDefault();
//     setError("");
//     setSubmitting(true);

//     try {
//       const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
//         productId,
//         quantity,
//         customer: form,
//         paymentMethod: "COD"
//       });

//       router.push(`/order/${res.data.order._id}`);
//     } catch (err) {
//       setError(err.response?.data?.message || "Could not create order");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // if (!product) return <main className="p-10">Loading...</main>;

//   const subtotal = product?.price * quantity;
//   const total = subtotal + 80;

//  return (
//   <main className="mx-auto grid min-h-screen max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1fr_380px]">

//     {/* Checkout Form */}
//     <form
//       onSubmit={submit}
//       className="rounded-3xl border bg-white p-6 shadow-sm"
//     >
//       <h1 className="text-2xl font-bold">
//         Checkout
//       </h1>

//       <p className="mt-1 text-sm text-slate-500">
//         Cash on Delivery
//       </p>

//       <div className="mt-8 grid gap-4">

//         {[
//           ["fullName", "Full name"],
//           ["phone", "Phone number"],
//           ["email", "Email (optional)"],
//           ["division", "Division"],
//           ["district", "District"],
//           ["upazila", "Upazila"],
//         ].map(([name, label]) => (
//           <label
//             key={name}
//             className="grid gap-2 text-sm font-medium"
//           >
//             {label}

//             <input
//               name={name}
//               value={form[name] || ""}
//               onChange={update}
//               required={[
//                 "fullName",
//                 "phone",
//                 "division",
//                 "district",
//               ].includes(name)}
//               className="rounded-xl border px-4 py-3 outline-none focus:border-slate-950"
//             />
//           </label>
//         ))}

//         {/* Full Address */}
//         <label className="grid gap-2 text-sm font-medium">
//           Full address

//           <textarea
//             name="address"
//             value={form.address || ""}
//             onChange={update}
//             required
//             rows={4}
//             className="rounded-xl border px-4 py-3 outline-none focus:border-slate-950"
//           />
//         </label>

//       </div>

//       {/* Error */}
//       {error && (
//         <p className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">
//           {error}
//         </p>
//       )}

//       {/* Submit */}
//       <button
//         type="submit"
//         disabled={submitting}
//         className="mt-6 w-full rounded-2xl bg-slate-950 px-5 py-4 font-bold text-white disabled:opacity-50"
//       >
//         {submitting
//           ? "Placing order..."
//           : `Place Order • ৳${total}`}
//       </button>
//     </form>


//     {/* Order Summary */}
//     <aside className="h-fit rounded-3xl border bg-white p-6 shadow-sm">

//       <h2 className="font-bold">
//         Order Summary
//       </h2>

//       <div className="mt-5 flex gap-4">

//         <img
//           src={product?.images?.[0]}
//           alt={product?.title || "Product"}
//           className="h-20 w-20 rounded-xl object-cover"
//         />

//         <div>
//           <p className="font-semibold">
//             {product?.title}
//           </p>

//           <p className="text-sm text-slate-500">
//             Qty: {quantity}
//           </p>
//         </div>

//       </div>

//       <div className="mt-6 space-y-3 border-t pt-5 text-sm">

//         <div className="flex justify-between">
//           <span>Subtotal</span>
//           <span>৳{subtotal}</span>
//         </div>

//         <div className="flex justify-between">
//           <span>Delivery</span>
//           <span>৳80</span>
//         </div>

//         <div className="flex justify-between text-lg font-bold">
//           <span>Total</span>
//           <span>৳{total}</span>
//         </div>

//       </div>

//     </aside>

//   </main>
// );
   
// }
