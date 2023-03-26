// store/data.js
import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  tags: t.Tag[]
  tagFilter: t.Tag[]
  error: Error | null
}

export default defineStore('tags', {
  state: (): AppState => ({
    tags: [] as t.Tag[],
    error: null
  }),
  actions: {
    async getTags() {
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
