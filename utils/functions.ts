import { Cronologia } from '@/types'
import { supabase } from '@/supabaseClient'

export async function aleatoryFunction(
  blockNum: number,
  iterations: number,
  setFunction: Function
) {
  const array: Array<Cronologia> = await getData(blockNum)
  if (await array) {
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

    setFunction(random)
    return random
  }
}

async function getData(block: number) {
  const blockString = getBlockName(block)
  const { data, error } = await supabase.from(blockString!).select()
  if (error) {
    throw new Error(`An error ocurren ${error.message}`)
  }
  return data
}

function getBlockName(block: number) {
  if (block === 1) {
    return 'cronoBloques1_2'
  } else if (block === 2) {
    return 'cronoBloques3_4'
  } else if (block === 3) {
    return 'cronoBloques5_8'
  } else {
    throw new Error('Invalid Block')
  }
}

export async function sortArray(
  aleatoryArray: Array<Cronologia>,
  blockNum: number,
  setFunction: Function
) {
  const finalArray: Array<Cronologia> = []
  const data: Array<Cronologia> = await getData(blockNum)
  if (data && aleatoryArray) {
    for (let i = 0; i < data.length; i++) {
      for (let m = 0; m < aleatoryArray.length; m++) {
        if (data[i].id === aleatoryArray[m].id) {
          finalArray.push(aleatoryArray[m])
          break
        }
      }
    }
  }

  setFunction(finalArray)
  return finalArray
}

export function checkItemOnArray(object: Cronologia, array: Array<Cronologia>) {
  return array.includes(object)
}
