import '../styles/globals.css'
import { RobinhoodProvider } from '../context/robinhoodContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl='https://1v8rrkivyd3p.usemoralis.com:2053/server'
      appId='AY3r7WBGbIfqtjx4HmaKPYcWviGoEfAoY1CPnxNY'
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  )
}

export default MyApp
