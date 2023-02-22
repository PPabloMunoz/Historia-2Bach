import Link from 'next/link'
import Navbar from '@/components/Navbar'

import buttonStyles from '@/styles/button.module.css'

import { BiUpArrowAlt } from 'react-icons/bi'
import { useUserContext } from '@/utils/UserContext'

export default function Home() {
  const { theme } = useUserContext()

  return (
    <div
      className={
        theme === 'dark' ? 'dark bg-neutral-800 text-white min-h-screen' : ''
      }
    >
      <Navbar home />
      <h1 className='text-3xl lg:text-6xl font-bold text-center mt-6 lg:mb-20'>
        Historia 2º Bach
      </h1>
      <p className='font-semibold text-center text-xl lg:text-4xl my-9 lg:mb-32'>
        Entra en una de las páginas para empezar a aprender y practicar
      </p>
      <div className='flex flex-row justify-around items-center w-full mt-20 lg:mt-0'>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link
            href='/vocabulario'
            className={buttonStyles.button + ' text-sm lg:text-base'}
          >
            Vocabulario
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link
            href='/cronologia'
            className={buttonStyles.button + ' text-sm lg:text-base'}
          >
            Cronología
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link
            href='/ejercicios'
            className={buttonStyles.button + ' text-sm lg:text-base'}
          >
            Ejercicios
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
      </div>
    </div>
  )
}
