// "use client";

// import axios from "axios";
// import { useEffect, useState } from "react";
// import Link from "next/link";

// const statuses = [
//   "",
//   "pending",
//   "confirmed",
//   "processing",
//   "packed",
//   "shipped",
//   "in_transit",
//   "out_for_delivery",
//   "delivered",
//   "cancelled",
//   "returned",
// ];

// export default function AdminOrdersPage() {
//   const [orders, setOrders] = useState([]);
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     try {
//       setLoading(true);

//       const res = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/admin/orders`,
//         {
//           params: status ? { status } : {},
//         }
//       );

//       console.log("Orders response:", res.data);

//       setOrders(res.data.orders || []);
//     } catch (error) {
//       console.error("Failed to load orders:", error);
//       setOrders([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     load();
//   }, [status]);

//   return (
//     <main className="min-h-screen bg-slate-50 px-5 py-8">
//       <div className="mx-auto max-w-7xl">

//         {/* Header */}
//         <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
//           <div>
//             <p className="text-sm font-medium text-slate-500">
//               ADMIN
//             </p>

//             <h1 className="text-3xl font-bold">
//               Orders
//             </h1>
//           </div>

//           {/* Status Filter */}
//           <select
//             value={status}
//             onChange={(e) => setStatus(e.target.value)}
//             className="rounded-xl border bg-white px-4 py-3"
//           >
//             {statuses.map((s) => (
//               <option key={s} value={s}>
//                 {s || "All statuses"}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Loading */}
//         {loading ? (
//           <div className="rounded-2xl border bg-white p-10 text-center">
//             Loading orders...
//           </div>
//         ) : orders.length === 0 ? (
//           <div className="rounded-2xl border bg-white p-10 text-center">
//             No orders found.
//           </div>
//         ) : (
//           <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
//             <div className="overflow-x-auto">

//               <table className="w-full text-left text-sm">

//                 {/* Table Header */}
//                 <thead className="border-b bg-slate-50">
//                   <tr>
//                     <th className="px-5 py-4">
//                       Order
//                     </th>

//                     <th className="px-5 py-4">
//                       Customer
//                     </th>

//                     <th className="px-5 py-4">
//                       Items
//                     </th>

//                     <th className="px-5 py-4">
//                       Total
//                     </th>

//                     <th className="px-5 py-4">
//                       Payment
//                     </th>

//                     <th className="px-5 py-4">
//                       Status
//                     </th>

//                     <th className="px-5 py-4">
//                       Date
//                     </th>

//                     <th className="px-5 py-4">
                      
//                     </th>
//                   </tr>
//                 </thead>

//                 {/* Table Body */}
//                 <tbody>

//                   {orders.map((order) => {

//                     const customerName =
//                       order?.guestInfo?.name ||
//                       order?.shippingAddress?.fullName ||
//                       "Guest Customer";

//                     const customerPhone =
//                       order?.guestInfo?.phone ||
//                       order?.shippingAddress?.phone ||
//                       "N/A";

//                     const itemCount =
//                       order?.items?.reduce(
//                         (total, item) =>
//                           total + (item?.quantity || 0),
//                         0
//                       ) || 0;

//                     return (
//                       <tr
//                         key={order?._id}
//                         className="border-b last:border-0 hover:bg-slate-50"
//                       >

//                         {/* Order Number */}
//                         <td className="px-5 py-4">
//                           <div className="font-semibold">
//                             {order?.orderNumber || "N/A"}
//                           </div>

//                           <div className="mt-1 text-xs text-slate-400">
//                             ID: {order?._id}
//                           </div>
//                         </td>

//                         {/* Customer */}
//                         <td className="px-5 py-4">
//                           <div className="font-medium">
//                             {customerName}
//                           </div>

//                           <div className="text-slate-500">
//                             {customerPhone}
//                           </div>

//                           <div className="mt-1 text-xs text-slate-400">
//                             {order?.shippingAddress?.city},{" "}
//                             {order?.shippingAddress?.division}
//                           </div>
//                         </td>

//                         {/* Items */}
//                         <td className="px-5 py-4">
//                           <div className="font-semibold">
//                             {itemCount} item
//                             {itemCount !== 1 ? "s" : ""}
//                           </div>

//                           <div className="text-xs text-slate-400">
//                             {order?.items?.length || 0} product
//                             {(order?.items?.length || 0) !== 1
//                               ? "s"
//                               : ""}
//                           </div>
//                         </td>

//                         {/* Total */}
//                         <td className="px-5 py-4">
//                           <div className="font-semibold">
//                             ৳{order?.total || 0}
//                           </div>

//                           <div className="text-xs text-slate-400">
//                             Subtotal: ৳{order?.subtotal || 0}
//                           </div>

//                           {order?.shippingCost > 0 && (
//                             <div className="text-xs text-slate-400">
//                               Shipping: ৳{order.shippingCost}
//                             </div>
//                           )}
//                         </td>

//                         {/* Payment */}
//                         <td className="px-5 py-4">
//                           <div className="font-medium">
//                             {order?.paymentMethod || "N/A"}
//                           </div>

//                           <div className="mt-1 text-xs text-slate-500">
//                             {order?.paymentStatus || "N/A"}
//                           </div>
//                         </td>

//                         {/* Order Status */}
//                         <td className="px-5 py-4">
//                           <span className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize">
//                             {order?.orderStatus?.replaceAll("_", " ") ||
//                               "N/A"}
//                           </span>
//                         </td>

//                         {/* Date */}
//                         <td className="px-5 py-4 whitespace-nowrap">
//                           {order?.createdAt
//                             ? new Date(
//                                 order.createdAt
//                               ).toLocaleDateString("en-BD", {
//                                 day: "2-digit",
//                                 month: "short",
//                                 year: "numeric",
//                               })
//                             : "N/A"}
//                         </td>

//                         {/* Manage */}
//                         <td className="px-5 py-4">
//                           <Link
//                             href={`/adminOrder/AdminOrderDetail/${order?._id}`}
//                             className="font-semibold underline hover:no-underline"
//                           >
//                             Manage
//                           </Link>
//                         </td>

//                       </tr>
//                     );
//                   })}

//                 </tbody>
//               </table>

//             </div>
//           </div>
//         )}

//       </div>
//     </main>
//   );
// }