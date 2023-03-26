// store/data.js
import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import items from './users.json'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  items: t.BucketListItem[]
  categories: t.Category[]
  tags: t.Tag[]
  costs: t.Cost[]
  status: t.Status[]
  difficulties: t.Difficulty[]
  error: Error | null
}

export default defineStore('data', {
  state: (): AppState => ({
    items: [] as t.BucketListItem[],
    categories: [] as t.Category[],
    tags: [] as t.Tag[],
    costs: [] as t.Cost[],
    status: [] as t.Status[],
    difficulties: [] as t.Difficulty[],
    error: null
  }),
  actions: {
    async bulkInsertItems() {
      const supabase = useSupabase()

      // const stingifiedItems = JSON.stringify(items)

      const { data, error } = await supabase.rpc('insert_bucket_list_items', {
        p_items: items
      })
      console.log('Data returned', data, error)

      if (error) {
        console.error('Error inserting items:', error)
      } else {
        console.log('Items inserted successfully')
      }
    },
    async fetchData() {
      const supabase = useSupabase()
      try {
        // const { data: costsData, error: costsError } = await supabase
        //   .from('costs')
        //   .select('id, name')
        // if (costsError) throw costsError
        // this.costs = validateWithZod(z.Cost, costsData)

        // const { data: statusData, error: statusError } = await supabase
        //   .from('status')
        //   .select('id, name')
        // if (statusError) throw statusError
        // this.status = validateWithZod(z.Status, statusData)

        // const { data: difficultiesData, error: difficultiesError } =
        //   await supabase.from('difficulties').select('id, name')

        // if (difficultiesError) throw difficultiesError
        // this.difficulties = validateWithZod(z.Difficulty, difficultiesData)

        const { data, error } = await supabase.rpc('get_items')
        console.log('itemsReturned', data, error)

        if (error) throw error
        this.items = validateWithZod(z.BucketListItem, data)
      } catch (err) {
        console.error('error getting items', err)
        // this.error = err
      }
    }
  }
})
