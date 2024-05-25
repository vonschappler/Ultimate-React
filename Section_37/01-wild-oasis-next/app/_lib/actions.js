"use server";

import { auth, signIn, signOut } from "./auth";
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
  const { data, error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) {
    throw new Error("Guest could not be updated");
  }
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
