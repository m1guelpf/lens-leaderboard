export type LensProfile = {
	name: string
	handle: string
	picture: {
		original?: {
			url: string
			mimeType: string
		}
	}
	stats: {
		totalPosts: number
		totalFollowers: number
		totalFollowing: number
		totalCollects: number
	}
}
