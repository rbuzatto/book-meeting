import { ThreeDots } from 'react-loader-spinner'
import type { ThreeDotsProps } from 'react-loader-spinner'

export type SpinnerProps = {
  size?: number | string
} & ThreeDotsProps

export const Spinner = ({ size = 64, ...props }: SpinnerProps) => {
  const width = size
  const height = size

  return <ThreeDots {...props} height={width} width={height} color="#a7adad" radius="9" />
}
