
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import { getCountryData } from '../../redux/action'
import Loader from '../../components/Loader';
import Error from "../../components/Error"
import InfoCard from '../../components/InfoCard';

 

const Detail = () => {

  const { data, error, isLoading } = useSelector((store) => store)

  const [params] = useSearchParams();

  const countryCode = params.get("code")
  const query = params.get("q")

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getCountryData({ code: countryCode, query }))

  }, [countryCode,query])
//change object to array
  const covidArr= Object.entries(data?.covid || {})
 


  return (
    <div className='grid place-items-center  p-6 min-h-[calc(100vh-74px)] bg-zinc-800 text-white'>
      <div className='min-h-[80vh]   bg-white rounded-lg shadow-lg p-8 max-w-3xl max-md:w-full'>

        {/* upside */}
        <div className='flex gap-5  justify-between items-center'>
       
            <Link className='bg-gray-700 py-3 px-3  rounded-md hover:bg-gary-800' to={"/"}> 
            Back</Link>
      
      <div className='flex items-center space-x-2'>
          {isLoading ?
            <Loader type="header"/> :
            !error &&
            <div className='flex gap-3 items-center'>
              <img className='w-24 rounded-md' src={data.country?.flags.png} alt={data.flags?.alt} />
              <h1 data-testid="country-title" className='text-gray-800 text-3xl font-bold'>{data.country.altSpellings[1]}</h1>
            </div>}</div>
        </div>
        


        {/* bottom */}
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-6'>
          {isLoading ? <Loader /> : error ? <Error message={error} retry={()=>   dispatch(getCountryData({ code: countryCode, query}))} /> : (
            covidArr.map((item,key)=> <InfoCard key={key} item={item}/>)
          )
         
             }
        </div>
      </div>
    </div>
  )
}

export default Detail