import cx from 'clsx'

type CardProps = {
  children: React.ReactNode
  className?: string
}

export const Card = ({ children, className }: CardProps) => (
  <div className={cx('m-2 w-fit rounded-lg shadow-md shadow-slate-300', className)}>{children}</div>
)
