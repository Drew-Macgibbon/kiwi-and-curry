import { defineStore } from 'pinia'
import * as t from '@/types'

type AppState = {
  booleanFilters: t.Filters
  tagFilter: t.Tag[]
  error: Error | null
}

function isFilterValid(filter: boolean | t.Tag[], type: t.BooleanFilterKey | 'tags'): boolean {
  if (type === 'tags') {
    return Array.isArray(filter)
  } else {
    return typeof filter === 'boolean'
  }
}

export default defineStore('preferences', {
  state: (): AppState => ({
    booleanFilters: [
      {
        id: 1,
        active: false,
        name: 'cost',
        startLabel: '0',
        endLabel: '$1,000+',
        activeOption: 0,
        options: [] as t.OptionFilter[]
      },
      {
        id: 2,
        active: false,
        name: 'difficulty',
        startLabel: 'Very easy',
        endLabel: 'Unknown',
        activeOption: 0,
        options: [] as t.OptionFilter[]
      },
      {
        id: 3,
        active: false,
        name: 'time',
        startLabel: '1 Day',
        endLabel: 'Lifelong',
        activeOption: 0,
        options: [] as t.OptionFilter[]
      },
      {
        id: 4,
        active: false,
        name: 'status',
        startLabel: 'Completed',
        endLabel: 'Idle',
        activeOption: 0,
        options: [] as t.OptionFilter[]
      }
    ],
    tagFilter: [] as t.Tag[],
    error: null
  }),
  getters: {
    /**
     * Returns the filter value for the specified filter type.
     */
    isBooleanFilterActive: (state): ((type: t.BooleanFilterKey) => boolean) => {
      return (type: t.BooleanFilterKey): boolean => state.booleanFilters.filter((f) => f.name === type)[0].active
    },
    getBooleanFilter: (state): ((type: t.BooleanFilterKey) => t.BooleanFilter) => {
      return (type: t.BooleanFilterKey): t.BooleanFilter => state.booleanFilters.filter((f) => f.name === type)[0]
    },
    getTagsFilter: (state): t.Tag[] => {
      return state.tagFilter
    },
    getActiveOption: (state): ((currentFilter: t.BooleanFilter) => String) => {
      return (currentFilter: t.BooleanFilter): String => {
        const current = state.booleanFilters.filter((f) => f.name === currentFilter.name)[0]
        return current.options.filter((o) => o.id === current.activeOption)[0]?.name || 'All'
      }
    }
  },
  actions: {
    // A function to load filter options based on the type
    async loadFilterOptions(type: t.BooleanFilterKey): Promise<t.OptionFilter[]> {
      let options: t.OptionFilter[] = []
      switch (type) {
        case 'cost': {
          const cost = useCosts()
          await cost.getCosts()
          options = cost.costs
          break
        }
        case 'difficulty': {
          const difficulty = useDifficulties()
          await difficulty.getDifficulties()
          options = difficulty.difficulties
          // Load difficulty options here
          // return difficultyOptions
          break
        }
        case 'time': {
          const time = useTimeTaken()
          await time.getTimeTaken()
          options = time.timeTaken
          // Load time options here
          // return timeOptions
          break
        }
        case 'status': {
          const status = useStatuses()
          await status.getStatuses()
          options = status.statuses
          // Load status options here
          // return statusOptions
          break
        }
        default:
          options = []
      }
      return options
    },
    updateFilterOptions(type: t.BooleanFilterKey, options: t.OptionFilter[]): void {
      this.$patch((state) => {
        const filterToUpdate = state.booleanFilters.find((f) => f.name === type)
        if (filterToUpdate) {
          filterToUpdate.options = options
        }
      })
    },
    async loadBooleanFilter(type: t.BooleanFilterKey): Promise<void> {
      if (isFilterValid(true, type)) {
        const foundFilter = this.booleanFilters.find((f) => f.name === type)
        if (!foundFilter) throw new Error(`Filter not found for "${type}".`)

        const options = await this.loadFilterOptions(type)
        this.updateFilterOptions(type, options)

        console.log('testzz', this.booleanFilters[foundFilter.id])
      }
    },
    /**
     * Sets the boolean filter value for the specified filter type.
     *
     * @param filter - The boolean value to set for the filter.
     * @param type - The type of filter to update.
     */
    setBooleanFilter(filter: boolean, type: t.BooleanFilterKey): void {
      if (isFilterValid(filter, type)) {
        // need to select the correct filter
        const foundFilter = this.booleanFilters.find((f) => f.name === type)
        if (foundFilter) {
          foundFilter.active = filter
        } else {
          throw new Error(`Filter not found for "${type}".`)
        }
      } else {
        throw new Error(`Invalid filter value provided for "${type}".`)
      }
    },
    /**
     * Sets the tags filter value.
     *
     * @param filter - The array of tags to set for the filter.
     */
    setTagsFilter(filter: t.Tag[]): void {
      if (isFilterValid(filter, 'tags')) {
        this.tagFilter = filter
      } else {
        throw new Error('Invalid filter value provided for tags.')
      }
    }
  }
})
