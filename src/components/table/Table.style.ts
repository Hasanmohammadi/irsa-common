import { Box, styled } from '@mui/material'

const TableStyledContainer = styled(Box)`
  box-shadow:
    0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border: 1px solid #eaecf0;
  border-radius: 8px;

  .MuiDataGrid-root {
    padding-bottom: 59px;
  }
  .MuiBox-root {
    position: relative;
  }
  .MuiDataGrid-footerContainer {
    display: none;
  }
  .MuiDataGrid-cell,
  .MuiDataGrid-columnHeader {
    color: #667085;
    padding: 14px 24px;
    text-align: start;
  }
  .MuiDataGrid-columnHeaders-hnAXxU {
    background: #f9fafb;
    height: 44px;
    background: #f9fafb;
    min-height: initial !important;
    max-height: inherit !important;
    font-weight: 500;
    font-size: 12px;
  }

  .MuiDataGrid-columnSeparator {
    display: none;
  }
  .ccYarM {
    text-align: start;
  }
  .MuiTablePagination-spacer-fxmGJa {
    display: none;
  }
  .gHnLyk {
    display: flex;
    justify-content: space-between;
    padding: 0 0 0 14px;
  }
  .mnVSb {
    margin-top: 44px !important;
    background: white;
  }

  .MuiDataGrid-cell--withRenderer:focus-within,
  .kgdcch .MuiDataGrid-columnHeader:focus-within,
  .kgdcch .MuiDataGrid-cell:focus-within {
    outline: none;
  }
` as typeof Box
export default TableStyledContainer
