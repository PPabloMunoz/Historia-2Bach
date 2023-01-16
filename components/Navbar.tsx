import Head from 'next/head'
import Link from 'next/link'

export default function Navbar({ title = 'Historia 2º Bach', page = 'Home' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h2>Navbar</h2>
      <Link href='/'>Inicio</Link>
    </>
  )
}
