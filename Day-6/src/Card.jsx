import React from "react";

const Card = (props) =>{

    let skills = props.skills.map( (skil)=>{
        return <li>{skil}</li>
    })

    return (
        <div className="card">
        <h1> Name : {props.name}</h1>
        <h2> Email : {props.email}</h2>
        <h2> Course : {props.course}</h2>
        <h3> Skills : </h3>
        <div>
         <ul>
            {skills}
        </ul>
        </div>
        
        <button onClick ={()=>props.greet(props.name)}>Greet</button>
        <button onClick = { ()=> props.getData(props.name, props.email, props.course)}>Get Data</button>
        </div>
    )
}


export default Card ;