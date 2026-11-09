import React from 'react';

import Head from './Header.jsx';
import Footer from './Footer.jsx';

export default function App () {
  
     let firstName = "Ankit";

      function greet() {
    console.log("Hello Students");
  }
  
   const skills = ["HTML", "CSS", "JS"]; 

    let age = 17;

    return (
    <div>
      <h1 className="heading">Hello{firstName}</h1>
      {greet()}
      {console.log(15 + 15)}
      {console.log(skills)}
      {age >= 18 ? "Eligible" : "Not Eligible"}
      
    
     <ul>
     {skills.map((skill) => {
      
        return <li key={skill}>{skill}</li>
      })}
     </ul>
    

      <Head />
      <Footer />
    </div>
  );
}
