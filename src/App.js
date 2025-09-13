import React from "react";

function App(props){
    return(
    <div className="card">
     <h2>{props.name}</h2>
     <img src={props.img} alt="add"/>
      <p>{props.phone}</p>
     <p>{props.email}</p>
    </div>
    );
}

export default App;