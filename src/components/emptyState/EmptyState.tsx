import { EmptyState } from '../../assets/svg'
import { Plus } from 'react-feather'
import { Link } from 'react-router-dom'
import Button from '../button'

interface EmptyStateCPI {
  subject: string
  btnLink: string
  hasBtn: boolean
}

export default function EmptyStateCP({ subject, btnLink, hasBtn }: EmptyStateCPI) {
  return (
    <div className='flex items-center w-full h-96 bg-gray-50 mt-6'>
      <div className='m-auto text-center'>
        <EmptyState />
        <h1 className='font-medium text-lg text-gray-900 mt-8'>{subject} not found</h1>
        {hasBtn && (
          <>
            <p className='font-medium text-sm text-gray-500 mt-2  mb-8'>
              To add a {subject}, click on the
              <span className='font-medium text-base text-gray-900 mx-1'>New {subject}</span>
              button.
            </p>
            <Link to={btnLink}>
              <Button color='primary' className='py-3 px-4 mt-8'>
                <div className='flex flex-wrap gap-2'>
                  <Plus size={20} className='self-center' />
                  New {subject}
                </div>
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
