import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const DatePickerStyledContainer = styled(Box)`
  .DatePicker__input {
    width: 100%;
    border: none;
    padding: 0.4em 0.8em;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: #344054;
  }
  .DatePicker {
    border: none;
  }
  .RangeDay > .DatePicker {
    width: 15rem;
  }
  .SingleDay > .DatePicker {
    width: 12rem;
  }
  .sm > .RangeDay > .DatePicker {
    width: 13rem;
  }
  .sm > .RangeDay > .DatePicker > .datepicker-input {
    padding: 0;
    margin: 0;
    width: 11.5rem;
  }
  .sm {
    font-size: 12px;
    font-weight: 600;
    color: #344054;
  }
` as typeof Box

export default DatePickerStyledContainer
