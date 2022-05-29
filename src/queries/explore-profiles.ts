import { gql } from '@apollo/client'

const EXPLORE_PROFILES = gql`
	query ExploreProfiles($sortCriteria: ProfileSortCriteria!, $cursor: Cursor) {
		exploreProfiles(request: { sortCriteria: $sortCriteria, limit: 10, cursor: $cursor }) {
			items {
				name
				handle
				picture {
					... on MediaSet {
						original {
							url
							mimeType
						}
					}
					... on NftImage {
						uri
					}
				}
				stats {
					totalPosts
					totalFollowers
					totalCollects
					totalPublications
				}
			}
		}
	}
`

export default EXPLORE_PROFILES
