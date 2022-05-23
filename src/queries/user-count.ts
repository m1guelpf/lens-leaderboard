import { gql } from '@apollo/client'

const USER_COUNT_QUERY = gql`
	query {
		globalProtocolStats {
			totalProfiles
		}
	}
`

export default USER_COUNT_QUERY
