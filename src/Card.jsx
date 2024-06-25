import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({card,title}) => {
console.log(card)
  return (
    <div className="flex flex-col  gap-5 p-6 ml-[20rem] mt-[3rem]">
        <h2 className='font-bold text-2xl'>{title}</h2>
        {card.map((el)=>(
          <div className="blogs-preview flex flex-col cursor-pointer w-[65%] relative hover:shadow-md hover:shadow-gray-400 p-2  border border-gray-100" key={el.id}>
       
            <li className="text-xl font-bold text-red-900">Title-- {el.title}</li>
            <div className='p-3'>
            <h1 className='font-bold'>Description</h1>
            <p className='text-lg'>{el.body}</p>
            <p className='font-thin italic'>userID--{el.userId}</p>
            <Link to={`/posts/${el.id}`}><button className='bg-red-900 px-3 py-1 rounded-md text-white'>See more</button></Link>
            </div>
            
            
          </div>

        ))}
    </div>
  )
}

export default Card