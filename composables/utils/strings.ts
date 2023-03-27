/**
 * Converts the first letter of a string to uppercase.
 * @param {string} input - The input string.
 * @returns {string} - The string with the first letter capitalized.
 * @throws {Error} - Throws an error if the input is not a string.
 */
export function capitalizeFirstLetter(input: string): string {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string')
  }
  return input.charAt(0).toUpperCase() + input.slice(1)
}

/**
 * Capitalizes the first letter of every word in a string.
 * @param {string} input - The input string.
 * @returns {string} - The string with the first letter of each word capitalized.
 * @throws {Error} - Throws an error if the input is not a string.
 */
export function capitalizeWords(input: string): string {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string')
  }
  return input
    .split(' ')
    .map((word) => capitalizeFirstLetter(word))
    .join(' ')
}
