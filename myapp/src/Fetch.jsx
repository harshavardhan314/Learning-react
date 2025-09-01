import React,{useState,useEffect, use} from "react";    

const url="https://jsonplaceholder.typicode.com/users"

function Fetch()
{

   

    
    const [user,setUser]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)
    const userHandle=async()=>{
        const response=await fetch(url);
        const newData=await response.json();
        setUser(newData);
    }
    useEffect(()=>{userHandle();},[])
    return(
        <div>Fetch

            {loading && <div>Loading...</div>}

            {
                user &&

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