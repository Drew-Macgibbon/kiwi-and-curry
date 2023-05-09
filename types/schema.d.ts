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
      categories: {
        Row: {
          body: string | null
          id: number
          name: string
        }
        Insert: {
          body?: string | null
          id?: number
          name: string
        }
        Update: {
          body?: string | null
          id?: number
          name?: string
        }
      }
      costs: {
        Row: {
          id: number
          name: string
          range: string
        }
        Insert: {
          id?: number
          name: string
          range: string
        }
        Update: {
          id?: number
          name?: string
          range?: string
        }
      }
      countries: {
        Row: {
          emoji: string | null
          id: number
          latitude: number | null
          longitude: number | null
          name: string | null
          region: string | null
        }
        Insert: {
          emoji?: string | null
          id: number
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          region?: string | null
        }
        Update: {
          emoji?: string | null
          id?: number
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          region?: string | null
        }
      }
      difficulties: {
        Row: {
          body: string | null
          id: number
          name: string
        }
        Insert: {
          body?: string | null
          id?: number
          name: string
        }
        Update: {
          body?: string | null
          id?: number
          name?: string
        }
      }
      item_statuses: {
        Row: {
          created_at: string | null
          id: number
          item_id: number | null
          status_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          item_id?: number | null
          status_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          item_id?: number | null
          status_id?: number | null
        }
      }
      item_tags: {
        Row: {
          id: number
          item_id: number
          tag_id: number
        }
        Insert: {
          id?: number
          item_id: number
          tag_id: number
        }
        Update: {
          id?: number
          item_id?: number
          tag_id?: number
        }
      }
      items: {
        Row: {
          body: string | null
          category_id: number
          cost_id: number | null
          country_id: number | null
          created_at: string | null
          id: number
          role_id: number | null
          time_taken_id: number | null
          title: string
          updated_at: string | null
        }
        Insert: {
          body?: string | null
          category_id: number
          cost_id?: number | null
          country_id?: number | null
          created_at?: string | null
          id?: number
          role_id?: number | null
          time_taken_id?: number | null
          title: string
          updated_at?: string | null
        }
        Update: {
          body?: string | null
          category_id?: number
          cost_id?: number | null
          country_id?: number | null
          created_at?: string | null
          id?: number
          role_id?: number | null
          time_taken_id?: number | null
          title?: string
          updated_at?: string | null
        }
      }
      roles: {
        Row: {
          body: string | null
          id: number
          name: string
        }
        Insert: {
          body?: string | null
          id?: number
          name: string
        }
        Update: {
          body?: string | null
          id?: number
          name?: string
        }
      }
      status: {
        Row: {
          body: string
          id: number
          name: string
        }
        Insert: {
          body: string
          id?: number
          name: string
        }
        Update: {
          body?: string
          id?: number
          name?: string
        }
      }
      tags: {
        Row: {
          category_id: number
          id: number
          name: string
        }
        Insert: {
          category_id: number
          id: number
          name: string
        }
        Update: {
          category_id?: number
          id?: number
          name?: string
        }
      }
      time_taken: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      user_items: {
        Row: {
          created_at: string | null
          id: number
          item_id: number
          user_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          item_id: number
          user_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          item_id?: number
          user_id?: number
        }
      }
      users: {
        Row: {
          avatar: string | null
          created_at: string | null
          given_name: string | null
          id: number
          introduction: string | null
          role_id: number | null
          surname: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar?: string | null
          created_at?: string | null
          given_name?: string | null
          id?: number
          introduction?: string | null
          role_id?: number | null
          surname?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar?: string | null
          created_at?: string | null
          given_name?: string | null
          id?: number
          introduction?: string | null
          role_id?: number | null
          surname?: string | null
          updated_at?: string | null
          username?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_items_many: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          created_at: string
          updated_at: string
          title: string
          body: string
          category: Json
          country: Json
          cost: Json
          time_taken: Json
          visibility: Json
          users: Json
          tags: Json
        }[]
      }
      insert_bucket_list_items: {
        Args: {
          p_items: Json
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

