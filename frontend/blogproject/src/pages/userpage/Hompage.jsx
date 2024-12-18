import React,{useState, useEffect} from 'react'
import Carousel from '../../components/usercomponents/Carousel'
import Card from '../../components/usercomponents/Card'
import axios from 'axios'

const Hompage = () => {
    const[blog,setBlog]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8000/listblog/`)
        .then(res=>setBlog(res.data))
        .catch(err=>console.log(err))
    },[])
  return (
    <>
    <Carousel/>
    <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Sneakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blog.map((b,i)=>(
             <Card data={b} key={i}/>
        ))}
     
    </div>
    </div>
    </>
  )
}

export default Hompage