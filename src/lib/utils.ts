export function chunk<T>(haystack: Array<T>, size: number): Array<T[]> {
	const chunks = []
	let index = 0

	do {
		chunks.push(haystack.slice(index, index + size))
		index += size
	} while (index < haystack.length)

	return chunks
}

export const normalizeUrl = (url: string): string => {
	if (!url) return null
	const parsed = new URL(url)

	if (parsed.host === 'ipfs.infura.io') parsed.host = 'lens.infura-ipfs.io'
	if (parsed.protocol == 'ipfs:') {
		return `https://lens.infura-ipfs.io/ipfs/${parsed.hostname != '' ? parsed.hostname : parsed.pathname.slice(2)}`
	}

	return parsed.toString()
}
