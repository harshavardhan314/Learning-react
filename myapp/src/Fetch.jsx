import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

function Fetch() {

    // intital values of a state variable
    const [users,setUsers]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(false)

    const UserHandle =async()=>{
        try{
            const response=await fetch(url)
            const data=await response.json()
            console.log(data)
            setUsers(data)
            setIsLoading(false)
            setIsError(false)
        }
        catch(error)
        {
            setIsLoading(false)
            setIsError(true)
        }


    }
    useEffect(()=>{
        UserHandle()
    },[])
        UserHandle()
    
    

    return (
        <div>
            <h2>Fetch Component</h2>
            {isLoading && <h3>Loading...</h3>}
            {isError && alert("Error Occured")}
            {users && users.map((item)=>(
                
                    <div key={item.id}>
                        <h4>{item.name}</h4>
                    </div>
                
            ))}

        </div>
    )


}
  

export default Fetch;
