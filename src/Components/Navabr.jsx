import axios from 'axios'
import React, { useState } from 'react'
import Category from './Category'
import Customdata from './Customdata'
import Error from './Error'
import Home from './Home'
import data from "./data";
import data2 from "./data2";
import request from './request'
import GeneralData from './GeneralData'

const Navabr = () => {
    const [searchterm,setsearchterm]=useState("")
    const [Gdata,setGdata]=useState([])
    const [Gendata,setgendata]=useState(data2)
    const [catData,setcatData]=useState(data.articles)
    const [title,settile]=useState("")

    
    const url=`https://newsapi.org/v2/everything?q=${searchterm}&language=en&from=2023-03-10&sortBy=publishedAt&apiKey=b2e696a2fc26455793ac4b54d642232a`;
   
    

    const searchData=((e)=>{
        if (e.key==="Enter"){
            axios.get(url).then((response) => {
                      setGdata(response.data);
                      setsearchterm("")
                    });
        }
    })

    const categorySports=(()=>{
        setcatData([])
        axios.get(request.sports).then((response) => {
            setcatData(response.data);
            settile("Sports")
          });
    })
    const categoryBusiness=(()=>{
        setcatData([])
        axios.get(request.business).then((response) => {
            setcatData(response.data);
            settile("Business")
          });
    })
    const categoryEntertainment=(()=>{
        setcatData([])
        axios.get(request.entertainment).then((response) => {
            setcatData(response.data);
            settile("Entertainment")
          });
    })
    
    const categoryGeneral=(()=>{
        setcatData([])
        axios.get(request.general).then((response) => {
            setcatData(response.data);
            settile("General")
          });
    })
    
    
    const categoryHealth=(()=>{
        setcatData([])
        axios.get(request.health).then((response) => {
            setcatData(response.data);
            settile("Health")
          });
    })
    const categoryScience=(()=>{
        setcatData([])
        axios.get(request.science).then((response) => {
            setcatData(response.data);
            settile("Science")
          });
    })

   

  return (
    <>
        <div className='flex-col w-full  text-blue-800 bg-black p-2 opacity-100  z-[100] overflow-x-hidden'>
            <div className='flex justify-items-start sm:justify-between w-full h-auto overflow-x-hidden'>
            <h1 className='text-xl sm:text-2xl md:text-3xl p-2 font-semibold mb-2 text-gray-400 overflow-hidden '>NewsNinja</h1>
            <input className='mt-2 mr-0 md:mr-10  rounded-lg px-1 sm:px-2 opacity-70 hover:opacity-95 h-[30px] ' type="text" value={searchterm} onChange={e=>setsearchterm(e.target.value)} onKeyDown={searchData} placeholder='Search any Topic' />
            </div>
            <hr />
        
        <div className='flex w-full mx-2 mt-2 space-x-3 sm:space-x-6 md:space-x-10 overflow-x-scroll scroll-smooth scrollbar-hide'>
            <p className='border rounded-lg px-1  bg-blue-100 border-none cursor-pointer' onClick={categorySports}>Sports</p>
            <p className='border rounded-lg px-1  bg-blue-100 border-none cursor-pointer' onClick={categoryBusiness}>Business</p>
            <p className='border rounded-lg px-1  bg-blue-100 border-none cursor-pointer' onClick={categoryEntertainment}>Entertainment</p>
            <p className='border rounded-lg px-1  bg-blue-100 border-none cursor-pointer' onClick={categoryGeneral}>General</p>
            <p className='border rounded-lg px-1  bg-blue-100 border-none cursor-pointer'onClick={categoryHealth}>Health</p>
            <p className='border rounded-lg px-1  bg-blue-100 border-none cursor-pointer'onClick={categoryScience}>Science</p>
            
        </div>
        </div>

        <Home/>
        
        {Gdata?<Customdata Gdata={Gdata}/>: <Error/> }

        {title?<Category catData={catData} title={title}/>:<GeneralData gendata={Gendata} title="General"/>}

        
    </>
  )
}

export default Navabr
