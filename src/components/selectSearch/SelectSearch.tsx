/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import clsx from 'clsx'
import { ChevronDown } from 'react-feather'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

import SelectSearchContainerStyled from './SelectSearch.style'

interface SelectSearchPropsI<T extends FieldValues> {
  className?: string
  label?: string
  placeholder?: string
  items?: { label: string; id: string }[]
  name: Path<T>
  control: Control<T>
  setTextSearched: React.Dispatch<React.SetStateAction<string>>
  textSearched: string
  loading?: boolean
  disabled?: boolean
  errorMessage?: string
}

export default function SelectSearch<T extends FieldValues>({
  className,
  label,
  placeholder,
  items,
  name,
  control,
  setTextSearched,
  loading,
  errorMessage,
  disabled,
  textSearched,
}: SelectSearchPropsI<T>) {
  return (
    <Box>
      {!!label && <p className='text-sm font-medium mb-2 text-gray-700'>{label}</p>}
      <SelectSearchContainerStyled className={clsx('cursor-pointer', className)}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Autocomplete
              disabled={disabled}
              {...field}
              placeholder={placeholder}
              id='combo-box-demo'
              options={items || [{ id: '', label: '' }]}
              sx={{
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid black',
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder={placeholder}
                  onChange={(e) => setTextSearched(e.target.value)}
                  value={textSearched}
                />
              )}
              popupIcon={<ChevronDown className='mt-0.5 cursor-pointer text-gray-500' size={20} />}
              loading={loading as boolean}
              onChange={(_, data) => field.onChange(data)}
            />
          )}
        />
      </SelectSearchContainerStyled>
      <p className='w-full text-center text-red-600 text-sm'>{errorMessage}</p>
    </Box>
  )
}
