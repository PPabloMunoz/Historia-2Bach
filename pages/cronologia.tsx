import {
  cronoBloques1_2,
  cronoBloque3_4,
  cronoBloque5_6
} from '@/utils/dataCronologia'
import { supabase } from '@/supabaseClient'

import { useState, useEffect } from 'react'
import { Cronologia } from '@/types'
import Navbar from '@/components/Navbar'

export default function CronologiaPage() {
  const [crono1, setCrono1] = useState<Array<{ id: Number; Name: String }>>()
  const [crono2, setCrono2] = useState<Array<{ id: Number; Name: String }>>()
  const [crono3, setCrono3] = useState<Array<{ id: Number; Name: String }>>()

  async function getData(block: string, functionSet: Function) {
    const { data, error } = await supabase.from(block).select()
    functionSet(data)
  }

  useEffect(() => {
    getData('cronoBloques1_2', setCrono1)
    getData('cronoBloques3_4', setCrono2)
    getData('cronoBloques5_6', setCrono3)
  }, [])

  return (
    <>
      <Navbar
        title='Cronología - Historia 2º Bach'
        home={false}
        page='cronologia'
      />
      <h1 className='text-5xl font-bold text-center mt-6 mb-20'>Cronología</h1>
      <div className='flex flex-row justify-evenly items-start gap-4 text-xl font-medium pb-10 mb-10'>
        <div>
          <h3
            className='cursor-pointer underline mb-5 text-2xl'
            // onClick={() => setSupabaseData(cronoBloques1_2)}
          >
            Bloques 1 y 2
          </h3>
          <div className='font-normal text-md'>
            {crono1?.map((item, i) => (
              <p className='text-base'>
                {i + 1}. {item.Name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3
            className='cursor-pointer underline mb-5 text-2xl'
            // onClick={() => setSupabaseData(cronoBloque3_4)}
          >
            Bloques 3 y 4
          </h3>
          <div className='font-normal text-md'>
            {crono2?.map((item, i) => (
              <p className='text-base'>
                {i + 1}. {item.Name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3
            className='cursor-pointer underline mb-5 text-2xl'
            // onClick={() => setSupabaseData(cronoBloque5_6)}
          >
            Bloques 5 y 6
          </h3>
          <div className='font-normal text-md'>
            {crono3?.map((item, i) => (
              <p className='text-base'>
                {i + 1}. {item.Name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
