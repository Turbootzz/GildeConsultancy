import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* Static website for now.. */
	output: "export",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
