import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { BiUpArrowAlt } from 'react-icons/bi'
import { useUserContext } from '@/utils/UserContext'

import buttonStyles from '@/styles/button.module.css'

export default function Home() {
  const { theme } = useUserContext()

  return (
    <div
      className={
        theme === 'dark' ? 'dark bg-neutral-800 text-white min-h-screen' : ''
      }
    >
      <Navbar home />
      <h1 className='text-6xl font-bold text-center mt-6 mb-20'>
        Historia 2º Bach
      </h1>
      <p className='font-semibold text-center text-4xl mb-32'>
        Entra en una de las páginas para empezar a aprender y practicar
      </p>
      <div className='flex flex-row justify-around items-center w-full'>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link href='/vocabulario' className={buttonStyles.button}>
            Vocabulario
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link href='/cronologia' className={buttonStyles.button}>
            Cronología
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link href='/ejercicios' className={buttonStyles.button}>
            Ejercicios
          </Link>
          <BiUpArrowAlt size={140} className='hidden sm:block' />
        </div>
      </div>
    </div>
  )
}
