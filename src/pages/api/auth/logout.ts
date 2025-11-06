import type { APIRoute } from "astro";
import pb from "../../../lib/pocketbase.server";

const cookieOptions = {
  httpOnly: true,
  secure: import.meta.env.PROD,
  sameSite: "Lax" as const,
  path: "/",
};

export const POST: APIRoute = async () => {
  pb.authStore.clear();
  const clearedCookie = pb.authStore.exportToCookie(cookieOptions);
  pb.authStore.clear();

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": clearedCookie,
    },
  });
};
