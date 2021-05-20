function Indicator(props){
    return(
        <>
           {props.uStatus===true?<div className="indicatorOpen"></div>:<div className="indicator"></div>}
         </>
    )
}

export default function Fret(props){
    let uStatus={
        active:props.data,
        open:props.open===0?true:false
    }

 


    return(
        <>
       {uStatus.active==true?<div className="fretC">
           <Indicator uStatus={uStatus.open}/>
       </div>:<div className="fret"></div>}
        </>
    )


}