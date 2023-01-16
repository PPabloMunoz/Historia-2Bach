import Head from 'next/head'
import Link from 'next/link'

export default function Navbar({ title = 'Historia 2º Bach' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className='flex flex-row justify-start items-center h-20 text-black font-bold px-20 text-xl bg-slate-300'>
        <Link href='/'>Historia 2º Bach</Link>
      </nav>
    </>
  )
}
