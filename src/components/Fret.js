function Indicator(props){
    return(
        <>
           <div className="indicator">{props.fpos}</div>
         </>
    )
}

export default function Fret(props){
    const data = !props.data?false:true

    let uStatus={
        active:data,
    }

    return(
        <>
       {uStatus.active===true?<div className="fretC">
           <Indicator uStatus={props.isMuted} fpos={props.fpos}/>
         </div>:<div className="fret"></div>}
        </>
    )
}