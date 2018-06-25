import React from 'react';
import "./Person.css";

const person = (props) => {
    return (
        <div className="Person" >
            <p onClick={props.click} >I'm {props.name} and I'm {props.age} am  years old</p>
            {props.children}
            <br />
            <input onChange={props.change} />
        </div>
    )
};

export default person;