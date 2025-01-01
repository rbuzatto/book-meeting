import { format, addMinutes } from 'date-fns'
import { useGetHostDetails } from './useGetHostDetails'
import { ThreeDots } from 'react-loader-spinner'

type BookingDetailsProps = {
  date: Date | null
}

const getBookingDetails = (date: Date, duration: number) => {
  const formattedDate = format(date, 'EEEE, MMMM d, yyyy')
  const startTime = format(date, 'h:mmaaaa')
  const endTime = format(addMinutes(date, duration), 'h:mmaaa')
  return `${startTime} - ${endTime}, ${formattedDate}`
}

export const BookingDetails = ({ date }: BookingDetailsProps) => {
  const { data, isLoading } = useGetHostDetails()

  if (isLoading) {
    return (
      <div className="relative flex justify-center items-center w-full h-96">
        <ThreeDots visible={isLoading} height="64" width="64" color="#a7adad" radius="9" />
      </div>
    )
  }
  if (!data) return null

  const { name, img, title, duration } = data

  const dateDetails = date ? getBookingDetails(date, duration) : null

  return (
    <div className="p-4 flex flex-col gap-4">
      <div>
        <BookingHost name={name} img={img} />
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
