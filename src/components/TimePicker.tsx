import { format } from 'date-fns'
import { DayPicker, DayPickerProps, getDefaultClassNames } from 'react-day-picker'

export const TimePicker = (props: DayPickerProps) => {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      disabled
      classNames={{
        day: ` w-13 h-13`,
        day_button: `m-1 bg-blue-50 rounded-full w-11 h-11 text-blue-500 font-bold`,
        selected: `[&_button]:bg-blue-500 [&_button]:text-white font-bold rounded-full border-0`,
        chevron: `${defaultClassNames.chevron} p-2 w-8 h-8`,
        disabled: `[&_button]:bg-transparent [&_button]:text-gray-400 [&_button]:font-normal`,
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
  )
}
