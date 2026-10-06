"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const nextActions = {
    pending: ["confirmed", "cancelled"],
    confirmed: ["processing", "cancelled"],
    processing: ["packed", "cancelled"],
    packed: ["shipped"],
    shipped: ["in_transit", "out_for_delivery", "delivered"],
    in_transit: ["out_for_delivery", "delivered", "returned"],
    out_for_delivery: ["delivered", "returned"],
    delivered: ["return_requested"],
    return_requested: ["returned"],
    returned: ["refunded"],
};

export default function AdminOrderDetail() {
    const { id } = useParams();
    const router = useRouter();

    const [order, setOrder] = useState(null);
    const [busy, setBusy] = useState(false);
    const [loading, setLoading] = useState(true);

    // =========================
    // Load Order
    // =========================

    const loadOrder = async () => {
        if (!id) return;

        try {
            setLoading(true);

            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${id}`
            );

            console.log("Order Response:", res.data);

            setOrder(res.data.order);
        } catch (error) {
            console.error("Failed to load order:", error);
        } finally {
            setLoading(false);
        }
    };

    // =========================
    // Initial Load
    // =========================

    useEffect(() => {
        loadOrder();
    }, [id]);

    // =========================
    // Loading
    // =========================

    if (loading) {
        return (
            <main className="min-h-screen bg-slate-50 p-10">
                Loading order...
            </main>
        );
    }

    // =========================
    // Order Not Found
    // =========================

    if (!order) {
        return (
            <main className="min-h-screen bg-slate-50 p-10">
                <p>Order not found.</p>
            </main>
        );
    }

    // =========================
    // Change Order Status
    // =========================
    const changeStatus = async (status) => {
        setBusy(true);

        try {
            const res = await axios.patch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/admin/orders/${id}/status`,
                {
                    status: status,
                    note: `Status changed to ${status}`,
                }
            );

            console.log("Status updated:", res.data);

            // Backend থেকে নতুন order নিয়ে আসবে
            setOrder(res.data.order);

        } catch (error) {
            console.error(
                "Status update failed:",
                error.response?.data || error.message
            );

            alert(
                error.response?.data?.message ||
                "Failed to update order status"
            );

        } finally {
            setBusy(false);
        }
    };

    // =========================
    // Customer Information
    // =========================

    const customerName =
        order?.guestInfo?.name ||
        order?.shippingAddress?.fullName ||
        "N/A";

    const customerPhone =
        order?.guestInfo?.phone ||
        order?.shippingAddress?.phone ||
        "N/A";

    const customerEmail =
        order?.guestInfo?.email || "N/A";

    // =========================
    // Shipping Address
    // =========================

    const shippingAddress = order?.shippingAddress;

    // =========================
    // Render
    // =========================

    return (
        <main className="min-h-screen bg-slate-50 px-5 py-8">

            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_360px]">

                {/* ================================= */}
                {/* LEFT SIDE */}
                {/* ================================= */}

                <section className="rounded-3xl border bg-white p-6 shadow-sm">

                    {/* Order Header */}

                    <div className="flex flex-wrap items-start justify-between gap-4">

                        <div>
                            <p className="text-sm text-slate-500">
                                Order
                            </p>

                            <h1 className="text-2xl font-bold">
                                {order?.orderNumber}
                            </h1>
                        </div>

                        <span className="rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold capitalize">
                            {order?.orderStatus?.replaceAll("_", " ")}
                        </span>

                    </div>


                    {/* ================================= */}
                    {/* CUSTOMER */}
                    {/* ================================= */}

                    <div className="mt-8">

                        <h2 className="font-bold">
                            Customer
                        </h2>

                        <div className="mt-3 space-y-1 text-sm">

                            <p className="font-semibold">
                                {customerName}
                            </p>

                            <p className="text-slate-600">
                                {customerPhone}
                            </p>

                            <p className="text-slate-600">
                                {customerEmail}
                            </p>

                        </div>

                    </div>


                    {/* ================================= */}
                    {/* SHIPPING ADDRESS */}
                    {/* ================================= */}

                    <div className="mt-6 border-t pt-6">

                        <h2 className="font-bold">
                            Shipping Address
                        </h2>

                        <div className="mt-3 text-sm text-slate-600">

                            <p>
                                {shippingAddress?.address || "N/A"}
                            </p>

                            <p>
                                {shippingAddress?.upazila},{" "}
                                {shippingAddress?.city},{" "}
                                {shippingAddress?.division}
                            </p>

                            <p>
                                {shippingAddress?.country}
                            </p>

                        </div>

                    </div>


                    {/* ================================= */}
                    {/* ITEMS */}
                    {/* ================================= */}

                    <div className="mt-8 border-t pt-6">

                        <h2 className="font-bold">
                            Items
                        </h2>

                        <div className="mt-4 space-y-3">

                            {order.items?.map((item, index) => {

                                const productId =
                                    item?.product?._id ||
                                    item?.product ||
                                    "N/A";

                                const title =
                                    item?.title ||
                                    item?.product?.title ||
                                    "Product";

                                const quantity =
                                    item?.quantity || 0;

                                const price =
                                    item?.price || 0;

                                return (
                                    <div
                                        key={item?._id || index}
                                        className="rounded-xl bg-slate-50 p-4"
                                    >

                                        <div className="flex justify-between">

                                            <div>
                                                <p className="font-semibold">
                                                    {title}
                                                </p>

                                                <p className="mt-1 text-sm text-slate-500">
                                                    Product ID: {productId}
                                                </p>

                                                <p className="mt-1 text-sm">
                                                    Quantity: {quantity}
                                                </p>
                                            </div>

                                            <div className="text-right">
                                                <p className="text-sm text-slate-500">
                                                    ৳{price} × {quantity}
                                                </p>

                                                <p className="font-bold">
                                                    ৳{price * quantity}
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                );
                            })}

                        </div>

                    </div>


                    {/* ================================= */}
                    {/* STATUS HISTORY */}
                    {/* ================================= */}

                    <div className="mt-8 border-t pt-6">

                        <h2 className="font-bold">
                            Status History
                        </h2>

                        <div className="mt-4 space-y-4">

                            {order?.statusHistory?.map((event, index) => (

                                <div
                                    key={event?._id || index}
                                    className="flex justify-between gap-4 text-sm"
                                >

                                    <div>

                                        <p className="font-semibold capitalize">
                                            {event?.status?.replaceAll("_", " ")}
                                        </p>

                                        <p className="text-slate-500">
                                            {event?.note}
                                        </p>

                                        <p className="text-xs text-slate-400">
                                            Changed by: {event?.changedBy}
                                        </p>

                                    </div>

                                    <span className="whitespace-nowrap text-slate-500">
                                        {event?.changedAt
                                            ? new Date(
                                                event.changedAt
                                            ).toLocaleString()
                                            : ""}
                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ================================= */}
                {/* RIGHT SIDE */}
                {/* ================================= */}

                <aside className="h-fit rounded-3xl border bg-white p-6 shadow-sm">

                    <h2 className="font-bold">
                        Order Actions
                    </h2>


                    {/* Status Buttons */}

                    <div className="mt-4 grid gap-2">

                        {(nextActions[order?.orderStatus] || []).map(
                            (action) => (

                                <button
                                    key={action}
                                    disabled={busy}
                                    onClick={() => changeStatus(action)}
                                    className="rounded-xl border px-4 py-3 text-left font-semibold capitalize hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {busy
                                        ? "Updating..."
                                        : `Mark as ${action.replaceAll(
                                            "_",
                                            " "
                                        )}`}
                                </button>

                            )
                        )}

                    </div>


                    {/* ================================= */}
                    {/* ORDER SUMMARY */}
                    {/* ================================= */}

                    <div className="mt-8 border-t pt-6">

                        <div className="flex justify-between text-sm">
                            <span>Subtotal</span>

                            <b>
                                ৳{order?.subtotal || 0}
                            </b>
                        </div>


                        <div className="mt-2 flex justify-between text-sm">
                            <span>Discount</span>

                            <b>
                                ৳{order?.discount || 0}
                            </b>
                        </div>


                        <div className="mt-2 flex justify-between text-sm">
                            <span>Delivery</span>

                            <b>
                                ৳{order?.shippingCost || 0}
                            </b>
                        </div>


                        <div className="mt-3 flex justify-between text-xl font-bold">
                            <span>Total</span>

                            <b>
                                ৳{order?.total || 0}
                            </b>
                        </div>

                    </div>


                    {/* ================================= */}
                    {/* PAYMENT */}
                    {/* ================================= */}

                    <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm">

                        <div className="flex justify-between">
                            <span>Payment</span>

                            <b>
                                {order?.paymentMethod || "N/A"}
                            </b>
                        </div>

                        <div className="mt-2 flex justify-between">

                            <span>
                                Payment Status
                            </span>

                            <b className="capitalize">
                                {order?.paymentStatus || "N/A"}
                            </b>

                        </div>

                    </div>


                    {/* ================================= */}
                    {/* COURIER */}
                    {/* ================================= */}

                    {order?.courier?.trackingId && (

                        <div className="mt-6 rounded-xl bg-slate-50 p-4 text-sm">

                            <p className="text-slate-500">
                                Tracking ID
                            </p>

                            <p className="mt-1 font-bold">
                                {order?.courier?.trackingId}
                            </p>

                        </div>

                    )}


                    {/* ================================= */}
                    {/* BACK */}
                    {/* ================================= */}

                    <button
                        onClick={() => router.back()}
                        className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-3 font-semibold text-white"
                    >
                        Back
                    </button>

                </aside>

            </div>

        </main>
    );
}