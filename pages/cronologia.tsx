import {
  cronoBloques1_2,
  cronoBloque3_4,
  cronoBloque5_6
} from '@/utils/dataCronologia'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function Cronologia() {
  const [data, setData] = useState({
    title: 'Bloques 1 y 2',
    data: cronoBloques1_2
  })

  return (
    <>
      <Navbar
        title='Cronología - Historia 2º Bach'
        home={false}
        page='cronologia'
      />
      <h1 className='text-5xl font-bold text-center mt-6 mb-20'>Cronología</h1>
      <div className='flex flex-row justify-evenly items-center gap-4 text-xl font-medium pb-10 mb-10 border-b border-black'>
        <p
          className='cursor-pointer'
          onClick={() =>
            setData({ title: 'Bloques 1 y 2', data: cronoBloques1_2 })
          }
        >
          Bloques 1 y 2
        </p>
        <p
          className='cursor-pointer'
          onClick={() =>
            setData({ title: 'Bloques 3 y 4', data: cronoBloque3_4 })
          }
        >
          Bloques 3 y 4
        </p>
        <p
          className='cursor-pointer'
          onClick={() =>
            setData({ title: 'Bloques 5 y 6', data: cronoBloque5_6 })
          }
        >
          Bloques 5 y 6
        </p>
      </div>

      <div className='w-full px-48 mb-24'>
        {data && (
          <div className='flex flex-row justify-center items-start gap-72'>
            <h3 className='text-3xl font-bold mb-5 text-center'>
              {data.title}
            </h3>
            <div>
              {data.data.map((item) => (
                <>
                  <p key={item.id} className='font-semibold'>
                    {item.name}
                  </p>
                </>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
