"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import axios from "axios";

export default function OrderSuccessPage() {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const fetchOrder = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${id}`
        );

        console.log("ORDER RESPONSE:", res.data);

        setOrder(res.data.order);
      } catch (err) {
        console.error("ORDER FETCH ERROR:", err);

        setError(
          err.response?.data?.message ||
            "Could not load order"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>Loading order...</p>
      </main>
    );
  }

  // Error
  if (error) {
    return (
      <main className="mx-auto max-w-2xl p-10">
        <div className="rounded-2xl bg-red-50 p-5 text-red-600">
          {error}
        </div>
      </main>
    );
  }

  // Order not found
  if (!order) {
    return (
      <main className="mx-auto max-w-2xl p-10">
        <div className="rounded-2xl bg-red-50 p-5 text-red-600">
          Order not found
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-5 py-16">

      <div className="rounded-3xl border bg-white p-8 text-center shadow-sm">

        {/* Success Icon */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-2xl">
          ✓
        </div>

        <h1 className="mt-5 text-3xl font-bold">
          Order placed
        </h1>

        <p className="mt-2 text-slate-500">
          Order #{order.orderNumber}
        </p>

        <p className="mt-5 text-xl font-bold">
          ৳{order.total}
        </p>

        <p className="mt-3 text-sm text-slate-500">
          Status:{" "}
          <span className="font-semibold text-slate-900">
            {order.orderStatus}
          </span>
        </p>

        <Link
          href={`/track/${order._id}`}
          className="mt-8 inline-block rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white"
        >
          Track Order
        </Link>

      </div>

    </main>
  );
}