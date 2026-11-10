
import React from 'react';

import Card from './Card';


const App = () =>{
 
   const skills = ["HTML", "CSS", "JavaScript", "React"];

  function greet (userName ){
    alert(`hello ${userName}`);
  }

  function getData(name, email, course){
    alert(`Name : ${name} \n Email : ${email} \n Course : ${course}`);
  }

  return (
      <div className="parent">
      <Card name="Adarsh" email="adarsh@example.com" course="Information Technology" skills={skills} greet={greet} getData={getData} />
      </div>
  )
}


export default App;