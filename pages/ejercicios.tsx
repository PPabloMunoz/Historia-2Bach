import { useState, useEffect } from 'react'

import { useUserContext } from '@/utils/UserContext'
import {
  aleatoryFunction,
  sortArray,
  checkItemOnArray
} from '@/utils/functions'

import Navbar from '@/components/Navbar'
import { Cronologia } from '@/types'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import ChangeThemeBlock from '@/components/ChangeThemeBlock'

export default function CronologiaPage() {
  const { theme } = useUserContext()

  // Check if is client or server side
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Window size
  const [windowWidth, setWindowWidth] = useState(
    isClient ? window.innerWidth : 800
  )
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
      console.log(window.innerWidth, 'width')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const [range, setRange] = useState<number>(9)
  const [blockSelected, setBlockSelected] = useState<number>(1)
  const [aleatory, setAleatory] = useState<Array<Cronologia>>()
  const [mySolution, setMySolution] = useState<Array<Cronologia>>([])

  const [solution, setSolution] = useState<Array<Cronologia>>()
  const [viewSolution, setViewSolution] = useState<Boolean>(false)

  useEffect(() => {
    aleatoryFunction(blockSelected, range, setAleatory)
  }, [blockSelected, range])

  useEffect(() => {
    sortArray(aleatory!, blockSelected, setSolution)
  }, [aleatory, blockSelected])

  function changeWords() {
    aleatoryFunction(blockSelected, range, setAleatory)
  }

  function addToMySolution(item: Cronologia) {
    const newArray = [...mySolution!, item]

    setMySolution(newArray)
  }

  function removeFromMySolution(item: Cronologia) {
    const temp = mySolution
    const array = temp.filter((object) => object.id !== item.id)

    setMySolution(array)
  }

  return (
    <div
      className={
        theme === 'dark' ? 'dark bg-neutral-800 text-white min-h-screen' : ''
      }
    >
      <Navbar
        title='Ejercicios - Historia 2º Bach'
        home={false}
        page='ejercicios'
      />
      <h1 className='text-3xl lg:text-5xl font-bold text-center mt-6 mb-10'>
        Ejercicios
      </h1>
      {windowWidth! >= 800 && isClient ? (
        <>
          <div className='w-full flex flex-col lg:flex-row justify-center items-center mb-6 lg:mb-10 gap-5 px-10'>
            <select
              id='countries'
              className='max-w-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              defaultValue={1}
              onChange={(e) => setBlockSelected(parseInt(e.target.value))}
            >
              <option value={1}>Bloques 1 y 2</option>
              <option value={2}>Bloques 3 y 4</option>
              <option value={3}>Bloques 5 al 8</option>
            </select>
            <button
              className='bg-purple-600 py-2 px-2 rounded-lg text-white'
              onClick={() => {
                changeWords()
                setViewSolution(false)
                setMySolution([])
              }}
            >
              Cambiar palabras
            </button>
          </div>

          <div className='flex justify-center items-center my-7'>
            {blockSelected === 1 ? (
              <div className='flex flex-col justify-center items-center w-56'>
                <label
                  htmlFor='numWords1'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  {range} palabras
                </label>
                <input
                  id='numWords1'
                  type='range'
                  min={4}
                  max={19}
                  defaultValue={9}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                  onChange={(e) => setRange(parseInt(e.target.value))}
                />
              </div>
            ) : blockSelected === 2 ? (
              <div className='flex flex-col justify-center items-center w-56'>
                <label
                  htmlFor='numWords2'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  {range} palabras
                </label>
                <input
                  id='numWords2'
                  type='range'
                  min={4}
                  max={29}
                  defaultValue={9}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                  onChange={(e) => setRange(parseInt(e.target.value))}
                />
              </div>
            ) : (
              <div className='flex flex-col justify-center items-center w-56'>
                <label
                  htmlFor='numWords3'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  {range} palabras
                </label>
                <input
                  id='numWords3'
                  type='range'
                  min={4}
                  max={30}
                  defaultValue={9}
                  className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                  onChange={(e) => setRange(parseInt(e.target.value))}
                />
              </div>
            )}
          </div>

          <main className='flex flex-row justify-evenly items-start gap-5 container m-auto pb-12'>
            <div className='flex flex-col justify-start items-center'>
              <h2 className='font-bold text-xl text-center mb-7'>Palabras</h2>
              <section className='flex flex-col justify-center items-center gap-2 min-w-[250px]'>
                {aleatory?.map((item: Cronologia) => (
                  <p
                    key={item.id}
                    className={`bg-blue-600 w-full text-center rounded-lg py-2 px-3 text-sm text-white dark:text-white ${
                      checkItemOnArray(item, mySolution)
                        ? 'bg-red-600'
                        : 'cursor-pointer'
                    }`}
                    onClick={() => {
                      if (!checkItemOnArray(item, mySolution)) {
                        addToMySolution(item)
                      }
                    }}
                  >
                    {item.name}
                  </p>
                ))}
              </section>
            </div>
            <div>
              <h2 className='font-bold text-xl text-center mb-7'>
                Mi Solución
              </h2>
              <section className='flex flex-col justify-center items-center gap-2 min-w-[250px]'>
                {mySolution?.map((item) => (
                  <p
                    key={item.id}
                    className='bg-blue-600 w-full text-center rounded-lg py-2 px-3 text-sm text-white dark:text-white cursor-pointer'
                    onClick={() => {
                      removeFromMySolution(item)
                    }}
                  >
                    {item.name}
                  </p>
                ))}
              </section>
            </div>
            <div className='relative'>
              <h2 className='font-bold text-xl text-center mb-7'>Solucion</h2>
              <section
                className={`min-w-[250px] flex flex-col justify-center items-center gap-2 ${
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
                {viewSolution ? (
                  <AiFillEyeInvisible color='#fff' />
                ) : (
                  <AiFillEye color='#fff' />
                )}
              </div>
            </div>
          </main>
        </>
      ) : (
        <div>
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mx-7 flex flex-col'
            role='alert'
          >
            <strong className='font-bold'>Su pantalla en muy pequeña</strong>
            <span className='block sm:inline'>
              Para poder practicar se necesita una pantalla más grande
            </span>
          </div>
        </div>
      )}
      <ChangeThemeBlock />
    </div>
  )
}
