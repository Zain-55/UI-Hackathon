import Loadable from 'next/dist/shared/lib/loadable.shared-runtime'
import React from 'react'
import Loader from './components/loader'

function loading() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <Loader/>
    </div>
  )
}

export default loading
