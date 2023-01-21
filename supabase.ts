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
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
