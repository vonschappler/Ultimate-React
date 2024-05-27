import FormButton from "@/app/_components/FormButton";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const { reservationId } = params;
  const { cabinId, numGuests, observations } = await getBooking(reservationId);
  const cabin = await getCabin(cabinId);
  const { maxCapacity } = cabin;

  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-accent-400">
        Edit Reservation #{reservationId}
      </h2>

      <form
        className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
        action={updateReservation}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            required
            defaultValue={numGuests}
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
            className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
            defaultValue={observations}
          />
        </div>
        <input
          type="hidden"
          value={reservationId}
          name="reservationId"
          readOnly
        />
        <div className="flex items-center justify-end gap-6">
          <FormButton pendingLabel="Updating reservation...">
            Update reservation
          </FormButton>
        </div>
      </form>
    </div>
  );
}
