import { activitySchema } from '../components/money-activity/Item/MoneyActivity'

// Save activities "Localstorage"
const storageName: string = 'logs'
// Save items
export const saveItems = (acts: activitySchema[]) => localStorage.setItem(storageName, JSON.stringify(acts))
export const loadItems = JSON.parse(`${localStorage.getItem(storageName)}`) || []
