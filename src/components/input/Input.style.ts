import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const InputStyledContainer = styled(Box)`
  .Mui-disabled {
    background: #efefef;
  }
  .MuiInputBase-root {
    height: 100%;
  }
  .MuiInputBase-input {
    width: 100% !important;
    padding: 0 14px;
    width: 216px;
  }
  .MuiInputBase-root {
    border-radius: 8px;
    border: 1px solid #d0d5dd;
  }

  .has-icon > div > input {
    width: 196px;
    padding: 0 0 0 48px;
  }

  fieldset {
    border: none !important;
  }

  .MuiSelect-root-kUbPPr {
    border: none;
    width: 73px;
    padding: 10px 0;
  }

  .has-select > div > input {
    width: 167px;
    padding: 0 0 0 77px;
  }

  .MuiSelect-select-ktaPne {
    height: 100%;
    padding: 0 0 0 18px;
  }
  .remove-border > .MuiFormControl-root-cIKZZJ > .MuiInputBase-root-jyCQLz {
    border: none;
  }
` as typeof Box

export default InputStyledContainer
