import {
  vocBloque1,
  vocBloque2,
  vocBloque3,
  vocBloque4,
  vocBloque5
} from '@/utils/dataVocabulario'

import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function Cronologia() {
  const [data, setData] = useState({ title: 'Bloques 1', data: vocBloque1 })
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
          onClick={() => setData({ title: 'Bloque 1', data: vocBloque1 })}
        >
          Bloque 1
        </p>
        <p
          className='cursor-pointer'
          onClick={() => setData({ title: 'Bloque 2', data: vocBloque2 })}
        >
          Bloque 2
        </p>
        <p
          className='cursor-pointer'
          onClick={() => setData({ title: 'Bloque 3', data: vocBloque3 })}
        >
          Bloque 3
        </p>
        <p
          className='cursor-pointer'
          onClick={() => setData({ title: 'Bloque 4', data: vocBloque4 })}
        >
          Bloque 4
        </p>
        <p
          className='cursor-pointer'
          onClick={() => setData({ title: 'Bloque 5', data: vocBloque5 })}
        >
          Bloque 5
        </p>
      </div>

      <div className='w-full px-48 mb-24'>
        {data && (
          <>
            <h3 className='text-3xl font-bold mb-5 text-center'>
              {data.title}
            </h3>
            {data.data.map((item) => (
              <div key={item.id}>
                <p className='font-bold'>{item.name}</p>
                <p>- {item.description}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  )
}
