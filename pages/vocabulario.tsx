import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'

import Navbar from '@/components/Navbar'
import { useUserContext } from '@/utils/UserContext'
import { Vocabulario } from '@/types'

export default function Cronologia() {
  const [supabaseData, setSupabaseData] = useState<Array<Vocabulario>>()
  const [title, setTitle] = useState<string>('Bloque 1')

  const { theme } = useUserContext()

  useEffect(() => {
    getData('vocBloque1')
  }, [])

  const getData = async (block: string) => {
    const { data, error } = await supabase.from(block).select()
    if (error) {
      console.error('An error ocurred: ', error.message)
    }
    setSupabaseData(data!)
  }
  return (
    <div
      className={
        theme === 'dark' ? 'dark bg-neutral-800 text-white min-h-screen' : ''
      }
    >
      <Navbar
        title='Cronología - Historia 2º Bach'
        home={false}
        page='vocabulario'
      />
      <h1 className='text-5xl font-bold text-center mt-6 mb-20'>Vocabulario</h1>
      <div className='flex flex-row justify-evenly items-center gap-4 text-xl font-medium pb-10 mb-10 border-b border-black dark:border-white'>
        <p
          className='cursor-pointer'
          onClick={() => {
            getData('vocBloque1')
            setTitle('Bloque 1')
          }}
        >
          Bloque 1
        </p>
        <p
          className='cursor-pointer'
          onClick={() => {
            getData('vocBloque2')
            setTitle('Bloque 2')
          }}
        >
          Bloque 2
        </p>
        <p
          className='cursor-pointer'
          onClick={() => {
            getData('vocBloque3')
            setTitle('Bloque 3')
          }}
        >
          Bloque 3
        </p>
        <p
          className='cursor-pointer'
          onClick={() => {
            getData('vocBloque4')
            setTitle('Bloque 4')
          }}
        >
          Bloque 4
        </p>
        <p
          className='cursor-pointer'
          onClick={() => {
            getData('vocBloque5')
            setTitle('Bloque 5')
          }}
        >
          Bloque 5
        </p>
      </div>

      <div className='w-full flex flex-col justify-center items-center'>
        {supabaseData ? (
          <div className='max-w-3xl'>
            <h3 className='text-3xl font-bold mb-16 underline text-center'>
              {title}
            </h3>
            <div className='flex flex-col justify-start items-start gap-5'>
              {supabaseData.map((item) => (
                <div key={item.id}>
                  <p className='font-bold'>{item.name}</p>
                  <p>- {item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className='font-bold text-3xl text-center'>Loading...</p>
        )}
      </div>
      <div className='h-20' />
    </div>
  )
}
