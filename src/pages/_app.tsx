import '../styles/globals.css'
import type { AppProps } from 'next/app'
import UserContext from '@utils/UserContext'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContext>
      <Component {...pageProps} />
      <Analytics />
    </UserContext>
  )
}
