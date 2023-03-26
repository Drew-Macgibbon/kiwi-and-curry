import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  difficulties: t.Difficulty[]
  error: Error | null
}

export default defineStore('difficulties', {
  state: (): AppState => ({
    difficulties: [] as t.Difficulty[],
    error: null
  }),
  actions: {
    async getDifficulties() {
      const supabase = useSupabase()
      try {
        const { data: diffData, error: diffError } = await supabase
          .from('difficulties')
          .select('id, name')
        if (diffError) throw diffError
        this.difficulties = validateWithZod(z.Difficulty, diffData)
      } catch (error) {
        throw new Error(`error getting difficulties "${error}".`)
        // this.error = error
      }
    }
  }
})
