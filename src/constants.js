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
