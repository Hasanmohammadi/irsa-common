/* eslint-disable react/jsx-props-no-spreading */
import { Box, Skeleton, Stack } from '@mui/material'
import clsx from 'clsx'
import React, { useCallback, useState } from 'react'
import { ChevronDown } from 'react-feather'
import { Control, Controller, FieldValues, Path, PathValue } from 'react-hook-form'

import SelectStyled from './Select.style'

interface SelectPropsI<T extends FieldValues> {
  children: React.ReactNode
  defaultValue?: PathValue<T, Path<T>> | undefined
  value?: PathValue<T, Path<T>> | undefined
  className?: string
  label?: string
  name: Path<T>
  placeholder?: string
  errorMessage?: string
  control: Control<T>
  type?: 'ghost' | 'primary'
  disabled?: boolean
  loading?: boolean
  containerClassName?: string
}

export default function Select<T extends FieldValues>({
  children,
  defaultValue,
  className,
  label,
  placeholder,
  control,
  name,
  errorMessage,
  type,
  disabled,
  value,
  containerClassName,
  loading,
}: SelectPropsI<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const arrowDownIcon: () => JSX.Element = useCallback(
    () => (
      <Box>
        <ChevronDown className='mt-0.5 cursor-pointer text-gray-500' size={type === 'ghost' ? 16 : 20} />
      </Box>
    ),
    [type],
  )

  return (
    <Box onClick={() => !disabled && setIsOpen((pre) => !pre)} className={containerClassName}>
      {!!label && <p className='text-sm font-medium mb-2 text-gray-700'>{label}</p>}
      {loading ? (
        <Stack className={className}>
          <Skeleton variant='text' width='100%' height='100%' />
        </Stack>
      ) : (
        <>
          <Controller
            render={({ field }) => (
              <SelectStyled
                {...field}
                value={value || field.value}
                disabled={disabled}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                IconComponent={arrowDownIcon}
                className={clsx('pr-3', className, {
                  ghost: type === 'ghost',
                  disabled,
                })}
                defaultValue={defaultValue}
                open={isOpen}
                placeholder={placeholder}
                labelId=''
                label=''
                sx={{
                  '&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    border: '1px solid black',
                    ...(type === 'ghost' && {
                      border: 'none',
                    }),
                  },
                  ...(type === 'ghost' && { boxShadow: 'none' }),
                  ...(type === 'ghost' && {
                    '.MuiOutlinedInput-notchedOutline': { border: 0 },
                  }),
                }}
              >
                {children}
              </SelectStyled>
            )}
            name={name}
            control={control}
            defaultValue={defaultValue}
          />
          <p className='w-full text-center text-red-600 text-sm'>{errorMessage}</p>
        </>
      )}
    </Box>
  )
}
