import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { NavbarTypes } from '@/types'
import { BiMenu } from 'react-icons/bi'

export default function Navbar({
  title = 'Historia 2º Bach',
  home,
  page
}: NavbarTypes) {
  const [open, setOpen] = useState<Boolean>(false)

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav
        className='relative flex flex-row justify-around items-center h-20 text-black font-bold text-xl bg-slate-300 dark:bg-neutral-600 dark:text-white z-40'
        onSuspend={() => setOpen(false)}
      >
        <div
          className='flex justify-center items-center sm:hidden absolute left-10 h-full'
          onClick={() => setOpen(!open)}
        >
          <BiMenu size={25} />
        </div>
        <Link href='/' className='text-xl'>
          Historia 2º Bach
        </Link>
        {!home && (
          <>
            <div className='hidden sm:block'>
              <ul className='flex flex-row justify-center items-center gap-4 font-medium text-base lg:text-lg'>
                <li>
                  {page === 'vocabulario' ? (
                    <Link href='vocabulario' className='underline'>
                      Vocabulario
                    </Link>
                  ) : (
                    <Link href='vocabulario'>Vocabulario</Link>
                  )}
                </li>
                <li>
                  {page === 'cronologia' ? (
                    <Link href='/cronologia' className='underline'>
                      Cronologia
                    </Link>
                  ) : (
                    <Link href='/cronologia'>Cronologia</Link>
                  )}
                </li>
                <li>
                  {page === 'ejercicios' ? (
                    <Link href='/ejercicios' className='underline'>
                      Ejercicios
                    </Link>
                  ) : (
                    <Link href='/ejercicios'>Ejercicios</Link>
                  )}
                </li>
              </ul>
            </div>
            {open && (
              <div className='block sm:hidden absolute left-16 top-16 bg-slate-300 dark:bg-neutral-600 rounded-lg'>
                <ul className='flex flex-col justify-center items-center gap-4 font-medium text-base lg:text-lg p-3 border rounded-lg border-black'>
                  <li>
                    {page === 'vocabulario' ? (
                      <Link href='vocabulario' className='underline rounded-lg'>
                        Vocabulario
                      </Link>
                    ) : (
                      <Link href='vocabulario'>Vocabulario</Link>
                    )}
                  </li>
                  <li>
                    {page === 'cronologia' ? (
                      <Link href='/cronologia' className='underline rounded-lg'>
                        Cronologia
                      </Link>
                    ) : (
                      <Link href='/cronologia'>Cronologia</Link>
                    )}
                  </li>
                  <li>
                    {page === 'ejercicios' ? (
                      <Link href='/ejercicios' className='underline rounded-lg'>
                        Ejercicios
                      </Link>
                    ) : (
                      <Link href='/ejercicios'>Ejercicios</Link>
                    )}
                  </li>
                </ul>
              </div>
            )}
          </>
        )}
      </nav>
    </>
  )
}
