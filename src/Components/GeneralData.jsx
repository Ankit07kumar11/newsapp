import React from 'react'
import Hero from './Hero'
import data2 from './data2'

const GeneralData = () => {
    var Gendata=data2

  return (
    <>
    <h1 className='text-6xl App font-bold mb-5'>General</h1>
    <div className='text-center space-x-10'>
    {
                Gendata?.articles?.map((tempdata,id)=>(
                    <Hero tempdata={tempdata} key={id}/>
                ))
            }
           
        
        </div>
        <hr />
        <br />
      
    </>
  )
}

export default GeneralData
