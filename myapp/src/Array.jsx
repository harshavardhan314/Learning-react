import React from "react";
import {user} from "./data";
import "./style.css"
function Array() {
  



  return (
    <div>
      
      <div>
        {
          user.map((item)=>{
            return(
              <div className="user">
                <h1> user id:{item.id}</h1>
                <h1> user name:{item.name}</h1>
                <h1> user username:{item.username}</h1>
                <h1> user email:{item.email}</h1>
                <h1> user address:{item.address.street}</h1>
                <h1>user geo:{item.address.geo.lat}</h1>

                </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Array;
