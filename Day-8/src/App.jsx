import React from 'react';
import Counter from './Counter';

const App = ()=>{

  let count = 0 ;

  function handleMousEnter(){
    console.log("Mouse enter event chal gaya");
  }
  function handleMouseLeave() {
     console.log("Mouse leave event chal gaya");
  }

   function handleName(e) {
    console.log("typing something");
    // console.log(e.preventDefault());
    console.log(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(" form submitted ");
  }
   return (
    <div>
     
     <h1> {count} </h1>
     <button onClick={ ()=>{
      console.log(count++);
     }}>  Increment </button>

      <button
        onClick={() => {
          console.log(count--);
        }}
      >
        Decrement
      </button>

       <div
        className="container"
        onMouseEnter={handleMousEnter}
        onMouseLeave={handleMouseLeave}
      ></div>

      <input type='text' placeholder='Enter your Name ' onChange={handleName}></input>
      <br/>
      <br/>

      <form onSubmit={handleSubmit}>
        <label htmlFor=""> First Name : </label>
        <input type='text' placeholder='Enter your firstname '/>
        <button> Register </button>
      </form>

        <Counter />
    </div>


   )
}

export default App;