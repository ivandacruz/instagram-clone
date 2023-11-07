import React from 'react'

const SearchUserCard = () => {
  return (
    <div className='py-2 cursor-pointer'>
      <div className='flex items-center'>
        <img className='w-10 h-10 rounded-full' src="https://images.pexels.com/photos/16786961/pexels-photo-16786961/free-photo-of-outono-declinio-fundo-segundo-plano.jpeg" alt="" />

        <div className='ml-3'>
            <p>Full name</p>
            <p className='opacity-70'>username</p>
        </div>
      </div>
    </div>
  )
}

export default SearchUserCard
