"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";

export async function updateProfile(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to peform this action");
  const nationalId = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId))
    throw new Error("Please provide a valid national ID");
  const updateData = {
    nationality,
    countryFlag,
    nationalId,
  };
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
  revalidatePath("/account/profile");
}

export async function createReservation(reservationData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to peform this action");
  const guestId = session.user.guestId;
  const submitedData = Object.fromEntries(formData);

  const createFields = {
    ...reservationData,
    ...submitedData,
    guestId,
    extrasPrice: 0,
    totalPrice: reservationData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([createFields]);

  if (error) {
    throw new Error("Reservation could not be created");
  }
  revalidatePath(`/cabins/${reservationData.cabinId}`);
  redirect("/cabins/thank-you");
}

export async function deleteResevation(bookingId) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to peform this action");

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("You are not allowed to delete this reservation");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    throw new Error("Reservation could not be deleted");
  }
  revalidatePath("/account/reservations");
}

export async function updateReservation(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to peform this action");
  const reservationId = Number(formData.get("reservationId"));
  const numGuests = Number(formData.get("numGuests"));
  const observations = formData.get("observations").slice(0, 1000);
  const updateFields = {
    numGuests,
    observations,
  };

  const guestBookings = await getBookings(session.user.guestId);
  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(reservationId))
    throw new Error("You are not allowed to update this reservation");

  const { error } = await supabase
    .from("bookings")
    .update(updateFields)
    .eq("id", reservationId);

  if (error) {
    throw new Error("Reservation could not be updated");
  }
  revalidatePath(`/account/reservations`);
  revalidatePath(`/account/reservations/edit/${reservationId}`);
  redirect("/account/reservations");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
