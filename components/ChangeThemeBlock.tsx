import { useUserContext } from '@/utils/UserContext'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export default function ChangeThemeBlock() {
  const { theme, changeTheme } = useUserContext()

  return (
    <div
      className='fixed bottom-6 sm:bottom-8 right-8 sm:right-12 flex justify-center items-center p-2 bg-black/30 rounded-lg opacity-60'
      onClick={changeTheme}
    >
      {theme === 'dark' ? (
        <BsFillSunFill
          size={30}
          className='cursor-pointer text-3xl'
          color='#fff'
        />
      ) : (
        <BsFillMoonFill size={30} className='cursor-pointer text-3xl' />
      )}
    </div>
  )
}
