// store/data.js
import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'
import items from './users.json'
import * as z from '@/types/zod'
import * as t from '@/types'

type AppState = {
  items: t.BucketListItem[]
  error: Error | null
}

export default defineStore('bucket-list', {
  state: (): AppState => ({
    items: [] as t.BucketListItem[],
    error: null
  }),
  getters: {
    itemById: (state): ((id: number) => t.BucketListItem | undefined) => {
      return (id: Number) => state.items.find((i: t.BucketListItem) => i.id === id)
    }
  },
  actions: {
    async getItemById(id: number): Promise<t.BucketListItem[]> | undefined {
      const supabase = useSupabase()
      try {
        const { data, error } = await supabase.rpc('get_single_item', {
          itemId: id
        })
        console.log('itemReturned', data, error)
        if (error) {
          throw new Error(`Error getting item: ${error.message}`)
        }
        console.log('itemReturned', data, error)
        return data
      } catch (err) {
        console.error('error getting item', err)
        // this.error = err
      }
    },
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
    async getBucketList() {
      const supabase = useSupabase()
      try {
        const { data, error } = await supabase.rpc('get_items_many')
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
