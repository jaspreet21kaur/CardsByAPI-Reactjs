
import { useEffect } from "react"
import Card from "./Card"
import useFetch from "./useFetch"

const Home=()=>{
  const {data:cards,isPending,error}=useFetch('https://jsonplaceholder.typicode.com/posts')
    return(
        <div>
            {error && <div className="ml-[27%]">{error}</div>}
            {isPending && <div className="ml-[27%]">Loading......</div>}
            {cards && <Card card={cards} title={"All Cards"} />}
        </div>
    )



    
}

export default Home