// Module-scoped timestamp generated once when the file/module is loaded.
// This changes on every full page refresh or hot module replacement (HMR),
// forcing Next.js image optimizer to bypass cache and read the updated file.
const moduleTimestamp = Date.now();

/**
 * Appends a cache-buster query parameter to local image URLs in development mode.
 * This prevents Next.js's image optimizer from serving stale versions of local images
 * when the developer overwrites them in the public folder.
 * 
 * @param src - The image source path
 * @returns The cache-busted image source path if in dev mode, otherwise the original path
 */
export const getCleanImageUrl = (src: string): string => {
  if (!src) return src;

  // Only apply to local paths starting with '/' and when in development mode
  if (process.env.NODE_ENV === "development" && src.startsWith("/") && !src.startsWith("//")) {
    const separator = src.includes("?") ? "&" : "?";
    return `${src}${separator}t=${moduleTimestamp}`;
  }

  return src;
};
