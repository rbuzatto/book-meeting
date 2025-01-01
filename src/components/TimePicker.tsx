import { format } from 'date-fns'
import { DayPicker, DayPickerProps, getDefaultClassNames } from 'react-day-picker'
import { ThreeDots } from 'react-loader-spinner'

type TimePickerProps = {
  isLoading?: boolean
} & DayPickerProps

export const TimePicker = ({ isLoading, ...props }: TimePickerProps) => {
  const defaultClassNames = getDefaultClassNames()

  return (
    <div className="relative">
      <DayPicker
        disabled
        classNames={{
          day: ` w-13 h-13`,
          day_button: `m-1 bg-blue-50 enabled:hover:bg-blue-100 rounded-full w-11 h-11 text-blue-500 font-bold`,
          selected: `[&_button]:bg-blue-500 [&_button]:text-white font-bold rounded-full border-0`,
          chevron: `${defaultClassNames.chevron} p-2 w-8 h-8`,
          disabled: `[&_button]:bg-transparent hover:bg-transparent [&_button]:text-gray-400 [&_button]:font-normal`,
          month: `${defaultClassNames.month} h-full flex flex-col items-center justify-center gap-4`,
          month_caption: `${defaultClassNames.month_caption} h-8 flex items-center justify-center`,
          weekday: `${defaultClassNames.weekday} font-normal text-xs`,
          nav: `${defaultClassNames.nav} h-8 flex justify-between absolute w-3/5 top-0 right-1/2 translate-x-1/2`,
          root: `${defaultClassNames.root} w-fit relative m-2`,
        }}
        formatters={{
          formatWeekdayName: weekday => format(weekday, 'EEE').toUpperCase(),
        }}
        {...props}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <ThreeDots
          visible={isLoading}
          height="80"
          width="80"
          color="#a7adad"
          radius="9"
          wrapperClass=""
        />
      </div>
    </div>
  )
}
