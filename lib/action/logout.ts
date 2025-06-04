"use server";

import { signOut } from "@/auth";// Adjust to your auth import path

export async function logoutAction() {
  await signOut({ redirectTo: "/" });
}
