import Head from 'next/head'
import Link from 'next/link'

export default function Navbar({
  title = 'Historia 2º Bach',
  home,
  page
}: {
  title?: String
  home: Boolean
  page?: 'vocabulario' | 'cronologia' | 'ejercicios'
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
                {page === 'vocabulario' ? (
                  <Link href='vocabulario' className='underline'>
                    Vocabulario
                  </Link>
                ) : (
                  <Link href='vocabulario'>Vocabulario</Link>
                )}
              </li>
              <li>
                {page === 'cronologia' ? (
                  <Link href='/cronologia' className='underline'>
                    Cronologia
                  </Link>
                ) : (
                  <Link href='/cronologia'>Cronologia</Link>
                )}
              </li>
              <li>
                {page === 'ejercicios' ? (
                  <Link href='/ejercicios' className='underline'>
                    Ejercicios
                  </Link>
                ) : (
                  <Link href='/ejercicios'>Ejercicios</Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
