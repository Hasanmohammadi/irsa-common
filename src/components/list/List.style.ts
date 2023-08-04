import { Box, List } from '@mui/material'
import { styled } from '@mui/material/styles'

const ListStyled = styled(List)({
  borderRadius: 8,
  ':hover': '#FFF6ED',
}) as typeof List

const ListStyledContainer = styled(Box)`
  .active-item {
    color: #ec4a0a;
  }

  .active-item svg {
    stroke: #ec4a0a;
  }

  .MuiListItemIcon-root {
    min-width: 0px;
    margin-right: 12px;
  }
` as typeof Box

export default ListStyled
export { ListStyledContainer }
