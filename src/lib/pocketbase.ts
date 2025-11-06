import PocketBase from "pocketbase";

const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:8090"
    : "https://<ton-sousdomaine>.<ton-domaine>.<tld>"; // remplace par ta vraie URL (tu peux enlever :443)

export const pb = new PocketBase(baseUrl);
