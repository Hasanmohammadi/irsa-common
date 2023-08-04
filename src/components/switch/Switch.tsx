import SwitchCp from '@mui/material/Switch'
import { Button, Modal } from '../../../src'
import { useState } from 'react'

import SwitchStyledContainer from './Switch.style'

interface SwitchPropsI {
  className?: string
  checked?: boolean
  hasConfirm?: boolean
  onConfirm?: () => void
  confirmModalTitle?: string
}

export default function Switch({ className, checked, hasConfirm, onConfirm, confirmModalTitle }: SwitchPropsI) {
  const [isOpen, setIsOpen] = useState(false)

  const onOk = () => {
    if (onConfirm) onConfirm()
    setIsOpen(false)
  }

  const closeModal = () => {
    if (setIsOpen) setIsOpen(false)
  }

  const openModal = () => {
    if (setIsOpen) setIsOpen(true)
  }

  return (
    <>
      <SwitchStyledContainer className={className} onClick={hasConfirm ? () => openModal() : () => null}>
        <SwitchCp checked={checked} />
      </SwitchStyledContainer>
      {hasConfirm && (
        <Modal open={isOpen} onClose={closeModal}>
          <div className='w-96'>
            <p className='font-medium text-lg text-gray-900 w-full text-center'>{confirmModalTitle}</p>
            <div className='flex gap-3 w-full justify-between mt-8'>
              <Button className='w-full' color='ghost' onClick={closeModal} containerClassName='w-full'>
                Cancel
              </Button>
              <Button className='w-full' color='primary' onClick={onOk} containerClassName='w-full'>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
