import React from 'react'
import Parts from './Components/Parts';
import Cart from './Components/Cart';
import { AppContext } from './context';
import { useState } from 'react';


export default function Shop() {

    
  const [data, setData] = useState([]);

  console.log(data,"in app js")

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "Add user":
        setData((prevData) => [...prevData, payload.newdata]);
        return;
      default:
        return;
    }
  };


  return (
    <div>
         <AppContext.Provider value={{ data, dispatchUserEvent }}>
            <Parts/>
            <Cart/>
         </AppContext.Provider>
      
    </div>
  )
}
