import * as z from 'zod'

export const Role = z.object({
  id: z.number(),
  name: z.string().nullable(),
  body: z.string().nullable().optional()
})

export const Cost = z.object({
  id: z.number(),
  name: z.string(),
  range: z.string().optional()
})

export const Category = z.object({
  id: z.number(),
  name: z.string(),
  body: z.string().nullable().optional()
})

export const Difficulty = z.object({
  id: z.number(),
  name: z.string(),
  body: z.string().nullable().optional()
})

export const Status = z.object({
  id: z.number(),
  name: z.string(),
  body: z.string().nullable().optional()
})

export const Tag = z.object({
  id: z.number(),
  category_id: z.number().optional(),
  name: z.string(),
  body: z.string().nullable().optional()
})

export const Country = z.object({
  id: z.number(),
  name: z.string(),
  region: z.string().optional(),
  latitued: z.number().optional(),
  longitude: z.number().optional(),
  emoji: z.string().optional()
})

export const User = z.object({
  id: z.number(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  given_name: z.string(),
  surname: z.string().nullable().optional(),
  username: z.string().nullable(),
  avatar: z.string().nullable(),
  introduction: z.string().nullable(),
  role_id: z.number().optional()
})

export const BucketListItem = z.object({
  id: z.number(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  title: z.string(),
  body: z.string().nullable().optional(),
  category_id: z.number().optional(),
  country_id: z.number().optional(),
  cost_id: z.number().optional(),
  time_taken_id: z.number().optional(),
  role_id: z.number().optional(),
  tags: z.array(Tag).optional()
})
