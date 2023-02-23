import { useState, useEffect } from 'react'
import { Cronologia } from '@/types'

// Components
import Navbar from '@components/Navbar'
import ChangeThemeBlock from '@components/ChangeThemeBlock'

// Functions
import { getData } from '@utils/functions'
import { useUserContext } from '@utils/UserContext'

export default function CronologiaPage() {
  const [crono1, setCrono1] = useState<Array<Cronologia>>()
  const [crono2, setCrono2] = useState<Array<Cronologia>>()
  const [crono3, setCrono3] = useState<Array<Cronologia>>()

  const { theme } = useUserContext()

  useEffect(() => {
    getData(1, 'cronologia', setCrono1)
    getData(2, 'cronologia', setCrono2)
    getData(3, 'cronologia', setCrono3)
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
          <h3 className='text-lg lg:text-2xl mb-5 cursor-pointer underline'>
            Bloques 1 al 2
          </h3>
          <div className='text-md font-normal'>
            {crono1?.map((item, i) => (
              <p className='text-base' key={item.id}>
                {i + 1}. {item.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-lg lg:text-2xl mb-5 cursor-pointer underline'>
            Bloques 3 al 4
          </h3>
          <div className='text-md font-normal'>
            {crono2?.map((item, i) => (
              <p className='text-base' key={item.id}>
                {i + 1}. {item.name}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className='text-lg lg:text-2xl mb-5 cursor-pointer underline'>
            Bloques 5 al 8
          </h3>
          <div className='text-md font-normal'>
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
