import dayjs from 'dayjs'

export function formatMonthDay(
  date: Date | number | string,
  dateFormat = 'MM月DD日'
) {
  return dayjs(date).format(dateFormat)
}
