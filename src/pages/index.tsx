import Link from 'next/link'
import Head from 'next/head'
import { BiUpArrowAlt } from 'react-icons/bi'

// Styles
import buttonStyles from '@/src/styles/button.module.css'

// Components
import Navbar from '@components/Navbar'
import ChangeThemeBlock from '@components/ChangeThemeBlock'

// Functions
import { useUserContext } from '@utils/UserContext'

export default function Home() {
  const { theme } = useUserContext()

  return (
    <div
      className={
        theme === 'dark' ? 'dark bg-neutral-800 text-white min-h-screen' : ''
      }
    >
      <Head>
        <meta http-equiv='X-UA-Compatible' content='IE=7' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
        <meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Navbar home />
      <h1 className='text-3xl lg:text-6xl text-center font-bold mt-6 lg:mb-20'>
        Historia 2º Bach
      </h1>
      <p className='text-xl lg:text-4xl text-center font-semibold my-9 lg:mb-32'>
        Entra en una de las páginas para empezar a aprender y practicar
      </p>
      <div className='w-full flex flex-row justify-around items-center mt-20 lg:mt-0'>
        <div className='w-1/4 flex flex-col justify-center items-center gap-10'>
          <Link
            href='/vocabulario'
            className={buttonStyles.button + ' text-sm lg:text-base'}
          >
            Vocabulario
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
        <div className='w-1/4 flex flex-col justify-center items-center gap-10'>
          <Link
            href='/cronologia'
            className={buttonStyles.button + ' text-sm lg:text-base'}
          >
            Cronología
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
        <div className='w-1/4 flex flex-col justify-center items-center gap-10'>
          <Link
            href='/ejercicios'
            className={buttonStyles.button + ' text-sm lg:text-base'}
          >
            Ejercicios
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
      </div>
      <ChangeThemeBlock />
    </div>
  )
}
