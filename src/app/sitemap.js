export default function sitemap() {
  const baseUrl = "https://www.tejasnayak.me";
  const routes = ["", "/about", "/skills", "/projects", "/achievements", "/terminal", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
