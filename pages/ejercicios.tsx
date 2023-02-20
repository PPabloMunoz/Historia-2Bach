// import { useState, useEffect } from 'react'
import Image from 'next/image'

import { useUserContext } from '@/utils/UserContext'

import Navbar from '@/components/Navbar'
import loading from '../public/loading.gif'

// function aleatory(data: Cronologia[], iterations: Number) {
//   const random: Cronologia[] = []
//   let temp = data
//   temp = temp.filter((item) => item !== undefined)

//   for (let i = 0; i < iterations; i++) {
//     let rand = Math.floor(Math.random() * temp.length)
//     let rValue: Cronologia = temp[rand]
//     console.log(rValue, 'value')

//     while (random.includes(rValue)) {
//       rand = Math.floor(Math.random() * temp.length)
//       rValue = temp[rand]
//     }
//     random.push(rValue)

//     temp = temp.filter((e) => {
//       return e !== rValue
//     })
//   }

//   return random
// }

export default function CronologiaPage() {
  // const [data, setData] = useState(cronoBloques1_2)
  const { theme } = useUserContext()

  // useEffect(() => {
  //   setData(aleatory(cronoBloque3_4, 6))
  // }, [])

  return (
    <div
      className={
        theme === 'dark' ? 'dark bg-neutral-800 text-white min-h-screen' : ''
      }
    >
      <Navbar
        title='Cronología - Historia 2º Bach'
        home={false}
        page='ejercicios'
      />
      <h1 className='text-5xl font-bold text-center mt-6 mb-20'>Ejercicios</h1>
      <div className='text-center text-5xl flex flex-col justify-center items-center gap-32 '>
        <p>Disponible dentro de poco</p>
        <Image
          src={loading.src}
          alt='my-gif'
          width={loading.width}
          height={loading.height}
        />
      </div>
    </div>
  )
}
