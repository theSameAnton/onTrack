import navItems from '@/components/Navigation/TheNav'
import { PAGE, HOURS_IN_DAY, SECONDS_IN_HOUR } from '@/constants'

export const normalizeGetPath = () => {
  const hash = window.location.hash.slice(1)

  if (Object.keys(navItems).includes(hash)) {
    return hash
  }

  window.location.hash = PAGE.TIMELINE

  return PAGE.TIMELINE
}

export const generateActivities = () => {
  return ['Coding', 'Training', 'Reading'].map((name, hours) => ({
    id: id(),
    name,
    secondsToComplete: hours + SECONDS_IN_HOUR
  }))
}

const isNull = value => {
  return value === null
}

export const normalizeSelectValue = value => {
  return isNull(value) || isNaN(value) ? value : +value
}

export const id = () => Date.now().toString(36) + Math.random().toString(36).substr(2)

export function generateTimelineItems() {
  const timeLineItems = []

  for (let hour = 0; hour < HOURS_IN_DAY; hour++) {
    timeLineItems.push({ hour })
  }

  return timeLineItems
}

export function generateActivitySelectOptions(activities) {
  return activities.map(activity => ({ value: activity.id, label: activity.name }))
}
