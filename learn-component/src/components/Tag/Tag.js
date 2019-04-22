import React from 'react';
import Chip from '../Chip/Chip';
import "../Chip/chip.css"

const Tag = (props) =>{
    const {name, status} = props;

    let content = "";
    if(status === "pass"){
        content = "Passed"
    } else if(status === "fail"){
        content = "Failed"
    } else {
        content = "Untested";
    }

    return(
        <div className="tag">
            <span>{name}</span>
            <Chip content={content} status={status}/>
        </div> 
    );
}

export default Tag;