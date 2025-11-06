import type { APIRoute } from "astro";
import pb from "../../../lib/pocketbase.server";

const cookieOptions = {
  httpOnly: true,
  secure: import.meta.env.PROD,
  sameSite: "Lax" as const,
  path: "/",
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const password = typeof body?.password === "string" ? body.password : "";

    if (!email || !password) {
      return new Response(JSON.stringify({ ok: false, message: "Email et mot de passe requis." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    pb.authStore.clear();

    const authData = await pb.collection("users").authWithPassword(email, password);
    const authCookie = pb.authStore.exportToCookie(cookieOptions);

    const user = {
      id: authData.record.id,
      email: authData.record.email,
      name: authData.record.name ?? authData.record.username ?? authData.record.email,
    };

    pb.authStore.clear();

    return new Response(JSON.stringify({ ok: true, user }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Set-Cookie": authCookie,
      },
    });
  } catch (error) {
    console.error("login error", error);
    const status = error?.status ?? 401;
    const message =
      typeof error?.message === "string" && error.message
        ? error.message
        : "Identifiants invalides ou compte introuvable.";
    pb.authStore.clear();
    return new Response(JSON.stringify({ ok: false, message }), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  }
};
