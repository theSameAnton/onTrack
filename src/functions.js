import navItems from '@/components/Navigation/TheNav'
import { PAGE, HOURS_IN_DAY } from '@/constants'

export const normalizeGetPath = () => {
  const hash = window.location.hash.slice(1)

  if (Object.keys(navItems).includes(hash)) {
    return hash
  }

  window.location.hash = PAGE.TIMELINE

  return PAGE.TIMELINE
}

export function generateTimelineItems() {
  const timeLineItems = []

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timeLineItems.push({ hour })
  }

  return timeLineItems
}
