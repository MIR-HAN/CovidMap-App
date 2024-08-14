import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaVirus } from "react-icons/fa6";
import Form from './Form';
import { TbVaccineOff } from "react-icons/tb";



const Header = () => {

  const navigate =useNavigate();

  const handleSubmit=(e)=>{
e.preventDefault();

//get input text

const text= e.target[0].value;

//Redirect to detail page with prop
navigate(`/detail?q=${text}`)
  }
  return (
<header className='flex bg-zinc-900 text-white py-5 px-5
md:px-20 justify-between items-center'>

<Link to="/" className='flex items-center gap-2'>
<FaVirus className='text-green-500 text-xl' />
<h1>COVID Map</h1>
</Link>


<Form handleSubmit={handleSubmit}/>

<div className='flex items-center gap-3 max-md:hidden'>
  <p className='flex flex-col text-sm'>
    <span>Number of people vaccinated today</span>
    <span 
    className='text-gay-400'>55557</span>
  </p>
  <TbVaccineOff className='text-xl text-green-500'/>

</div>


</header>
  )
}

export default Header