import Head from 'next/head'
import Link from 'next/link'

export default function Navbar({
  title = 'Historia 2º Bach',
  home
}: {
  title?: String
  home: Boolean
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className='flex flex-row justify-around items-center h-20 text-black font-bold text-xl bg-slate-300'>
        <Link href='/'>Historia 2º Bach</Link>
        {!home && (
          <div>
            <ul className='flex flex-row justify-center items-center gap-4 font-medium text-lg'>
              <li>
                <Link href='vocabulario'>Vocabulario</Link>
              </li>
              <li>
                <Link href='cronologia'>Cronología</Link>
              </li>
              <li>
                <Link href='ejercicios'>Ejercicios</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
