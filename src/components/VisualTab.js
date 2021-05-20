import React from 'react'
import String from './String'
import BottomString from './BottomString'

const Mutedstring = () => {
    return (<>
        <div className="fret">
            <p className="muted">X</p>
        </div>
        <div className="fret"></div>
        <div className="fret"></div>
        <div className="fret"></div>
        <div className="fret"></div>
    </>)
}


const Visual = (props) => {

    const fingering = props.data.fingering
    const fpos = fingering.split(' ')
    const chord = props.data.strings

    const data = chord.split(' ')
    console.log(fpos)

    const reduced = data.map((item, id) => {
        return item === "X" ? id : "notMuted"
    })

    let muteE = reduced[0] === 0 ? true : false
    let muteA = reduced[1] === 1 ? true : false
    let muteD = reduced[2] === 1 ? true : false
    let muteG = reduced[3] === 1 ? true : false
    let muteB = reduced[4] === 1 ? true : false
    let muteE2 = reduced[5] === 1 ? true : false

    console.log(muteG, muteA)

    return (
        <div className="cont">

            <div className="VisualTab">

                {muteE === true ? <Mutedstring /> : <String data={data[0]} fpos={fpos[0]} />}
                {muteA === true ? <Mutedstring /> : <String data={data[1]} fpos={fpos[1]} />}
                {muteD === true ? <Mutedstring /> : <String data={data[2]} fpos={fpos[2]} />}
                {muteG === true ? <Mutedstring /> : <String data={data[3]} fpos={fpos[3]} />}
                {muteB === true ? <Mutedstring /> : <String data={data[4]} fpos={fpos[4]} />}
                {muteE2 === true ? <Mutedstring /> :<BottomString data={data[5]} isMuted={false} fpos={fpos[5]} />}
            </div>
        </div>

    )
}
export default Visual