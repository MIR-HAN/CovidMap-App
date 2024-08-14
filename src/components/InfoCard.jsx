import React from 'react'

const InfoCard = ({item}) => {
 
  return (
    <div className='bg-gray-200 p-4 rounded-lg shadow-md text-gray-600'>
        <p className='text-sm font-semibold capitalized mb-2 capitalize'>{item[0].split("_").join(" ")}</p>
        <p className='text-lg font-bold text-gray-800'>{item[1]}</p>
    </div>
  )
}

export default InfoCard