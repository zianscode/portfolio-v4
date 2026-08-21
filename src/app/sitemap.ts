import { MetadataRoute } from "next";
import { detailedProjects } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://zianscode.vercel.app";

  const staticRoutes = [
    "",
    "/about",
    "/projects",
    "/roadmap",
    "/contact",
    "/chatroom",
    "/dashboard",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = detailedProjects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
