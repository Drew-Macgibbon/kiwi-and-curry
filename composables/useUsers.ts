import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  users: t.User[]
  kAndC: t.User[]
  error: Error | null
}

export default defineStore('users', {
  state: (): AppState => ({
    users: [] as t.User[],
    kAndC: [] as t.User[],
    error: null
  }),
  actions: {
    async getUsers() {
      const supabase = useSupabase()
      try {
        const { data: usersData, error: usersError } = await supabase
          .from('users')
          .select('*')
        if (usersError) throw usersError
        this.users = validateWithZod(z.User, usersData)
      } catch (error) {
        this.error = error
      }
    },
    async getUsersById() {
      const supabase = useSupabase()
      try {
        const { data, error } = await supabase
          .from('users')
          .select('*')
          .lte('id', 2)
        console.log('usersData', data)
        if (error) throw error
        this.kAndC = validateWithZod(z.User, data)
      } catch (err) {
        this.error = err
      }
    }
  }
})
