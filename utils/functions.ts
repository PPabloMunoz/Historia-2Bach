import { Cronologia } from '@/types'
import { supabase } from '@/supabaseClient'
import { cronologiaNames, vocabularioNames } from './names'

// Create an aletory array from another
export async function aleatoryFunction(
  blockNum: number,
  iterations: number,
  setFunction: Function
) {
  const array: Array<Cronologia> = await getData(blockNum, 'cronologia')
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

// Get data from database
export async function getData(
  block: number,
  type: 'cronologia' | 'vocabulario',
  setFunction?: Function
) {
  const blockString =
    type === 'cronologia' ? getCronoBlockName(block) : getVocBlockName(block)
  const { data, error } = await supabase.from(blockString!).select()
  if (error) {
    throw new Error(`An error ocurren ${error.message}`)
  }

  setFunction && setFunction(data)

  return data
}

// Get block names of Cronologia and Vocabulario
function getCronoBlockName(block: number) {
  if (block === 1) return cronologiaNames.crono1
  if (block === 2) return cronologiaNames.crono2
  if (block === 3) return cronologiaNames.crono3

  throw new Error('Invalid cronologia number block')
}

function getVocBlockName(block: number) {
  if (block === 1) return vocabularioNames.voc1
  if (block === 2) return vocabularioNames.voc2
  if (block === 3) return vocabularioNames.voc3
  if (block === 4) return vocabularioNames.voc4
  if (block === 5) return vocabularioNames.voc5
  if (block === 6) return vocabularioNames.voc6
  if (block === 7) return vocabularioNames.voc7
  if (block === 8) return vocabularioNames.voc8

  throw new Error('Invalid vocabulario number block')
}

// Sort array by it id
export async function sortArray(
  aleatoryArray: Array<Cronologia>,
  blockNum: number,
  setFunction: Function
) {
  const finalArray: Array<Cronologia> = []
  const data: Array<Cronologia> = await getData(blockNum, 'cronologia')
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

// Check if a item is in array
export function checkItemOnArray(object: Cronologia, array: Array<Cronologia>) {
  return array.includes(object)
}
