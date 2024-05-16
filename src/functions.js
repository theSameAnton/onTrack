import navItems from '@/components/Navigation/TheNav.vue'
import { PAGE } from '@/constants.js'

export const normalizeGetPath = () => {
  const hash = window.location.hash.slice(1)

  if (Object.keys(navItems).includes(hash)) {
    return hash
  }

  window.location.hash = PAGE.TIMELINE

  return PAGE.TIMELINE
}
