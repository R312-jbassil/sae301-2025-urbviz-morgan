import type { APIRoute } from "astro";
import PocketBase from "pocketbase";

interface SavePayload {
  svg?: string;
  userId?: string;
  frameMatId?: string;
  branchMatId?: string;
  bridgeWidth?: number;
  glassSize?: number;
}

const PB_URL = import.meta.env.PUBLIC_PB_URL || "http://127.0.0.1:8090";

export const POST: APIRoute = async ({ request }) => {
  let payload: SavePayload;

  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Corps de requête invalide." }), {
      status: 400,
    });
  }

  const { svg, userId, frameMatId, branchMatId, bridgeWidth, glassSize } = payload;

  if (!svg || typeof svg !== "string") {
    return new Response(JSON.stringify({ ok: false, error: "SVG manquant." }), { status: 422 });
  }

  if (!frameMatId || !branchMatId) {
    return new Response(
      JSON.stringify({ ok: false, error: "Les matériaux monture et branches sont requis." }),
      { status: 422 },
    );
  }

  const pb = new PocketBase(PB_URL);

  try {
    const record = await pb.collection("lunette").create({
      code_svg: svg,
      date_creation: new Date().toISOString(),
      taille_verre: glassSize ?? 48,
      largeur_pont: bridgeWidth ?? 20,
      IDutilisateur: userId ?? "ANONYMOUS",
      materiau_monture: frameMatId,
      materiau_branche: branchMatId,
    });

    return new Response(JSON.stringify({ ok: true, id: record.id }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Enregistrement impossible.";
    return new Response(JSON.stringify({ ok: false, error: message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
};
