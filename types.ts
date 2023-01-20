export interface Cronologia {
  id: number
  name: string
}

export interface Vocabulario {
  Name: string
  Description: string
  id: number
}

export interface vocData {
  supabaseData: {
    title: String
    data: { id: Number; Name: String; Description: String }[]
  }
}
