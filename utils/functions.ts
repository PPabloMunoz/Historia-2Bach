import { Cronologia } from '@/types'
import { supabase } from '@/supabaseClient'

export function aleatoryFunction(array: Array<Cronologia>, iterations: number) {
  if (iterations > array.length) throw new Error('Demasiadas iteraciones')

  const random: Array<Cronologia> = []
  let temp: Array<Cronologia> = array
  temp = temp.filter((item: Cronologia) => item !== undefined)

  for (let i = 0; i < iterations; i++) {
    let rand = Math.floor(Math.random() * temp.length)
    let rValue: Cronologia = temp[rand]

    while (random.includes(rValue)) {
      rand = Math.floor(Math.random() * temp.length)
      rValue = temp[rand]
    }
    random.push(rValue)

    temp = temp.filter((e) => {
      return e !== rValue
    })
  }

  console.log(random)

  return random
}

export async function getData(block: string, setFunction: Function) {
  const { data, error } = await supabase.from(block).select()
  if (error) {
    console.error('An error ocurred: ', error.message)
  }
  setFunction(data)
  return data
}
