import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  costs: t.Cost[]
  error: Error | null
}

export default defineStore('costs', {
  state: (): AppState => ({
    costs: [] as t.Cost[],
    error: null
  }),
  actions: {
    async getCosts() {
      const supabase = useSupabase()
      try {
        const { data: costsData, error: costsError } = await supabase
          .from('costs')
          .select('id, name')
        if (costsError) throw costsError
        this.costs = validateWithZod(z.Cost, costsData)
      } catch (error) {
        this.error = error
      }
    }
  }
})
