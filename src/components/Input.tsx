type InputProps = {
  label: string
  id: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, id, ...props }: InputProps) => {
  return (
    <div className="text-xs flex flex-col gap-1">
      <label htmlFor={id}>
        {label}
        {props.required ? <span className="text-red-500">*</span> : null}
      </label>
      <input className="border rounded-md p-2" type="text" id={id} {...props} />
    </div>
  )
}
