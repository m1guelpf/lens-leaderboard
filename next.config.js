/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		dangerouslyAllowSVG: true,
		domains: ['ipfs.infura.io', 'statics-polygon-lens.s3.eu-west-1.amazonaws.com', 'avatar.tobi.sh'],
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
}

module.exports = nextConfig
