import { chunk } from '../utils'
import { BigNumber } from 'ethers'
import { API_URL } from '../consts'
import ALL_USERS_QUERY from '@/queries/all-users'
import USER_COUNT_QUERY from '@/queries/user-count'
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

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

class Lens {
	#apollo: ApolloClient<NormalizedCacheObject>

	constructor() {
		this.#apollo = new ApolloClient({
			link: new HttpLink({ uri: API_URL, fetch }),
			cache: new InMemoryCache(),
		})
	}

	async getProfileCount(): Promise<number> {
		const {
			data: {
				globalProtocolStats: { totalProfiles },
			},
		} = await this.#apollo.query({ query: USER_COUNT_QUERY })

		return totalProfiles
	}

	async getProfiles(): Promise<LensProfile[]> {
		const profileIds = this.#buildProfileIds(await this.getProfileCount())

		return Promise.all(
			profileIds.map(async profileIds => {
				const {
					data: {
						profiles: { items },
					},
				} = await this.#apollo.query({ query: ALL_USERS_QUERY, variables: { profileIds } })

				return items
			})
		).then(chunks => chunks.flat())
	}

	#buildProfileIds(totalProfiles: number): Array<string[]> {
		return chunk<string>(
			[...new Array(totalProfiles).keys()].map(i => BigNumber.from(i).toHexString()),
			45
		)
	}
}

export default new Lens()
