import React from 'react'
const Section = () => {
  return (
    <div className='text-white'>
       <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
       <p className='uppercase font-bold text-blue-700 text-l'>Growing with data analysis</p>
       <h1 className='uppercase font-bold text-blue-700 md:text-7xl text-4xl sm:text-6xl md:py-4'>Grow with data.</h1>
       <div className='flex  justify-center items-center '>
        <p className=' text-xl md:text-2xl sm:text-4xl  font-bold'>Fast, flexible financing for</p>
       </div>
       <p className='md:text-2xl text-xl font-bold text-blue-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eaque.</p>

       <button className='bg-blue-700 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'> Get started</button>
       </div>
    </div>
  )
}

export default Section