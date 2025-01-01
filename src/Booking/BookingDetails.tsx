import { format, addMinutes } from 'date-fns'

type Host = {
  name: string
  img: string
}

type BookingDetailsProps = {
  host: Host
  duration: number
  title: string
  date: Date | null
}

const getDateDetails = (date: Date, duration: number) => {
  const formattedDate = format(date, 'EEEE, MMMM d, yyyy')
  const startTime = format(date, 'h:mmaaa')
  const endTime = format(addMinutes(date, duration), 'h:mmaaa')
  return `${startTime} - ${endTime}, ${formattedDate}`
}

export const BookingDetails = ({ title, duration, host, date }: BookingDetailsProps) => {
  const dateDetails = date ? getDateDetails(date, duration) : null

  return (
    <div className="p-4 flex flex-col gap-4">
      <div>
        <BookingHost name={host.name} img={host.img} />
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="flex flex-col justify-center gap-1">
        <BookingDetail icon="🕒" content={title} />
        <BookingDetail icon="📹" content={'Web conferencing details provided upon confirmation.'} />
        {dateDetails ? <BookingDetail icon="📅" content={dateDetails} /> : null}
      </div>
    </div>
  )
}

type BookingDetailProps = {
  icon: React.ReactNode
  content: string
}

const BookingDetail = ({ icon, content }: BookingDetailProps) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <div className="text-sm text-slate-600 text-wrap">{content}</div>
    </div>
  )
}

type BookingHostProps = {
  name: string
  img: string
}
const BookingHost = ({ name, img }: BookingHostProps) => {
  return (
    <div className="flex flex-col gap-1">
      <img src={img} alt={name} className="w-8 h-8 rounded-full" />
      <p className="text-xs text-slate-600">{name}</p>
    </div>
  )
}
