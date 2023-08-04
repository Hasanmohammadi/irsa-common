import CheckboxCp from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import clsx from 'clsx'
import { useState } from 'react'

import CheckBoxStyledContainer from './Checkbox.Style'

interface CheckboxPropsI {
  className?: string
  label?: string
  checked?: boolean
  onChecked?: () => void
  onUnChecked?: () => void
  disable?: boolean
}

export default function Checkbox({ className, label, checked, onChecked, onUnChecked, disable }: CheckboxPropsI) {
  const [isCheck, setIsCheck] = useState(checked)
  return (
    <CheckBoxStyledContainer>
      <div
        className={clsx(
          'py-4 px-6 border border-gray-200 rounded-lg',

          {
            'border-Primary/200 bg-Primary/50': isCheck,
            'border-gray-300 bg-gray-50': disable,
          },
          className,
        )}
      >
        <FormControlLabel
          control={
            <CheckboxCp
              onChange={(e) => {
                if (onChecked && e.target.checked) {
                  onChecked()
                  setIsCheck(true)
                } else if (onUnChecked && !e.target.checked) {
                  setIsCheck(false)
                  onUnChecked()
                }
              }}
              checked={checked}
            />
          }
          label={label}
        />
      </div>
    </CheckBoxStyledContainer>
  )
}
