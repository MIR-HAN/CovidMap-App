import React from 'react'
import { IoWarning } from "react-icons/io5"

const Error = ({ message, retry }) => {
  return (
    <div className='col-sapn-3 w-full flex flex-col gap-6'>
      <div className='flex items-center gap-4 bg-red-500 rounded-md p-5'>
        <IoWarning className='text-4xl' />
        <div>
          <h2>Sorry! An error accured!</h2>
          <p>{message}</p>
        </div>
      </div>

      <button
        onClick={retry}
        className='border text-gray-600 transition 
hover:bg-gray-200 p-2 rounded-md'>Try Again</button>


    </div>
  )
}

export default Error