import { supabase } from '@/supabaseClient'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import { useUserContext } from '@/utils/UserContext'

export default function CronologiaPage() {
  const [crono1, setCrono1] = useState<Array<{ id: number; Name: string }>>()
  const [crono2, setCrono2] = useState<Array<{ id: number; Name: string }>>()
  const [crono3, setCrono3] = useState<Array<{ id: number; Name: string }>>()
  const { theme } = useUserContext()

  async function getData(block: string, functionSet: Function) {
    const { data } = await supabase.from(block).select()
    functionSet(data)
  }

  useEffect(() => {
    getData('cronoBloques1_2', setCrono1)
    getData('cronoBloques3_4', setCrono2)
    getData('cronoBloques5_8', setCrono3)
  }, [])

  return (
    <div className={theme === 'dark' ? 'dark bg-neutral-800 text-white' : ''}>
      <Navbar
        title='Cronología - Historia 2º Bach'
        home={false}
        page='cronologia'
      />
      <h1 className='text-5xl font-bold text-center mt-6 mb-20'>Cronología</h1>
      <div className='flex flex-row justify-evenly items-start gap-4 text-xl font-medium pb-10'>
        <div>
          <h3
            className='cursor-pointer underline mb-5 text-2xl'
            // onClick={() => setSupabaseData(cronoBloques1_2)}
          >
            Bloques 1 al 2
          </h3>
          <div className='font-normal text-md'>
            {crono1?.map((item, i) => (
              <p className='text-base' key={item.id}>
                {i + 1}. {item.Name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className='cursor-pointer underline mb-5 text-2xl'>
            Bloques 3 al 4
          </h3>
          <div className='font-normal text-md'>
            {crono2?.map((item, i) => (
              <p className='text-base' key={item.id}>
                {i + 1}. {item.Name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className='cursor-pointer underline mb-5 text-2xl'>
            Bloques 5 al 8
          </h3>
          <div className='font-normal text-md'>
            {crono3?.map((item, i) => (
              <p className='text-base' key={item.id}>
                {i + 1}. {item.Name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
