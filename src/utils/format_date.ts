import dayjs from 'dayjs'

type IDate = Date | number | string

export function formatMonthDay(date: IDate, dateFormat = 'MM月DD日') {
  return dayjs(date).format(dateFormat)
}

export function getDiffDays(startDate: IDate, endDate: IDate) {
  return dayjs(endDate).diff(startDate, 'day')
}
