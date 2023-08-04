import { Box } from '@mui/material'
import MenuCP from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react'

interface MenuItemI {
  children: React.ReactElement
  onClick: () => void
}

interface MenuPropsI {
  children: React.ReactElement | string
  items: MenuItemI[]
}

export default function Menu({ children, items }: MenuPropsI) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event?.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      <Box onClick={handleClick}>{children}</Box>
      <MenuCP
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
      >
        {items?.map((item: MenuItemI, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              setAnchorEl(null)
              item?.onClick()
            }}
          >
            {item?.children}
          </MenuItem>
        ))}
      </MenuCP>
    </Box>
  )
}
