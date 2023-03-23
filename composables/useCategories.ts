// store/data.js
import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  categories: t.Category[]
  error: Error | null
}

export default defineStore('data', {
  state: (): AppState => ({
    categories: [] as t.Category[],
    error: null
  }),
  actions: {
    async fetchData() {
      const supabase = useSupabase()
      try {
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('categories')
          .select('id, name')
        if (categoriesError) throw categoriesError
        this.categories = validateWithZod(z.Category, categoriesData)
      } catch (error) {
        this.error = error
      }
    }
  }
})
