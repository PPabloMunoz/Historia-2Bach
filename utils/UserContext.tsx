import { useContext, createContext, useState } from 'react'

const Context = createContext<any>({})

export default function UserContext({ children }: React.PropsWithChildren) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  function changeTheme() {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <Context.Provider value={{ theme, changeTheme }}>
      {children}
    </Context.Provider>
  )
}

export function useUserContext() {
  return useContext(Context)
}
