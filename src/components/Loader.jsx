import React from 'react'

const Loader = ({type}) => {

  //loader for header
  if(type === "header") return (
    <div data-testid="header-loader" className='flex items-center space-x-2 animate-pulse'>

    <div className='w-24 h-[64px] rounded-md bg-gray-400'></div>
    <div className='w-[180px] rounded-md h-[36px] bg-gray-400'></div>
  </div>
  )

  //loader for bottom

  // create an array 

  const arr = new Array(16).fill();



  return (

    arr.map(()=> (
      <div data-testid="card-loader" className='bg-gray-200 p-4 min-w-[206px] rounded-lg shadow-md text-gray-600 select-none  animate-pulse'>
      <p className='text-sm bg-gray-400 rounded w-4/5 font-semibold capitalized mb-2 capitalize'>&nbsp;</p>
      <h2 className='text-lg font-bold  bg-gray-300 rounded w-3/5  text-gray-800'>&nbsp;</h2>
  </div>
    ))

  )
}

export default Loader