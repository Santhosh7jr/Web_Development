import React, {useState} from "react";

const List = (props) => {
    
    return (
        <li 
        style={{cursor : 'pointer'}}
        onClick={() => props.onChecked(props.id)}
        >{props.text}</li>
    );
};

export default List;