import { useState, useEffect } from 'react'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { Cronologia } from '@/types'

// Components
import Navbar from '@components/Navbar'
import ChangeThemeBlock from '@components/ChangeThemeBlock'

// Functions
import { useUserContext } from '@utils/UserContext'
import { aleatoryFunction, sortArray, checkItemOnArray } from '@utils/functions'

export default function CronologiaPage() {
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
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const { theme } = useUserContext()

  const [range, setRange] = useState<number>(9)
  const [blockSelected, setBlockSelected] = useState<number>(1)
  const [aleatory, setAleatory] = useState<Array<Cronologia>>([])

  const [mySolution, setMySolution] = useState<Array<Cronologia>>([])

  const [solution, setSolution] = useState<Array<Cronologia>>([])
  const [viewSolution, setViewSolution] = useState<Boolean>(false)

  // Create Aleatory Word Array
  useEffect(() => {
    aleatoryFunction(blockSelected, range, setAleatory)
    setMySolution([])
  }, [blockSelected, range])

  // Sort Aleatory Array
  useEffect(() => {
    sortArray(aleatory, blockSelected, setSolution)
  }, [aleatory, blockSelected])

  function changeWords() {
    aleatoryFunction(blockSelected, range, setAleatory)
  }

  function addToMySolution(item: Cronologia) {
    const newArray = [...mySolution, item]

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
      <h1 className='text-3xl lg:text-5xl text-center font-bold mt-6 mb-10'>
        Ejercicios
      </h1>
      {windowWidth >= 800 && isClient ? (
        <>
          <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-5 mb-6 lg:mb-10 px-10'>
            <select
              id='countries'
              className='block w-full max-w-sm bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500'
              defaultValue={1}
              onChange={(e) => setBlockSelected(parseInt(e.target.value))}
            >
              <option value={1}>Bloques 1 y 2</option>
              <option value={2}>Bloques 3 y 4</option>
              <option value={3}>Bloques 5 al 8</option>
            </select>
            <button
              className='bg-purple-600 text-white py-2 px-2 rounded-lg'
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
              <div className='w-56 flex flex-col justify-center items-center'>
                <label
                  htmlFor='numWords1'
                  className='block text-sm text-gray-900 dark:text-white font-medium mb-2'
                >
                  {range} palabras
                </label>
                <input
                  id='numWords1'
                  type='range'
                  min={4}
                  max={19}
                  defaultValue={9}
                  className='w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer'
                  onChange={(e) => {
                    setRange(parseInt(e.target.value))
                    setMySolution([])
                  }}
                />
              </div>
            ) : blockSelected === 2 ? (
              <div className='w-56 flex flex-col justify-center items-center'>
                <label
                  htmlFor='numWords2'
                  className='block text-sm text-gray-900 dark:text-white font-medium mb-2'
                >
                  {range} palabras
                </label>
                <input
                  id='numWords2'
                  type='range'
                  min={4}
                  max={29}
                  defaultValue={9}
                  className='w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer'
                  onChange={(e) => setRange(parseInt(e.target.value))}
                />
              </div>
            ) : (
              <div className='w-56 flex flex-col justify-center items-center'>
                <label
                  htmlFor='numWords3'
                  className='block text-sm text-gray-900 dark:text-white font-medium mb-2'
                >
                  {range} palabras
                </label>
                <input
                  id='numWords3'
                  type='range'
                  min={4}
                  max={30}
                  defaultValue={9}
                  className='w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer'
                  onChange={(e) => setRange(parseInt(e.target.value))}
                />
              </div>
            )}
          </div>

          <main className='container flex flex-row justify-evenly items-start gap-5 m-auto pb-12'>
            <div className='flex flex-col justify-start items-center'>
              <h2 className='text-xl text-center font-bold mb-7'>Palabras</h2>
              <section className='min-w-[250px] flex flex-col justify-center items-center gap-2'>
                {aleatory?.map((item: Cronologia) => (
                  <p
                    key={item.id}
                    className={`bg-blue-600 w-full text-sm text-center text-white py-2 px-3 rounded-lg ${
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
              <h2 className='text-xl text-center font-bold mb-7'>
                Mi Solución
              </h2>
              <section className='min-w-[250px] flex flex-col justify-center items-center gap-2'>
                {mySolution?.map((item) => (
                  <p
                    key={item.id}
                    className='bg-blue-600 w-full text-sm text-white text-center py-2 px-3 rounded-lg cursor-pointer'
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
              <h2 className='text-xl text-center font-bold mb-7'>Solucion</h2>
              <section
                className={`min-w-[250px] flex flex-col justify-center items-center gap-2 transition-all ${
                  !viewSolution && 'blur-md'
                }`}
              >
                {solution?.map((item) => (
                  <p
                    key={item.id}
                    className='bg-blue-600 w-full text-sm text-white text-center rounded-lg py-2 px-3'
                  >
                    {item.name}
                  </p>
                ))}
              </section>
              <div
                className='absolute top-0 right-0 bg-blue-600 text-xs px-2 py-2 rounded-lg cursor-pointer'
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
            className='relative bg-red-100 border border-red-400 text-red-700 px-4 py-3 mx-7 rounded'
            role='alert'
          >
            <strong className='font-bold'>Su pantalla en muy pequeña</strong>
            <span className='block'>
              Para poder practicar se necesita una pantalla más grande
            </span>
          </div>
        </div>
      )}
      <ChangeThemeBlock />
    </div>
  )
}
