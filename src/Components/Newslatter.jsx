import React from 'react'

const Newslatter = () => {
  return (
    <div id="Newslatter" className='w-full py-16 text-white px-4'>
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="lg:col-span-2">
                <h1 className='md:text-4xl sm:text-3xl text-2xl'>Want tips & tricks to optimize your flow </h1>
                <p>sign up to your news latter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='enter your email' />
                    <button className='rounded-md mx-auto px-6 py-3 my-4  w-[250px]  ml-4 bg-blue-700'>Notify me</button>
                </div>
                <p>we care bout the protection of your data Read our <a  className="text-blue-700" href="">privacy Policy</a></p>
            </div>
            
        </div>

    </div>
  )
}

export default Newslatter