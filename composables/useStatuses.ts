import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  statuses: t.Status[]
  error: Error | null
}

export default defineStore('statuses', {
  state: (): AppState => ({
    statuses: [] as t.Status[],
    error: null
  }),
  actions: {
    async getStatuses() {
      const supabase = useSupabase()
      try {
        const { data: statusData, error: statusError } = await supabase
          .from('statuses')
          .select('id, name')
        if (statusError) throw statusError
        this.statuses = validateWithZod(z.Status, statusData)
      } catch (error) {
        throw new Error(`error getting status "${error}".`)
        // this.error = error
      }
    }
  }
})
