import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import clsx from 'clsx'

import RadioButtonStyled from './RadioButton.style'

interface RadioButtonPropsI {
  className?: string
  defaultValue?: string
  label?: string
  grid?: boolean
  radios?: {
    value: string
    radioText: string | React.ReactNode
    size?: 'small' | 'medium'
    children?: React.ReactNode
    className?: string
  }[]
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void
}

export default function RadioButton({ className, label, radios, defaultValue, onChange, grid }: RadioButtonPropsI) {
  return (
    <RadioButtonStyled className={className}>
      <FormControl className='w-full'>
        {label && <FormLabel id='demo-radio-buttons-group-label'>{label}</FormLabel>}
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue={defaultValue}
          name='radio-buttons-group'
          onChange={onChange}
          className={clsx('w-full', { grid })}
        >
          {radios?.map(({ value, radioText, size, children, className: radioClassName }, index) => (
            <div key={index} className={radioClassName}>
              <FormControlLabel value={value} control={<Radio size={size} />} label={radioText} />
              {children}
            </div>
          ))}
        </RadioGroup>
      </FormControl>
    </RadioButtonStyled>
  )
}
