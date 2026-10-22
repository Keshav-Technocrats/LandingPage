export const dynamic = "force-static";
import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Keshav Technocrats", short_name: "Keshav", start_url: "/", display: "standalone", background_color: "#0a0e17", theme_color: "#ff8a00", icons: [{ src: "/icon.png", sizes: "256x256", type: "image/png" }] };
}
