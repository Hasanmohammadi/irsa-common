import { Box, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import clsx from 'clsx'
import React, { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { Control, Controller } from 'react-hook-form'
import { Path } from 'react-hook-form/dist/types'
import { FieldValues } from 'react-hook-form/dist/types/fields'

import InputStyledContainer from './Input.style'

interface InputsPropsI<T extends FieldValues> {
  placeholder?: string
  className?: string
  variant?: 'standard' | 'filled' | 'outlined' | undefined
  id?: string
  label?: string
  errorMessage?: string
  icon?: React.ReactElement
  hasSelect?: boolean
  name: Path<T>
  control: Control<T>
  type?: string
  hasBorder?: boolean
  onEnter?: (event: React.KeyboardEvent<HTMLDivElement>) => void
  disabled?: boolean
  required?: boolean
  autoFocus?: boolean
  min?: number | string
  max?: number | string
}

export default function Input<T extends FieldValues>({
  id,
  min = 0,
  max,
  name,
  icon,
  type,
  label,
  onEnter,
  control,
  variant,
  required,
  disabled,
  hasSelect,
  autoFocus,
  hasBorder = true,
  className,
  placeholder,
  errorMessage,
}: InputsPropsI<T>) {
  const [age, setAge] = useState('10')
  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  const arrowDownIcon = () => (
    <Box>
      <ChevronDown className='mt-0.5 cursor-pointer text-gray-500' />
    </Box>
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && onEnter) {
      onEnter(event)
    }
  }

  return (
    <InputStyledContainer className={clsx(className, { 'mb-3': errorMessage })}>
      <div className='flex'>
        <p className='text-sm font-medium mb-2 text-gray-700'>{label}</p>
        {required && <span className='ml-1 text-xl self-center text-red-600'>*</span>}
      </div>
      <div
        className={clsx('w-full h-full', {
          'flex relative': icon || hasSelect,
          'remove-border': !hasBorder,
        })}
      >
        {!!icon && <div className='absolute flex h-full items-center px-4'>{icon}</div>}
        {hasSelect && (
          <Box className='absolute z-10' onClick={() => setIsOpen((pre) => !pre)}>
            <Select
              labelId='demo-simple-select-filled-label'
              id='demo-simple-select-filled'
              value={age}
              onChange={handleChange}
              IconComponent={arrowDownIcon}
              open={isOpen}
            >
              <MenuItem value={10}>US</MenuItem>
              <MenuItem value={20}>IR</MenuItem>
              <MenuItem value={30}>CA</MenuItem>
            </Select>
          </Box>
        )}
        <Controller
          name={name}
          control={control}
          render={({ field: { onBlur, onChange, ref, value } }) => (
            <TextField
              autoFocus={autoFocus}
              id={id}
              variant={variant}
              className={clsx('rounded-lg border-gray-300 h-full w-full', {
                'has-icon': icon,
                'has-select': hasSelect,
              })}
              placeholder={placeholder}
              type={type}
              onKeyDown={(e) => handleKeyDown(e)}
              disabled={disabled}
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              value={value}
              InputProps={{ inputProps: { min, max } }}
            />
          )}
        />
      </div>
      <p className='w-full text-center text-red-600 mt-0.5 text-sm'>{errorMessage}</p>
    </InputStyledContainer>
  )
}
