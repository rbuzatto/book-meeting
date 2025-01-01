import { Card } from '@/components/Card'
import { useGetHostDetails } from './useGetHostDetails'
import { parseISO } from 'date-fns'
import { useState } from 'react'
import { BookingDetails } from './BookingDetails'
import { BookingSchedule } from './BookingSchedule'
import { BookingTime } from './BookingTime'
import ArrowBack from './imgs/arrowBack.svg?react'
import { Spinner } from '@/components/Spinner'

export const Booking = () => {
  const { data, isLoading } = useGetHostDetails()
  const [slot, setSlot] = useState<string | null>(null)
  const resetSlot = () => setSlot(null)
  const isFirstStep = !slot

  return (
    <Card className="flex">
      {isFirstStep ? null : (
        <button
          onClick={resetSlot}
          className="absolute top-4 left-8 text-blue-500 rounded-full p-2 border-2 border-gray-200 hover:bg-blue-100"
        >
          <ArrowBack width={16} strokeWidth={3} />
        </button>
      )}
      <div className="flex flex-col border-r-2 border-slate-100 w-72">
        <div className="flex justify-center items-center border-b-2 border-slate-100 p-4">
          {isLoading ? (
            <Spinner size="40" />
          ) : (
            <img src={data?.logo} alt="logo" className="w-16 h-16 rounded-full" />
          )}
        </div>
        <BookingDetails date={slot ? parseISO(slot) : null} />
      </div>
      {isFirstStep ? <BookingTime confirmSlot={setSlot} /> : <BookingSchedule slot={slot} />}
    </Card>
  )
}
