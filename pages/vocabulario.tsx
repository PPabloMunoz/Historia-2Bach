import { useEffect, useState } from 'react'
import { Vocabulario, titleVocabulary } from '@/types'

// Components
import Navbar from '@/components/Navbar'
import ChangeThemeBlock from '@/components/ChangeThemeBlock'

// Functions
import { useUserContext } from '@/utils/UserContext'
import { getData } from '@utils/functions'

export default function Cronologia() {
  const [supabaseData, setSupabaseData] = useState<Array<Vocabulario>>()
  const [title, setTitle] = useState<titleVocabulary>('Bloque 1')

  const { theme } = useUserContext()

  useEffect(() => {
    getData(1, 'vocabulario', setSupabaseData)
  }, [])

  return (
    <div
      className={
        theme === 'dark' ? 'dark bg-neutral-800 text-white min-h-screen' : ''
      }
    >
      <Navbar
        title='Vocabulario - Historia 2º Bach'
        home={false}
        page='vocabulario'
      />
      <h1 className='text-3xl lg:text-5xl text-center font-bold mt-6 mb-8 lg:mb-20'>
        Vocabulario
      </h1>
      <div className='flex flex-row justify-evenly items-center gap-4 text-lg lg:text-xl text-center font-medium pb-3 lg:pb-10 mb-6 lg:mb-10 border-b border-black dark:border-white'>
        <p
          className={`cursor-pointer ${
            title === 'Bloque 1' && 'text-purple-600 dark:text-blue-600'
          }`}
          onClick={() => {
            getData(1, 'vocabulario', setSupabaseData)
            setTitle('Bloque 1')
          }}
        >
          Bloque 1
        </p>
        <p
          className={`cursor-pointer ${
            title === 'Bloque 2' && 'text-purple-600 dark:text-blue-600'
          }`}
          onClick={() => {
            getData(2, 'vocabulario', setSupabaseData)
            setTitle('Bloque 2')
          }}
        >
          Bloque 2
        </p>
        <p
          className={`cursor-pointer ${
            title === 'Bloque 3' && 'text-purple-600 dark:text-blue-600'
          }`}
          onClick={() => {
            getData(3, 'vocabulario', setSupabaseData)
            setTitle('Bloque 3')
          }}
        >
          Bloque 3
        </p>
        <p
          className={`cursor-pointer ${
            title === 'Bloque 4' && 'text-purple-600 dark:text-blue-600'
          }`}
          onClick={() => {
            getData(4, 'vocabulario', setSupabaseData)
            setTitle('Bloque 4')
          }}
        >
          Bloque 4
        </p>
        <p
          className={`cursor-pointer ${
            title === 'Bloque 5' && 'text-purple-600 dark:text-blue-600'
          }`}
          onClick={() => {
            getData(5, 'vocabulario', setSupabaseData)
            setTitle('Bloque 5')
          }}
        >
          Bloque 5
        </p>
        {/* <p
          className={`cursor-pointer ${
            title === 'Bloque 6' && 'text-purple-600 dark:text-blue-600'
          }`}
          onClick={() => {
            getData(6, 'vocabulario', setSupabaseData)
            setTitle('Bloque 6')
          }}
        >
          Bloque 6
        </p>
        <p
          className={`cursor-pointer ${
            title === 'Bloque 7' && 'text-purple-600 dark:text-blue-600'
          }`}
          onClick={() => {
            getData(7, 'vocabulario', setSupabaseData)
            setTitle('Bloque 7')
          }}
        >
          Bloque 7
        </p>
        <p
          className={`cursor-pointer ${
            title === 'Bloque 8' && 'text-purple-600 dark:text-blue-600'
          }`}
          onClick={() => {
            getData(8, 'vocabulario', setSupabaseData)
            setTitle('Bloque 8')
          }}
        >
          Bloque 8
        </p> */}
      </div>

      <div className='w-full flex flex-col justify-center items-center pb-20'>
        {supabaseData ? (
          <div className='max-w-3xl'>
            <h3 className='text-2xl lg:text-3xl text-center font-bold underline mb-8 lg:mb-16'>
              {title}
            </h3>
            <div className='flex flex-col justify-start items-start gap-5 mx-6'>
              {supabaseData.map((item) => (
                <div key={item.id}>
                  <p className='font-bold'>{item.name}</p>
                  <p>- {item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className='text-3xl text-center font-bold'>Loading...</p>
        )}
      </div>
      <ChangeThemeBlock />
    </div>
  )
}
