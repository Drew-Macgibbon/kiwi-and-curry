import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  timeTaken: t.TimeTaken[]
  error: Error | null
}

export default defineStore('time_taken', {
  state: (): AppState => ({
    timeTaken: [] as t.TimeTaken[],
    error: null
  }),
  actions: {
    async getTimeTaken() {
      const supabase = useSupabase()
      try {
        const { data: timeData, error: timeError } = await supabase
          .from('time_taken')
          .select('id, name')
        if (timeError) throw timeError
        this.timeTaken = validateWithZod(z.TimeTaken, timeData)
      } catch (error) {
        throw new Error(`error getting time_taken "${error}".`)
        // this.error = error
      }
    }
  }
})
