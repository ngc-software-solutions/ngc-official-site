/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Pin the project root so Turbopack never resolves packages (tailwindcss)
  // from the parent folder ~/Documents/Git/ngc.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
