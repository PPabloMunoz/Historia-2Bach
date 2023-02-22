import { useState, useEffect } from 'react'
import { supabase } from '@/supabaseClient'

import Navbar from '@/components/Navbar'
import { useUserContext } from '@/utils/UserContext'
import { Cronologia } from '@/types'
import ChangeThemeBlock from '@/components/ChangeThemeBlock'

export default function CronologiaPage() {
  const [crono1, setCrono1] = useState<Array<Cronologia>>()
  const [crono2, setCrono2] = useState<Array<Cronologia>>()
  const [crono3, setCrono3] = useState<Array<Cronologia>>()

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
      <h1 className='text-3xl lg:text-5xl font-bold text-center mt-6 mb-7 lg:mb-20'>
        Cronología
      </h1>
      <div className='flex flex-col lg:flex-row justify-evenly items-start gap-4 text-xl font-medium pb-10 mx-7 lg:m-auto'>
        <div>
          <h3 className='cursor-pointer underline mb-5 text-lg lg:text-2xl'>
            Bloques 1 al 2
          </h3>
          <div className='font-normal text-md'>
            {crono1?.map((item, i) => (
              <p className='text-base' key={item.id}>
                {i + 1}. {item.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className='cursor-pointer underline mb-5 text-lg lg:text-2xl'>
            Bloques 3 al 4
          </h3>
          <div className='font-normal text-md'>
            {crono2?.map((item, i) => (
              <p className='text-base' key={item.id}>
                {i + 1}. {item.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className='cursor-pointer underline mb-5 text-lg lg:text-2xl'>
            Bloques 5 al 8
          </h3>
          <div className='font-normal text-md'>
            {crono3?.map((item, i) => (
              <p className='text-base' key={item.id}>
                {i + 1}. {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <ChangeThemeBlock />
    </div>
  )
}
