"use client";

import { createReservation } from "@/app/_lib/actions";
import { differenceInDays } from "date-fns";
import Image from "next/image";
import FormButton from "./FormButton";
import { useReservation } from "./ReservationContext";

function ReservationForm({ cabin, user }) {
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const { range, resetRange } = useReservation();

  const startDate = range.from;
  const endDate = range.to;

  const numNights = differenceInDays(endDate, startDate);

  const cabinPrice = numNights * (regularPrice - discount);

  const reservationData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createFormData = createReservation.bind(null, reservationData);

  return (
    <div className="scale-[1.01]">
      <div className="flex items-center justify-between bg-primary-800 px-16 py-2 text-primary-300">
        <p>Logged in as</p>

        <div className="flex items-center gap-4">
          <div className="relative h-8 w-8">
            <Image
              referrerPolicy="no-referrer"
              className="h-8 rounded-full object-cover"
              src={user.image}
              alt={user.name}
              fill
            />
          </div>
          <p>{user.name}</p>
        </div>
      </div>

      <form
        className="flex flex-col gap-5 bg-primary-900 px-16 py-10 text-lg"
        action={async (formData) => {
          await createFormData(formData);
          resetRange();
        }}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          {startDate && endDate ? (
            <FormButton pendingLabel="Creating reservation...">
              Reserve now
            </FormButton>
          ) : (
            <p className="text-base text-primary-300">
              Start by selecting dates
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
