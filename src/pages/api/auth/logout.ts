import type { APIRoute } from "astro";
import { createServerPocketBase, cookieOptions } from "../../../lib/pocketbase.server";

export const POST: APIRoute = async ({ request }) => {
  const pb = createServerPocketBase(request.headers.get("cookie") ?? "");
  pb.authStore.clear();
  const clearedCookie = pb.authStore.exportToCookie(cookieOptions);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": clearedCookie,
    },
  });
};
