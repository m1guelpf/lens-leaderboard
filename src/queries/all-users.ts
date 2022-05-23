import { gql } from '@apollo/client'

const ALL_USERS_QUERY = gql`
	query ($profileIds: [ProfileId!]!) {
		profiles(request: { profileIds: $profileIds }) {
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
