import { gql } from '@apollo/client'

const ALL_USERS_QUERY = gql`
	query ($profileIds: [ProfileId!]!) {
		profiles(request: { profileIds: $profileIds, limit: 50 }) {
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
					totalFollowing
					totalCollects
				}
			}
		}
	}
`

export default ALL_USERS_QUERY
