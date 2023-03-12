import React from 'react'

const Hero = ({tempdata}) => {
    const redirector=(()=>{
        window.location.href=tempdata?.url
    })
    // console.log(news)
  return (
    <>
    
    <div className='card mt-2 w-[300px] sm:w-[330px] md:w-[360px] lg:w-[400px] h-[350px]  text-white relative inline-block cursor-pointer' onClick={redirector}>
        <img className='p-1 h-full object-cover relative rounded-lg ' src={tempdata?.urlToImage} alt="" />
        <div className=' w-[270px] sm:w-[310px] md:w-[330px] lg:w-[380px] h-[100px] rounded-3xl  text-black bg-gray-400   absolute bg-opacity-50 text-center top-56 left-2'>
        <h1 className='whitespace-normal absolute font-semibold z-[1] opacity-100 rounded-lg px-4 mx-2 text-black '>{tempdata?.title.length>100?`${tempdata.title.substring(0,100)}.......Click to Read More`:tempdata?.title}</h1>

        </div>
    </div>
    
      
    </>
  )
}

export default Hero
