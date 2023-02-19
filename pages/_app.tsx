import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UserContext from '@/utils/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContext>
      <Component {...pageProps} />
    </UserContext>
  )
}
