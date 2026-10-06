// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";

// const labels = {
//   pending: "Order Placed",
//   confirmed: "Confirmed",
//   processing: "Processing",
//   packed: "Packed",
//   shipped: "Shipped",
//   in_transit: "In Transit",
//   out_for_delivery: "Out for Delivery",
//   delivered: "Delivered",
//   cancelled: "Cancelled",
//   return_requested: "Return Requested",
//   returned: "Returned",
//   refunded: "Refunded",
// };

// export default function TrackPage() {
//   const { id } = useParams();

//   const [order, setOrder] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!id) return;

//     axios
//       .get(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/${id}`)
//       .then((res) => {
//         setOrder(res.data.order);
//       })
//       .catch((err) => {
//         console.error("Order fetch error:", err);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) {
//     return (
//       <main className="p-10">
//         Loading...
//       </main>
//     );
//   }

//   if (!order) {
//     return (
//       <main className="p-10">
//         Order not found
//       </main>
//     );
//   }

//   const history = order.statusHistory || [];

//   return (
//     <main className="mx-auto min-h-screen max-w-3xl px-5 py-10">
//       <div className="rounded-3xl border bg-white p-6 shadow-sm">

//         {/* Order Header */}
//         <p className="text-sm text-slate-500">
//           Order
//         </p>

//         <h1 className="text-2xl font-bold">
//           {order.orderNumber}
//         </h1>

//         {/* Current Status */}
//         <div className="mt-4 rounded-2xl bg-slate-50 p-4">
//           <p className="text-sm text-slate-500">
//             Current Status
//           </p>

//           <p className="mt-1 font-bold">
//             {labels[order.orderStatus] || order.orderStatus}
//           </p>
//         </div>

//         {/* Status History */}
//         <div className="mt-8 space-y-0">

//           {history.length === 0 ? (
//             <p className="text-sm text-slate-500">
//               No tracking history available.
//             </p>
//           ) : (
//             history.map((event, index) => (
//               <div
//                 key={`${event?.status}-${index}`}
//                 className="relative flex gap-4 pb-8"
//               >

//                 {/* Connecting Line */}
//                 {index !== history.length - 1 && (
//                   <span className="absolute left-3 top-7 h-full w-px bg-slate-200" />
//                 )}

//                 {/* Status Circle */}
//                 <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs text-white">
//                   ✓
//                 </span>

//                 {/* Status Information */}
//                 <div>
//                   <p className="font-semibold">
//                     {labels[event?.status] || event?.status}
//                   </p>

//                   {event?.changedAt && (
//                     <p className="text-sm text-slate-500">
//                       {new Date(event.changedAt).toLocaleString()}
//                     </p>
//                   )}

//                   {event?.note && (
//                     <p className="mt-1 text-sm text-slate-600">
//                       {event.note}
//                     </p>
//                   )}

//                   {event?.changedBy && (
//                     <p className="mt-1 text-xs text-slate-400">
//                       Updated by: {event.changedBy}
//                     </p>
//                   )}
//                 </div>

//               </div>
//             ))
//           )}

//         </div>

//         {/* Courier Tracking */}
//         {order.trackingNumber && (
//           <div className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm">
//             Courier Tracking:
//             <b className="ml-1">
//               {order.trackingNumber}
//             </b>
//           </div>
//         )}

//       </div>
//     </main>
//   );
// }