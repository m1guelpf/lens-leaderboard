export function chunk<T>(haystack: Array<T>, size: number): Array<T[]> {
	const chunks = []
	let index = 0

	do {
		chunks.push(haystack.slice(index, index + size))
		index += size
	} while (index < haystack.length)

	return chunks
}
