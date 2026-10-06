// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useSearchParams } from "next/navigation";
// import { api } from "../../../lib/api";

// export default function OrderSuccessPage() {
//   const params = useSearchParams();
//   const id = params.get("id");
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     if (id) api.get(`/orders/${id}`)
//       .then(res =>
//      setOrder(res.data.order));
//   }, [id]);

//   if (!order) return <main className="p-10">Loading order...</main>;

//   return (
//     <main className="mx-auto min-h-screen max-w-2xl px-5 py-16">
//       <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">
//         <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl">✓</div>
//         <h1 className="mt-5 text-3xl font-bold">Order placed</h1>
//         <p className="mt-2 text-slate-500">Order #{order.orderNumber}</p>
//         <p className="mt-5 text-xl font-bold">৳{order.total}</p>
//         <Link
//           href={`/track/${order._id}`}
//           className="mt-8 inline-block rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white"
//         >
//           Track Order
//         </Link>
//       </div>
//     </main>
//   );
// }
