import { startOfMonth, endOfMonth, format } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import { getData } from '../api/api'
import { BOOKING } from '../api/endpoints'

type ResponseData = {
  data: {
    available_times: string[]
  }
}

export const useGetSlotTimesForMonth = (date: Date) => {
  const startDate = startOfMonth(date)
  const endDate = endOfMonth(date)

  const startOftheMonth = format(startDate, "yyyy-MM-dd'T'HH:mm:ss")
  const endOftheMonth = format(endDate, "yyyy-MM-dd'T'HH:mm:ss")
  return useQuery<ResponseData>({
    queryKey: ['available_times', startOftheMonth, endOftheMonth],
    queryFn: async () =>
      getData<ResponseData>(BOOKING.AVAILABLE_TIMES, [startOftheMonth, endOftheMonth], {
        'x-mock-response-name': format(date, 'MMMyyyy'),
      }),
  })
}
