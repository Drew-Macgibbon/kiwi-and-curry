// This is a workaround for the issue with the scrollBehavior still present in Nuxt 3.3.1
export default {
  scrollBehavior () {
    return { top: 0 }
  }
}
