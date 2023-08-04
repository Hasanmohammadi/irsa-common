import Box from '@mui/material/Box'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { GridValidRowModel } from '@mui/x-data-grid/models'
import { Button, EmptyState, TableLoading } from '../../../src'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import TableStyledContainer from './Table.style'

interface TablePropsI {
  rows: GridValidRowModel[]
  columns: GridColDef[]
  total: number
  pageSize: number
  loading: boolean
  hasEmptyStateBtn?: boolean
  className?: string
  name?: string
  emptyStateBtnLink?: string
}

export default function Table({
  columns,
  rows,
  total,
  pageSize,
  loading,
  className,
  emptyStateBtnLink,
  name,
  hasEmptyStateBtn = true,
}: TablePropsI) {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page'))

  const totalPage = Math.ceil(total / pageSize)

  const onNextPage = () => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      page: String(page + 1),
    })
  }

  const onPreviousPage = () => {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      page: String(page - 1),
    })
  }

  useEffect(() => {
    if (page > totalPage) {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        page: String(totalPage || totalPage + 1),
      })
    }
  }, [page, searchParams, setSearchParams, totalPage])

  if (loading) {
    return <TableLoading />
  }

  return (
    <div className={className}>
      {!!rows?.length && (
        <TableStyledContainer sx={{ width: '100%', height: '28em' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            page={page - 1 || page}
            hideFooterPagination
            rowsPerPageOptions={[6]}
            paginationMode='server'
          />
          <Box>
            <div className='flex justify-between w-full px-6 py-4 absolute bottom-0'>
              <div className='text-gray-700 text-sm font-medium self-center'>
                <span className='px-0.5'>Page</span>
                <span className='px-0.5'>{searchParams.get('page')}</span>
                <span className='px-0.5'>of</span>
                <span className='px-0.5'>{totalPage}</span>
              </div>
              <div className='flex flex-wrap gap-3'>
                <Button onClick={onPreviousPage} color='ghost' className='px-4 py-2' disabled={page <= 1}>
                  Back
                </Button>
                <Button onClick={onNextPage} color='ghost' className='px-3 py-2' disabled={page === totalPage}>
                  Next
                </Button>
              </div>
            </div>
          </Box>
        </TableStyledContainer>
      )}
      {rows && !rows?.length && (
        <EmptyState btnLink={emptyStateBtnLink as string} subject={name as string} hasBtn={hasEmptyStateBtn} />
      )}
    </div>
  )
}
