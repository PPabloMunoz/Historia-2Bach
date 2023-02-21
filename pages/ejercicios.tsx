import { useState, useEffect } from 'react'

import { useUserContext } from '@/utils/UserContext'
import { aleatoryFunction, sortArray } from '@/utils/functions'

import Navbar from '@/components/Navbar'
import { Cronologia } from '@/types'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export default function CronologiaPage() {
  const { theme } = useUserContext()

  const [viewSolution, setViewSolution] = useState<Boolean>(false)
  const [blockSelected, setBlockSelected] = useState<number>(1)
  // const [data, setData] = useState<Array<Cronologia>>()
  const [aleatory, setAleatory] = useState<Array<Cronologia>>()
  const [mySolution, setMySolution] = useState<Array<Cronologia>>()
  const [solution, setSolution] = useState<Array<Cronologia>>()

  useEffect(() => {
    aleatoryFunction(blockSelected, 6, setAleatory)
  }, [blockSelected])

  useEffect(() => {
    sortArray(aleatory!, blockSelected, setSolution)
  }, [aleatory, blockSelected])

  return (
    <div
      className={
        theme === 'dark' ? 'dark bg-neutral-800 text-white min-h-screen' : ''
      }
    >
      <Navbar
        title='Cronología - Historia 2º Bach'
        home={false}
        page='ejercicios'
      />
      <h1 className='text-5xl font-bold text-center mt-6 mb-10'>Ejercicios</h1>
      <div className='w-full flex flex-row justify-center items-center mb-10 gap-5'>
        <select
          id='countries'
          className='max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          defaultValue={1}
          onChange={(e) => {
            console.log(e.target.value, 'value')
            console.log(typeof parseInt(e.target.value), ':type of value')
            setBlockSelected(parseInt(e.target.value))
          }}
        >
          <option value={1}>Bloques 1 y 2</option>
          <option value={2}>Bloques 3 y 4</option>
          <option value={3}>Bloques 5 al 8</option>
        </select>
        <button className='bg-purple-600 py-2 px-2 rounded-lg'>
          Cambiar palabras
        </button>
      </div>

      <main className='flex flex-row justify-evenly items-start gap-5 container m-auto'>
        <div className='flex flex-col justify-start items-center'>
          <h2 className='font-bold text-xl text-center mb-7'>Palabras</h2>
          <section className='flex flex-col justify-center items-center gap-2 min-w-[200px]'>
            {aleatory?.map((item) => (
              <p
                key={item.id}
                className='bg-blue-600 w-full text-center rounded-lg py-2 px-3 text-sm text-white dark:text-white'
              >
                {item.name}
              </p>
            ))}
          </section>
        </div>
        <div>
          <h2 className='font-bold text-xl text-center mb-7'>Mi Solución</h2>
        </div>
        <div className='relative'>
          <h2 className='font-bold text-xl text-center mb-7'>Solucion</h2>
          <section
            className={`min-w-[200px] flex flex-col justify-center items-center gap-2 ${
              !viewSolution && 'blur'
            }`}
          >
            {solution?.map((item) => (
              <p
                key={item.id}
                className='bg-blue-600 w-full text-center rounded-lg py-2 px-3 text-sm text-white dark:text-white'
              >
                {item.name}
              </p>
            ))}
          </section>
          <div
            className='absolute top-0 right-0 bg-blue-600 px-2 py-2 rounded-lg text-xs cursor-pointer'
            onClick={() => setViewSolution(!viewSolution)}
          >
            {viewSolution ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
      </main>
    </div>
  )
}
