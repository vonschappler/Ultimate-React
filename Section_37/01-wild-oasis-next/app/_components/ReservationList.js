"use client";

import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteResevation } from "../_lib/actions";

export default function ReservationList({ bookings }) {
  const [opmisticBookings, opmisticDelete] = useOptimistic(bookings, (currentBookings, bookingId) => {
    return currentBookings.filter(booking => booking.id !== bookingId)
  });

  async function handleDelete(bookingId) {
    opmisticDelete(bookingId);
    await deleteResevation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {opmisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
