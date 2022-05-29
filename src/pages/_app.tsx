import apollo from '@/lib/apollo'
import 'tailwindcss/tailwind.css'
import { ApolloProvider } from '@apollo/client'

const App = ({ Component, pageProps }) => (
	<ApolloProvider client={apollo}>
		<Component {...pageProps} />
	</ApolloProvider>
)

export default App
