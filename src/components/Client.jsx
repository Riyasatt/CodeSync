import React from 'react'
import Avatar from 'react-avatar'

const Client = ({name}) => {
  return (
    <div className=' flex flex-col items-center  hover:bg-white/10 p-2 max-h-28 rounded-lg '>
      <Avatar name={name} size='60' round="10px" textSizeRatio={2.5} />
      <div className=' text-center w-[80px]   flex justify-center overflow-hidden pt-2 p-1 font-light text-white/90 '>
        {name}
      </div>
    </div>
  )
}

export default Client