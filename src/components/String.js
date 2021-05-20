import React from 'react';
import Fret from './Fret';
export default function String (props){
    console.log(props)
    function setActive(toggle){

        const position= Number(toggle)

    
       let data=[
        
        {display: position===1?true:false},
        {display: position===2?true:false},
        {display: position===3?true:false},
        {display: position===4?true:false},
        {display: position===5?true:false}]
        return data
    
    }
    
 const data= setActive(props.data)

    return(
        <>
        {data.map(item=>{return(<Fret data={item.display}  fpos={props.fpos}/>)})}
        </>
    )
};