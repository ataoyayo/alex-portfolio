/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "alex-portfolio";
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const isUserSite = repositoryName.endsWith(".github.io");
const basePath = isGitHubPagesBuild && !isUserSite
  ? process.env.NEXT_PUBLIC_BASE_PATH || `/${repositoryName}`
  : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
