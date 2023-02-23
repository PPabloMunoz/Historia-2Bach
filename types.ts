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

export type titleVocabulary =
  | 'Bloque 1'
  | 'Bloque 2'
  | 'Bloque 3'
  | 'Bloque 4'
  | 'Bloque 5'
  | 'Bloque 6'
  | 'Bloque 7'
  | 'Bloque 8'

// Types for supabase database
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      vocBloque1: {
        Row: {
          Description: string
          id: number
          Name: string
        }
        Insert: {
          Description: string
          id?: number
          Name: string
        }
        Update: {
          Description?: string
          id?: number
          Name?: string
        }
      }
      vocBloque2: {
        Row: {
          Description: string
          id: number
          Name: string
        }
        Insert: {
          Description: string
          id?: number
          Name: string
        }
        Update: {
          Description?: string
          id?: number
          Name?: string
        }
      }
      vocBloque3: {
        Row: {
          Description: string
          id: number
          Name: string
        }
        Insert: {
          Description: string
          id?: number
          Name: string
        }
        Update: {
          Description?: string
          id?: number
          Name?: string
        }
      }
      vocBloque4: {
        Row: {
          Description: string
          id: number
          Name: string
        }
        Insert: {
          Description: string
          id?: number
          Name: string
        }
        Update: {
          Description?: string
          id?: number
          Name?: string
        }
      }
      vocBloque5: {
        Row: {
          Description: string
          id: number
          Name: string
        }
        Insert: {
          Description: string
          id?: number
          Name: string
        }
        Update: {
          Description?: string
          id?: number
          Name?: string
        }
      }
    }
    Views: {
      // eslint-disable-next-line no-unused-vars
      [_ in never]: never
    }
    Functions: {
      // eslint-disable-next-line no-unused-vars
      [_ in never]: never
    }
    Enums: {
      // eslint-disable-next-line no-unused-vars
      [_ in never]: never
    }
  }
}
