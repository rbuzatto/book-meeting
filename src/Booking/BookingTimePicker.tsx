import clsx from 'clsx'

export type BookingTimePickerProps = {
  time: string
  pickSlot: () => void
  comfirmSlot: () => void
  isPicked: boolean
}

export const BookingTimePicker = ({
  time,
  pickSlot,
  comfirmSlot,
  isPicked,
}: BookingTimePickerProps) => {
  const baseClass = 'p-2 border rounded text-center transition-width duration-300 ease-in-out'

  return (
    <div className="flex items-center justify-center w-full gap-2">
      <button
        onClick={pickSlot}
        disabled={isPicked}
        className={clsx(
          baseClass,
          !isPicked
            ? 'text-blue-500 border-blue-200 hover:border-blue-500 w-full'
            : 'bg-gray-500 text-white w-1/2',
        )}
      >
        {time}
      </button>
      {isPicked ? (
        <button
          onClick={comfirmSlot}
          className={clsx(baseClass, 'w-1/2 bg-blue-500 text-white hover:bg-blue-700')}
        >
          Next
        </button>
      ) : null}
    </div>
  )
}
