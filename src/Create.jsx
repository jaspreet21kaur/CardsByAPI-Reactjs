import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Create = () => {
    const [title,settitle]=useState("")
    const [body,setbody]=useState("")
    const [userID,setuserID]=useState(1)
    const [error,seterror]=useState("")
    const [isAdding,setisAdding]=useState(false)
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(title==="" || body===''){
            seterror("All Fields are Required !")
        }else{
            seterror("")
            setisAdding(true)
            const card={title,body,userID}
            setTimeout(() => {
                
                fetch("https://jsonplaceholder.typicode.com/posts",{
                    method:"POST",
                    headers:{"Content-Type":"application/json; charset=UTF-8"},
                    body:JSON.stringify(card)
                }).then((res)=>{
                    console.log(res.json())
                    settitle("")
                    setbody("")
                   
                    navigate("/")
        
                })
            }, 1000);
        }
    }
  return (

    <div className='flex flex-col gap-2 justify-center my-10 items-center'>
      <h1 className='text-red-900 font-bold text-2xl'>Add Card ❤️</h1>
      <div className='border p-8 w-[30%]'>
        <form className='flex flex-col '>
          <label htmlFor="title" className='font-bold'>Title</label>
          <input type="text" 
          name='title'
          value={title}
          onChange={(e)=>settitle(e.target.value)}
          required className='border border-red-800 rounded-md outline-none px-2 py-1 mb-2' />
          
          <label htmlFor="body" className='font-bold'>Description</label>
          <textarea type="text" 
           value={body}
           onChange={(e)=>setbody(e.target.value)}
          required className='border border-red-800 rounded-md outline-none px-2 py-1 mb-2' />
        
          
            <label htmlFor="userID" className='font-bold'>UserID</label>
            <select name="userID"
            value={userID}
            onChange={(e)=>setuserID(e.target.value)}
            required className='border border-red-800 bg-transparent rounded-md outline-none px-2 py-1 mb-2' >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                
            </select>
            <p className='animate-bounce m-2 text-red-900 '>{error}</p>
           <button type='submit' onClick={handleSubmit} className='bg-red-900 px-3 py-1 w-fit ml-[7rem] my-2 rounded-md text-white'>{!isAdding ? "Add Card" : "Adding Card..."}</button>
        </form>
      </div>
    </div>

  )
}

export default Create