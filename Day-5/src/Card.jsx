import Reac from "react";

const Card = (props) =>{

    return (
        // <div className="card">
        //     <h1> Name : {props.userData.name}</h1>
        //     <h3> Email : {props.userData.email}</h3>
        //     <h4> age : {props.userData.age}</h4>

        //     <button>
        //       {props.userData.isActive ? "show Profile ":" Profile Locked "}  
        //     </button>

        // </div>
        <>
        <div className="card">
             <h2>Name:{props.name}</h2>
        <h3>Email:{props.email}</h3>
        <h4>Age:{props.age}</h4>
        <button>{props.isActive ? "show Profile" : "Profile Locked"}</button>
      </div>
      <div>
        <button onClick={ () =>{
            props.greet(props.name)
        }}> Greet</button>
      </div>
        </>
    )
}

export default Card ;