import { Box, styled } from '@mui/material'

const TagStyledContainer = styled(Box)`
  .bKTWGO {
    height: 22px;
    font-weight: 500;
    font-size: 12px;
  }
  .success {
    background: #ecfdf3;
    color: #027a48;
  }
  .grey {
    color: #344054;
    background: #f2f4f7;
  }
  .close-icon {
    font-size: 17px;
    color: #667085;
    padding: 0 6px 0 0;
    margin: -2px 7px 0 -5px;
  }
  .closable {
    height: fit-content;
  }
` as typeof Box

export default TagStyledContainer
