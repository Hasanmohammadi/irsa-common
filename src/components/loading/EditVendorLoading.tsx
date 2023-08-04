import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export default function EditVendorLoading({ hasHeader = true }: { hasHeader?: boolean }) {
  return (
    <Stack>
      {hasHeader && (
        <>
          <div className='flex flex-wrap gap-6 mt-6'>
            <Skeleton variant='text' width='103px' height={30} />
            <Skeleton variant='text' width='103px' height={30} />
          </div>
          <div className='mt-3'>
            <Skeleton variant='text' width='100%' height={3} />
          </div>
          <div className='flex justify-between'>
            <div className='mt-8'>
              <Skeleton variant='text' width='150px' height={38} />
              <div className='mt-2'>
                <Skeleton variant='text' width='200px' height={30} />
              </div>
            </div>
            <div className='mt-8 flex self-end flex-wrap gap-6'>
              <Skeleton variant='text' width='150px' height={38} />
              <Skeleton variant='text' width='150px' height={38} />
            </div>
          </div>
          <div className='mt-3'>
            <Skeleton variant='text' width='100%' height={3} />
          </div>
        </>
      )}

      <div className='flex justify-center flex-wrap gap-6'>
        <Skeleton variant='text' width='23%' height={75} />
        <Skeleton variant='text' width='23%' height={75} />
      </div>
      <div className='flex justify-center flex-wrap gap-6'>
        <Skeleton variant='text' width='23%' height={75} />
        <Skeleton variant='text' width='23%' height={75} />
      </div>
      <div className='mt-3'>
        <Skeleton variant='text' width='100%' height={3} />
      </div>
      <div className='flex justify-center flex-wrap gap-6'>
        <Skeleton variant='text' width='23%' height={75} />
        <Skeleton variant='text' width='23%' height={75} />
      </div>
      <div className='mt-3'>
        <Skeleton variant='text' width='100%' height={3} />
      </div>
      <div className='flex justify-center flex-wrap gap-6'>
        <Skeleton variant='text' width='23%' height={75} />
        <Skeleton variant='text' width='23%' height={75} />
      </div>
    </Stack>
  )
}
