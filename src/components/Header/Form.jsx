import React from 'react'
import { CiSearch } from "react-icons/ci";


const Form = ({handleSubmit}) => {
  return (
   
    <form onSubmit={handleSubmit} className='flex items-center border rounded'>
        <input type="text" required className='bg-transparent py-1 px-1
         md:px-5 outline-none ' placeholder='Search for country' />
        <button className='bg-green-500 text-xl p-[6px]
        rounded-tr rounded-br transition hover:bg-green-600'>
        <CiSearch />

        </button>
    </form>
  )
}

export default Form