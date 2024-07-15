import { ChartBarIcon, ClockIcon, ListBulletIcon } from '@heroicons/vue/24/outline/index'

export const PAGE = Object.freeze({
  TIMELINE: 'timeline',
  ACTIVITIES: 'activities',
  PROGRESS: 'progress'
})

export const navItems = {
  [PAGE.TIMELINE]: ClockIcon,
  [PAGE.ACTIVITIES]: ListBulletIcon,
  [PAGE.PROGRESS]: ChartBarIcon
}

export const HOURS_IN_DAY = 24
export const SECONDS_IN_HOUR = 3600

export const PERIOD_SELECT_OPTIONS = [
  { value: 15 * 60, label: '0:15' },
  { value: 30 * 60, label: '0:30' },
  { value: 45 * 60, label: '0:45' }
]

export const BUTTON_TYPE = Object.freeze({
  REGULAR: 'regular',
  PRIMARY: 'primary',
  DANGER: 'danger'
})
