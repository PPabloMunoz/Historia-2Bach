import {
  cronoBloques1_2,
  cronoBloque3_4,
  cronoBloque5_6
} from '@/utils/dataCronologia'
import { Cronologia } from '@/types'

import Navbar from '@/components/Navbar'
import { useEffect, useState } from 'react'

function aleatory(data: Cronologia[], iterations: Number) {
  const random: Cronologia[] = []
  let temp = data
  temp = temp.filter((item) => item !== undefined)

  for (let i = 0; i < iterations; i++) {
    let rand = Math.floor(Math.random() * temp.length)
    let rValue: Cronologia = temp[rand]
    console.log(rValue, 'value')

    while (random.includes(rValue)) {
      rand = Math.floor(Math.random() * temp.length)
      rValue = temp[rand]
    }
    random.push(rValue)

    temp = temp.filter((e) => {
      return e !== rValue
    })
  }

  return random
}

export default function CronologiaPage() {
  const [data, setData] = useState(cronoBloques1_2)
  useEffect(() => {
    setData(aleatory(cronoBloque3_4, 6))
  }, [])
  return (
    <>
      <Navbar
        title='Cronología - Historia 2º Bach'
        home={false}
        page='ejercicios'
      />
      <h1>Ejercicios</h1>
      {data.map((item) => item.name)}
    </>
  )
}
