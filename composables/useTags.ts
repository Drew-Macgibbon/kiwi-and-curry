// store/data.js
import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  tags: t.Tag[]
  error: Error | null
}

export default defineStore('data', {
  state: (): AppState => ({
    tags: [] as t.Tag[],
    error: null
  }),
  actions: {
    async fetchData() {
      const supabase = useSupabase()
      try {
        const { data: tagsData, error: tagsError } = await supabase
          .from('tags')
          .select('id, name')
        if (tagsError) throw tagsError
        this.tags = validateWithZod(z.Tag, tagsData)
      } catch (error) {
        this.error = error
      }
    }
  }
})
