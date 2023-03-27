import * as z from 'zod'

export const Role = z.object({
  id: z.number(),
  name: z.string().nullable(),
  body: z.string().nullable().optional()
})

export const TimeTaken = z.object({
  id: z.number(),
  name: z.string().nullable(),
  ramge: z.string().nullable().optional()
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
  username: z.string().nullable().optional(),
  avatar: z.string().nullable().optional(),
  introduction: z.string().nullable().optional(),
  role_id: z.number().optional()
})

export const BucketListItem = z.object({
  id: z.number(),
  created_at: z.string(),
  updated_at: z.string().optional(),
  title: z.string(),
  body: z.string().nullable().optional(),
  featured_image: z.string().nullable().optional(),
  country: Country.nullable().optional(),
  cost: Cost.optional(),
  time_taken: TimeTaken.optional(),
  visibility: Role.optional(),
  difficulty: Difficulty.optional(),
  category: Category,
  status: z.array(Status).optional(),
  tags: z.array(Tag).optional(),
  users: z.array(User).optional()
})
