import React,{useState} from "react";

function ProfileLink(props)
{
    return <div className='flex-div'onClick={props.func}>
    {props.icon}
    <p>{props.text}</p>  
    </div>;
}

export default ProfileLink;