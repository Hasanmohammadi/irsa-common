import DatePickerCP from '@hassanmojab/react-modern-calendar-datepicker'
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css'
import clsx from 'clsx'
import { Calendar } from 'react-feather'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import DatePickerStyledContainer from './DatePicker.style'

interface DatePickerPropsI<T extends FieldValues> {
  type?: 'RangeDay' | 'SingleDay'
  label?: string
  className?: string
  placeholder?: string
  control?: Control<T>
  name: Path<T>
  size?: 'md' | 'sm'
  iconPosition?: 'left' | 'right'
  position?: 'bottom' | 'top' | 'auto' | undefined
  minimumDate?: { day: number; year: number; month: number }
}

export default function DatePicker<T extends FieldValues>({
  type,
  label,
  className,
  control,
  name,
  size,
  placeholder,
  iconPosition = 'right',
  position = 'bottom',
  minimumDate,
}: DatePickerPropsI<T>) {
  return (
    <DatePickerStyledContainer>
      {!!label && <p className='text-sm font-medium mb-2 text-gray-700'>{label}</p>}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <DatePickerStyledContainer
            className={clsx(
              'flex cursor-pointer flex-wrap gap-2 border pl-3 pr-1 border-gray-300 rounded-lg items-center',
              className,
              size,
            )}
          >
            {iconPosition === 'left' && <Calendar size={20} className='cursor-default' color='#667085' />}

            {type === 'RangeDay' && (
              <div className='RangeDay'>
                <DatePickerCP
                  onChange={onChange}
                  value={value}
                  inputPlaceholder={placeholder}
                  shouldHighlightWeekends
                  colorPrimary='#EC4A0A'
                  colorPrimaryLight='#FFF6ED'
                  inputClassName={size}
                  calendarPopperPosition={position}
                  minimumDate={minimumDate}
                />
              </div>
            )}
            {type === 'SingleDay' && (
              <DatePickerCP
                onChange={onChange}
                value={value}
                inputPlaceholder={placeholder}
                shouldHighlightWeekends
                colorPrimary='#EC4A0A'
                colorPrimaryLight='#FFF6ED'
                calendarPopperPosition={position}
              />
            )}
            {iconPosition === 'right' && <Calendar size={20} className='cursor-default' color='#667085' />}
          </DatePickerStyledContainer>
        )}
      />
    </DatePickerStyledContainer>
  )
}
