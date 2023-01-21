// import {
//   vocBloque1,
//   vocBloque2,
//   vocBloque3,
//   vocBloque4,
//   vocBloque5
// } from '@/utils/dataVocabulario'

import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import { Vocabulario } from '@/types'
import { PostgrestError, PostgrestResponse } from '@supabase/supabase-js'

export default function Cronologia() {
  const [supabaseData, setSupabaseData] = useState<Vocabulario[] | T[]>()
  const [title, setTitle] = useState<String>('Bloque 1')

  useEffect(() => {
    getData('vocBloque1')
  }, [])

  const getData = async (block: string) => {
    const { data, error } = await supabase.from(block).select()
    if (error) {
      console.error('An error ocurred: ', error.message)
    }
    console.log(data)
    setSupabaseData(data)
  }
  return (
    <>
      <Navbar
        title='Cronología - Historia 2º Bach'
        home={false}
        page='vocabulario'
      />
      <h1 className='text-5xl font-bold text-center mt-6 mb-20'>Vocabulario</h1>
      <div className='flex flex-row justify-evenly items-center gap-4 text-xl font-medium pb-10 mb-10 border-b border-black'>
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
          <div className='w-2/4'>
            <h3 className='text-3xl font-bold mb-5 text-center'>{title}</h3>
            {supabaseData.map((item) => (
              <div key={item.id}>
                <p className='font-bold'>{item.Name}</p>
                <p>- {item.Description}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className='font-bold text-3xl text-center'>Loading...</p>
        )}
      </div>
      <div className='h-20' />
    </>
  )
}
