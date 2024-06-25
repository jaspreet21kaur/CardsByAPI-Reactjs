import { useEffect, useState } from "react"

const useFetch=(url)=>{
    const [data,setData]=useState(null)
    const [isPending,setPending]=useState(true)
    const[error,seterror]=useState(null)


    useEffect(()=>{
          setTimeout(() => {
            
              fetch(url)
              .then((res)=>{
                  if(!res.ok){
                      throw Error('could not fetch the data')
                  }
                  return res.json()
              })
              .then(data=>{
                  // console.log(data)
                  setData(data)
                  setPending(false)
                  seterror(null)
              }) 
              .catch(err=>{
                  
                      seterror(err.message)
                      setPending(false)
                  
              })
          }, 1000);
   

        
    },[])

    return {data,isPending,error}
}

export default useFetch



