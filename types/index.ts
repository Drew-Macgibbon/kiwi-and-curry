import * as z from 'zod'
import * as schema from './zod'

// User Types
export type Role = z.infer<typeof schema.Role>
export type User = z.infer<typeof schema.User>

// Bucket List Items Types
export type BucketListItem = z.infer<typeof schema.BucketListItem>
export type Category = z.infer<typeof schema.Category>
export type Country = z.infer<typeof schema.Country>
export type Difficulty = z.infer<typeof schema.Difficulty>
export type TimeTaken = z.infer<typeof schema.TimeTaken>
export type Tag = z.infer<typeof schema.Tag>
export type Cost = z.infer<typeof schema.Cost>
export type Status = z.infer<typeof schema.Status>

/**
 * Represents the available filters for bucket list items.
 */

export type OptionFilter = {
  id: number
  name: string
}

export type BooleanFilter = {
  id: number
  active: boolean
  name: string
  startLabel: string
  endLabel: string
  activeOption: number
  options: OptionFilter[]
}

export type Filters = BooleanFilter[]

export type BooleanFilterKey = 'cost' | 'difficulty' | 'time' | 'status'
