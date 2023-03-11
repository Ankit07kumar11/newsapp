import React from 'react'
import Hero from './Hero'

const CustomData = ({Gdata}) => {
//    console.log("customdata",Gdata)
  return (
    <div>
        
        <h1 className='App text-4xl font-bold  '>News Search Results Here</h1>
        <p className='App text-xl font-semibold mb-10'>(Search any topic in searchbar)</p>
        <hr />
        <div className='text-center space-x-10'>
            {
                Gdata.articles?.map((tempdata,id)=>(
                    <Hero tempdata={tempdata} key={id}/>
                ))
            }
        
        </div>
        <hr />

    </div>
  )
}

export default CustomData
