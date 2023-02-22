import Head from 'next/head'
import Link from 'next/link'

import { useUserContext } from '@/utils/UserContext'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export default function Navbar({
  title = 'Historia 2º Bach',
  home,
  page
}: {
  title?: String
  home: Boolean
  page?: 'vocabulario' | 'cronologia' | 'ejercicios'
}) {
  const { theme, changeTheme } = useUserContext()

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav className='flex flex-row justify-around items-center h-20 text-black font-bold text-xl bg-slate-300 relative dark:bg-neutral-600 dark:text-white'>
        <Link href='/' className={`text-xl ${!home && 'hidden lg:block'}`}>
          Historia 2º Bach
        </Link>
        {!home && (
          <div>
            <ul className='flex flex-row justify-center items-center gap-4 font-medium text-base lg:text-lg'>
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
        <div className='absolute right-2 top-0 h-full lg:w-20 flex justify-center items-center'>
          {theme === 'dark' ? (
            <BsFillSunFill
              size={30}
              className='cursor-pointer text-3xl'
              onClick={changeTheme}
              color='#fff'
            />
          ) : (
            <BsFillMoonFill
              size={30}
              className='cursor-pointer text-3xl'
              onClick={changeTheme}
            />
          )}
        </div>
      </nav>
    </>
  )
}
