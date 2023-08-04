import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function TableLoading() {
  return (
    <Stack>
      <Skeleton variant='text' width='100%' height={55} />
      <div className='flex flex-col flex-wrap gap-6 mt-4'>
        <div className='flex justify-between'>
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
        </div>
        <div className='flex justify-between'>
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
        </div>
        <div className='flex justify-between'>
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
        </div>
        <div className='flex justify-between'>
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
        </div>
        <div className='flex justify-between'>
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
          <Skeleton variant='text' width='23%' height={40} />
        </div>
      </div>
    </Stack>
  )
}
