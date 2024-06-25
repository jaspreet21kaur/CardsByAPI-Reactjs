import React, { useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import useFetch from './useFetch'

const CardDetail = () => {
    const {id}=useParams()
     const navigate=useNavigate()
     const [isdeleting,setIsdeleting]=useState(false)
    const {data:card,isPending,error}=useFetch("https://jsonplaceholder.typicode.com/posts/"+id)

    const hanldeDelete=()=>{
        setIsdeleting(true)
        fetch("https://jsonplaceholder.typicode.com/posts/"+card.id,{
            method:'DELETE',
        }).then(()=>{
            navigate("/")
        })
    }

  return (
    <>
 
        {error && <div>{error.message}</div>}
        {isPending && <div>Loading...</div>}
        {card &&  (
            <div className='flex justify-center items-center my-10 p-5'>
                <div className='border p-10 w-[50%]'>
                    <h2 className='font-thin italic'>UserID--{card.userId}</h2>
                    <h1 className='text-red-900 font-bold text-2xl mb-2'>Title-- {card.title}</h1>
                    <h2 className='font-bold text-lg mb-2'>Description</h2>
                    <p>{card.body}</p>
                    <button onClick={hanldeDelete} className='m-2 bg-red-900 text-white px-3 py-1 rounded-md'>{!isdeleting ? "Delete" :"Deleting..."}</button>
                </div>
            </div>
        )}
  
    </>
  )
}

export default CardDetail