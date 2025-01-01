import { TimePicker } from '@/components/TimePicker'
import { useGetSlotTimesForMonth } from '@/useGetSlotTimesForMonth'
import clsx from 'clsx'
import { useState } from 'react'
import { format, parseISO, isBefore } from 'date-fns'

function groupByDay(dates: string[]) {
  return dates.reduce(
    (acc, date) => {
      const dayKey = format(new Date(date), 'yyyy-MM-dd')
      if (!(dayKey in acc)) {
        acc[dayKey] = []
      }
      acc[dayKey].push(date)
      return acc
    },
    {} as Record<string, string[]>,
  )
}

type BookingTimeProps = {
  confirmSlot: (slot: string) => void
}
export const BookingTime = ({ confirmSlot }: BookingTimeProps) => {
  const [pickedMonthDate, setPickedMonthDate] = useState<Date>(new Date())
  const { data, isLoading } = useGetSlotTimesForMonth(pickedMonthDate)
  const [selectedDay, setSelectedDay] = useState<string>('')
  const [selectedtSlot, setSelectedSlot] = useState<string>('')

  const slots = data?.data?.available_times ?? []
  const slotsByDay = groupByDay(slots)
  const enabledDays = new Set(Object.keys(slotsByDay))
  const isDisabledDay = (date: Date) => {
    return isBefore(date, new Date()) || !enabledDays.has(format(date, 'yyyy-MM-dd'))
  }
  const hasPickedDay = true

  const selectedSlotsForDay = selectedDay in slotsByDay ? slotsByDay[selectedDay] : []
  return (
    <div className="flex flex-col justify-center gap-4 p-7">
      <h2 className="font-bold text-xl">Select a Date & Time</h2>
      <div className="flex items-center justify-center w-full">
        <TimePicker
          isLoading={isLoading}
          onMonthChange={setPickedMonthDate}
          month={pickedMonthDate}
          disabled={isDisabledDay}
          mode="single"
          onSelect={slot => slot && setSelectedDay(format(new Date(slot), 'yyyy-MM-dd'))}
          selected={parseISO(selectedDay)}
        />
        {hasPickedDay ? (
          <div className="flex flex-col items-center justify-center w-full">
            <ul className="flex flex-col gap-y-2 w-40">
              {selectedSlotsForDay.map((slot, i) =>
                selectedtSlot !== slot ? (
                  <PickTime
                    key={i}
                    time={format(slot, 'HH:mm')}
                    onClick={() => setSelectedSlot(slot)}
                  />
                ) : (
                  <PickedTime
                    key={i}
                    time={format(slot, 'HH:mm')}
                    onClick={() => confirmSlot(selectedtSlot)}
                  />
                ),
              )}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const baseClass =
  'flex items-center justify-center w-full rounded-md p-2 text-md font-semibold border'

type PickTimeProps = {
  time: string
  onClick: () => void
}
const PickTime = ({ time, onClick }: PickTimeProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(baseClass, ' text-blue-500 border-blue-200 hover:border-blue-500')}
    >
      {time}
    </button>
  )
}

type PickedTimeProps = {
  time: string
  onClick: () => void
}
const PickedTime = ({ time, onClick }: PickedTimeProps) => {
  return (
    <div className="flex justify-center w-full gap-2">
      <div className={clsx(baseClass, 'text-white bg-gray-500')}>{time}</div>
      <button
        onClick={onClick}
        className={clsx(baseClass, 'text-white bg-blue-500 hover:bg-blue-700')}
      >
        Next
      </button>
    </div>
  )
}
