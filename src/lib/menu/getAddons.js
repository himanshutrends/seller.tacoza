"use server";
import { getSession, logout } from "@/lib/auth/session";
import { apiGet } from "@/handlers/apiHandler";
import { notFound, redirect } from "next/navigation";

export async function getAddons() {
  const user = await getSession();
  const response = await apiGet("/api/shop/addon-categories", {
    headers: {
      Authorization: `Bearer ${user?.tokens?.access}`,
    },
  });
  if (response.status === 404) return notFound();
  if (response.status === 401) {
    logout();
    redirect('/login');
  }
  return response;
}