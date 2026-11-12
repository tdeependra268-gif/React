
import React , {useState} from "react";

const App = ()=>{

  const [showpassword , setShowpassWord ] = useState(true);

  function handlPassword(){
    setShowpassWord(!showpassword);
  }

  return (
    <div>
      <input type={ showpassword ? "text" : "password"}  
        placeholder="Enter the password "
      />
      <br />
      <br />

      <button onClick={handlPassword}>
        { showpassword ?"Hide Password" : "Show Password" }
      </button>
    </div>
  )
}

export default App ;