import 'tailwindcss/tailwind.css'
import { Global } from '@emotion/react'
import globalStyles from 'src/styles/styles'
import 'src/styles/fonts/stylesheet.css'

const App = ({ Component, pageProps }) => (
	<>
		<Global styles={globalStyles} />
		<Component {...pageProps} />
	</>
)

export default App
