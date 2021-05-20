import React from 'react'
function setActive(toggle) {

    const position = Number(toggle)


    let data = [

        { display: position === 1 ? true : false },
        { display: position === 2 ? true : false },
        { display: position === 3 ? true : false },
        { display: position === 4 ? true : false },
        { display: position === 5 ? true : false }]
    return data

}
function Fret(props) {
  
    const data= props.data
    return (
        <>

           
                {data.display === true ? <div className="fretB">
                    <Indicator fpos={props.fpos}/>
                </div> : <div className="fretB"></div>
                }
           
        </>
    )
}
function BottomString(props) {

    const data = setActive(props.data)
    const isMuted = false

    return (
        <>
            { !data ? <div></div> : data.map(item => { return (<Fret data={item} isMuted={isMuted} fpos={props.fpos} />) })}
        </>
    )
}



function Indicator(props) {
    return (
        <>
            <div className="indicator">
                {props.fpos}
            </div>
        </>
    )
}

export default BottomString;
