export interface Cronologia {
  id: number
  name: string
}

export interface Vocabulario {
  name: string
  description: string
  id: number
}

export interface NavbarTypes {
  title?: String
  home: Boolean
  page?: 'vocabulario' | 'cronologia' | 'ejercicios'
}
