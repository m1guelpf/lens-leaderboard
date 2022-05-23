export type Profile = {
	name: string
	handle: string
	avatar?: string
	followers: number
	following: number
	posts: number
	collects: number
}

export type Filter = { label: string; item: (Profile) => number }
