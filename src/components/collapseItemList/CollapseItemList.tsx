import { Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'
import { Link, useLocation } from 'react-router-dom'

import { ListItemsI } from '../list'
import ListStyled from '../list/List.style'

interface CollapseItemListPropsI {
  className?: string
  items: ListItemsI
  selectedPathname: string
  handleListItemClick: (id: string) => void
}

export default function CollapseItemList({
  className,
  items,
  selectedPathname,
  handleListItemClick,
}: CollapseItemListPropsI) {
  const { pathname } = useLocation()

  const [open, setOpen] = useState(items?.subList?.some((sub) => pathname === sub.href))

  useEffect(() => {
    setOpen(items?.subList?.some((sub) => pathname === sub.href))
  }, [items?.subList, pathname])

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <>
      <ListItemButton onClick={handleClick} key={items?.id} className={className}>
        <ListItemIcon>{items?.icon}</ListItemIcon>
        <ListItemText primary={items?.text} />
        {open ? <ChevronUp /> : <ChevronDown />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <ListStyled component='div' disablePadding>
          {items?.subList?.map((item) => (
            <Link to={item.href} key={item.id}>
              <ListItemButton
                sx={{ pl: 4 }}
                key={item.id}
                onClick={() => handleListItemClick(item.href)}
                selected={selectedPathname === item.href}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          ))}
        </ListStyled>
      </Collapse>
    </>
  )
}
