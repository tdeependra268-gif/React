import React from 'react';
import Card from './Card';

const App = () =>{
      const user = {
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 25,
    isActive: false,
  };

    function greet(userName) {
    alert(`Hello ${userName}`);
  }
  return (
     <div className="parent">
      {/* <Card userData={user} /> */}
       
         <Card name="Adarsh" email="adarsh@gmail.com" age={21} isActive={true} greet={greet} /> 

     </div>
  );
}

export default App;