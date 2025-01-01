import { Card } from '@/components/Card'
import { BookingDetails } from './BookingDetails'
import { useHostDetails } from '@/useHostDetails'
import { BookingTime } from './BookingTime'
import { BookingSchedule } from './BookingSchedule'
import ArrowBack from './imgs/arrowBack.svg?react'

export const Booking = () => {
  const { data } = useHostDetails()
  const isFirstStep = false
  const host = { name: data.name, img: data.img }
  const reset = () => {}

  return (
    <Card className="flex">
      {isFirstStep ? null : (
        <button
          onClick={reset}
          className="absolute top-4 left-8 text-blue-500 rounded-full p-2 border-2 border-gray-200"
        >
          <ArrowBack width={16} strokeWidth={3} />
        </button>
      )}
      <div className="flex flex-col border-r-2 border-slate-100 w-72">
        <div className="flex justify-center border-b-2 border-slate-100 p-4">
          <img src={data.logo} alt="logo" className="w-16 h-16 rounded-full" />
        </div>
        <BookingDetails duration={30} date={new Date()} host={host} title={'30 minute Interview'} />
      </div>
      <BookingSchedule />
    </Card>
  )
}
