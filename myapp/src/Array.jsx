import React from "react";
import {user} from "./data";
import "./style.css"
function Array() {
  console.log(user);



  return (
    <div>
      <h1>User details...</h1>
      <div>
        {
          user.map((item)=>{
            return(
              <div className="user">
               
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
