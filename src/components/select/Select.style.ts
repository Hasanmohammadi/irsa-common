import { Select } from '@mui/material'
import { styled } from 'styled-components'

const SelectStyled = styled(Select)`
  border-radius: 8px;

  .MuiPaper-root-jrVkwW {
    max-height: 300px;
  }

  .MuiFormLabel-root {
    top: 20px;
    background: white;
    z-index: 1;
    width: fit-content;
    left: 10px;
  }

  &.ghost > .MuiSelect-select-ktaPne {
    padding-right: 12px;
    font-weight: 500;
    font-size: 18px;
    padding-top: 20px;
  }

  &.disabled {
    background: #efefef;
  }
` as typeof Select

export default SelectStyled
