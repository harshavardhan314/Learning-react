import React,{useState,useEffect, use} from "react";    

const url="https://jsonplaceholder.typicode.com/posts"

function Fetch()
{

   

    
    const [user,setUser]=useState([])
    async function userHandle(){
        const response=await fetch(url);
        const newData=await response.json();
        setUser(newData);
    }
    useEffect(()=>{userHandle();},[])
    return(
        <div>Fetch
            {
                user.map((item)=>{
                    return(
                        <div>
                            <h1>user id:{item.id}</h1>
                            <h1>user title:{item.title}</h1>
                            <h1>user body:{item.body}</h1>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Fetch;