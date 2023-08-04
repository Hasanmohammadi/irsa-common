import { Box, styled } from '@mui/material'

const ButtonStyledContainer = styled(Box)`
  button {
    text-transform: none;
    padding: 10px 16px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 8px;
  }
  .ghost {
    color: #344054;
    background: #ffffff;
    border: 1px solid #d0d5dd;
    box-shadow: 0px 1px 2px rgb(16 24 40 / 5%);
  }
  .primary {
    color: #ffffff;
    background: #ec4a0a;
  }
  .secondary {
    background: #fff6ed;
    color: #ec4a0a;
  }
  .success {
    background: #4bb543;
    color: white;
  }
  .error {
    background: #b00020;
    color: white;
  }
  .first-btn-gp {
    border-radius: 8px 0 0 8px;
  }
  .last-btn-gp {
    border-radius: 0 8px 8px 0;
  }
  .btn-gp {
    border-radius: 0;
  }
  .btn-gp-active {
    background-color: #f2f2f2;
  }
  .disabled {
    border: 1px solid #d0d5dd;
    background: #ffffff;
    color: #d0d5dd;
  }
` as typeof Box

export default ButtonStyledContainer
