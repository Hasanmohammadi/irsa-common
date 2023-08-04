import Box from '@mui/material/Box'
import ModalCp from '@mui/material/Modal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fitContent',
  bgcolor: 'background.paper',
  border: '1px solid #D0D5DD',
  boxShadow: ' 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
  borderRadius: '12px',
  p: 4,
  padding: '24px',
}

interface ModalPropsI {
  children: React.ReactElement
  open: boolean
  onClose?: () => void
}

export default function Modal({ children, open, onClose }: ModalPropsI) {
  return (
    <ModalCp
      open={open}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>{children}</Box>
    </ModalCp>
  )
}
