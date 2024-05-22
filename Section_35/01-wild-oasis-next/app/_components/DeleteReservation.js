import { TrashIcon } from "@heroicons/react/24/solid";

function DeleteReservation({ bookingId }) {
  return (
    <button className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900">
      <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteReservation;
