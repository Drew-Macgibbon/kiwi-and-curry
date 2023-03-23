// store/index.ts
const items = [
  {
    title: 'Example Item 1',
    category_id: 1,
    cost_id: 1,
    time_taken_id: 1,
    country_id: 1,
    role_id: 1,
    tag_ids: [1, 2, 3],
    status_ids: [1, 2],
    user_ids: [1, 2]
  },
  {
    title: 'Example Item 2',
    category_id: 2,
    cost_id: 2,
    time_taken_id: 2,
    country_id: 2,
    role_id: 2,
    tag_ids: [4, 5, 6],
    status_ids: [2, 3],
    user_ids: [1]
  }
  // ... more items
]

export default defineStore('user', {
  state: () => ({
    user: null
  }),
  actions: {
    setUser(user) {
      this.user = user
    },
    async bulkInsertItems() {
      const supabase = useSupabase()
      const { data, error } = await supabase.rpc('insert_bucket_list_items', {
        p_items: items
      })
      console.log('Data returned', data, error)

      if (error) {
        console.error('Error inserting items:', error)
      } else {
        console.log('Items inserted successfully')
      }
    }
  }
})
