import IconButton from '@mui/material/IconButton'
import InputBase from '@mui/material/InputBase'
import clsx from 'clsx'
import { Search as SearchIcon } from 'react-feather'
import { Control, Controller, FieldValues } from 'react-hook-form'
import { Path } from 'react-hook-form/dist/types'

import SearchStyledContainer from './Search.style'

interface SearchPropsI<T extends FieldValues> {
  placeholder?: string
  className?: string
  name: Path<T>
  control: Control<T>
  onEnter?: () => void
}

export default function Search<T extends FieldValues>({
  placeholder,
  className,
  control,
  name,
  onEnter,
}: SearchPropsI<T>) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && onEnter) {
      onEnter()
    }
  }

  return (
    <SearchStyledContainer className={clsx('border border-gray-200 rounded-lg h-11', className)}>
      <IconButton type='button' aria-label='search'>
        <SearchIcon color='#667085' size={20} />
      </IconButton>
      <Controller
        name={name}
        control={control}
        render={({ field: { onBlur, onChange, value, ref } }) => (
          <InputBase
            placeholder={placeholder}
            inputProps={{ 'aria-label': 'search google maps' }}
            className='w-5/6 mt-1.5'
            onKeyDown={(e) => handleKeyDown(e)}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            ref={ref}
          />
        )}
      />
    </SearchStyledContainer>
  )
}
