import {
  cronoBloques1_2,
  cronoBloque3_4,
  cronoBloque5_6
} from '@/utils/dataCronologia'
import {
  vocBloque1,
  vocBloque2,
  vocBloque3,
  vocBloque4,
  vocBloque5
} from '@/utils/dataVocabulario'

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { BiUpArrowAlt } from 'react-icons/bi'

import buttonStyles from '@/styles/button.module.css'

export default function Home() {
  return (
    <>
      <Navbar home={true} />
      <h1 className='text-5xl font-bold text-center mt-6 mb-20'>
        Historia 2º Bach
      </h1>
      <p className='font-semibold text-center text-4xl mb-32'>
        Entra en una de nuestras páginas para empezar a aprender y practicar
      </p>
      <div className='flex flex-row justify-around items-center w-full'>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link href='/vocabulario' className={buttonStyles.button}>
            Vocabulario
          </Link>
          <BiUpArrowAlt size={140} />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link href='/cronologia' className={buttonStyles.button}>
            Cronología
          </Link>
          <BiUpArrowAlt size={140} />
        </div>
        <div className='flex flex-col justify-center items-center gap-10 w-1/4'>
          <Link href='/ejercicios' className={buttonStyles.button}>
            Ejercicios
          </Link>
          <BiUpArrowAlt size={140} />
        </div>
      </div>
    </>
  )
}
