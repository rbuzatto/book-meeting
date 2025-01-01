import { Input } from '@/components/Input'

export const BookingSchedule = () => {
  return (
    <div className="p-4 flex flex-col gap-3 w-96">
      <h2>Enter Details</h2>
      <div className="flex flex-col gap-1">
        <Input required label="Name" id="input-name" />
        <Input required type="email" label="Email" id="input-email" />
      </div>
      <button className="text-blue-500 text-sm rounded-full w-fit border border-blue-500 hover:border-blue-700 px-2 py-1">
        Add Guests
      </button>
      <span className="text-xs text-slate-600">
        By proccedding, you confirm that you have read and agree to Calendly's terms of Use and
        Privacy Notice.
      </span>
      <button className="text-white text-md rounded-full w-fit border bg-blue-500 hover:bg-blue-700 px-3 py-1.5">
        Schedule Event
      </button>
    </div>
  )
}
