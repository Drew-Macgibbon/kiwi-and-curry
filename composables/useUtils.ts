import * as time from './utils/time'
import * as string from './utils/strings'

export default function useHelpers() {
  return {
    time: {
      format: time.toDateObject,
      lastSeen: time.lastSeen
    },
    string: {
      capitalizeFirst: string.capitalizeFirstLetter,
      capitalizeAll: string.capitalizeWords
    }
  }
}
