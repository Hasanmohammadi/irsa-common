import Chip from '@mui/material/Chip'
import clsx from 'clsx'

import TagStyledContainer from './Tag.style'

interface TagPropsI {
  color?: 'success' | 'grey'
  className?: string
  text?: string

  onDelete?: () => void
}

export default function Tag({ color, className, text, onDelete }: TagPropsI) {
  return (
    <TagStyledContainer>
      <Chip
        label={text}
        className={clsx(className, `${color as 'success' | 'grey'}`, {
          closable: onDelete,
        })}
        deleteIcon={<span className='close-icon'>x</span>}
        onDelete={onDelete || undefined}
      />
    </TagStyledContainer>
  )
}
