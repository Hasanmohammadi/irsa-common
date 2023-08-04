import { LinearProgress } from '@mui/material'

interface LinearLoadingPagePropsI {
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit'
}
export default function LinearLoadingPage({ color }: LinearLoadingPagePropsI) {
  return (
    <div className='w-full absolute top-0'>
      <LinearProgress color={color} />
    </div>
  )
}
