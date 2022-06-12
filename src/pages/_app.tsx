import apollo from '@/lib/apollo'
import 'tailwindcss/tailwind.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { ApolloProvider } from '@apollo/client'
import { SkeletonTheme } from 'react-loading-skeleton'

const App = ({ Component, pageProps }) => (
	<ApolloProvider client={apollo}>
		<SkeletonTheme baseColor="#00000010" highlightColor="#00000005" width={100}>
			<Component {...pageProps} />
		</SkeletonTheme>
	</ApolloProvider>
)

export default App
