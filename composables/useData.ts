// store/data.js
import { defineStore } from 'pinia'
import { validateWithZod } from './utils/validation'

const supabase = useSupabaseClient()

export const useDataStore = defineStore('data', {
  state: () => ({
    categories: [],
    tags: [],
    costs: [],
    status: [],
    difficulties: [],
    error: null
  }),
  actions: {
    async fetchData(zodSchemas) {
      try {
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('categories')
          .select('id, name')
        if (categoriesError) throw categoriesError
        this.categories = validateWithZod(zodSchemas.categories, categoriesData)

        const { data: tagsData, error: tagsError } = await supabase
          .from('tags')
          .select('id, name')
        if (tagsError) throw tagsError
        this.tags = validateWithZod(zodSchemas.tags, tagsData)

        const { data: costsData, error: costsError } = await supabase
          .from('costs')
          .select('id, name')
        if (costsError) throw costsError
        this.costs = validateWithZod(zodSchemas.costs, costsData)

        const { data: statusData, error: statusError } = await supabase
          .from('status')
          .select('id, name')
        if (statusError) throw statusError
        this.status = validateWithZod(zodSchemas.status, statusData)

        const { data: difficultiesData, error: difficultiesError } =
          await supabase.from('difficulties').select('id, name')

        if (difficultiesError) throw difficultiesError
        this.difficulties = validateWithZod(
          zodSchemas.difficulties,
          difficultiesData
        )
      } catch (err) {
        this.error = err.message
      }
    }
  }
})
