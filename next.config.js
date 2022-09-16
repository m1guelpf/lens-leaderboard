/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [{ protocol: 'https', hostname: '**' }],
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
}

module.exports = nextConfig
