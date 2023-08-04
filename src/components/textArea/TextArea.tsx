import clsx from 'clsx'
import { Control, Controller } from 'react-hook-form'
import { Path } from 'react-hook-form/dist/types'
import { FieldValues } from 'react-hook-form/dist/types/fields'
interface TextAreaPropsI<T extends FieldValues> {
  rows?: number
  cols?: number
  control: Control<T>
  name: Path<T>
  id?: string
  className?: string
  placeholder?: string
  label?: string
  errorMessage?: string
}

function TextArea<T extends FieldValues>({
  rows,
  cols,
  control,
  name,
  id,
  className,
  placeholder,
  label,
  errorMessage,
}: TextAreaPropsI<T>) {
  return (
    <div className={className}>
      {!!label && <p className='text-sm font-medium text-gray-700'>{label}</p>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, ref, value } }) => (
          <textarea
            placeholder={placeholder}
            id={id}
            rows={rows}
            cols={cols}
            className={clsx('rounded-lg border border-gray-300 px-3 py-2 h-full w-full mt-2')}
            onBlur={onBlur}
            onChange={onChange}
            ref={ref}
            value={value}
          />
        )}
      />
      <p className='w-full text-center text-red-600 mt-0.5 text-sm'>{errorMessage}</p>
    </div>
  )
}

export default TextArea
