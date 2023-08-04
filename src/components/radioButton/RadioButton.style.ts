import { Box, styled } from '@mui/material'

const RadioButtonStyled = styled(Box)`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      '. . .'
      '. . .'
      '. . .';
    gap: 14px;
  }
` as typeof Box

export default RadioButtonStyled
