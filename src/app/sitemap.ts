import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jamzdeveloper.com";
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/sobre-mi", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/proyectos", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/servicios", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blueprints", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/speaker", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/agendar", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
