import React from 'react'
import Hero from './Hero'

const Category = ({catData,title}) => {
  return (
    <>
    <h1 className='text-5xl App font-bold mb-5'>{title} News</h1>
    <div className='text-center space-x-10'>
            {
                catData?.articles?.map((tempdata,id)=>(
                    <Hero tempdata={tempdata} key={id}/>
                ))
            }
        
        </div>
        <hr />
        <br />
      
    </>
  )
}

export default Category
