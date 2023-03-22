import { ZodError } from 'zod'

export function validateWithZod(schema, data) {
  try {
    return Array.isArray(data)
      ? data.map((item) => schema.parse(item))
      : schema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      console.error('Validation error:', error.errors)
    } else {
      console.error('Unknown error:', error)
    }
    return null
  }
}
