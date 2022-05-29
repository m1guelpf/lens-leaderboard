import { API_URL } from './consts'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const apollo = new ApolloClient({
	link: new HttpLink({ uri: API_URL, fetch }),
	cache: new InMemoryCache(),
})

export default apollo
