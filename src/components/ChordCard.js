import React from 'react';
import Visual from './VisualTab'


function ChordCard(props) {
    const { data } = props
    console.log(props)
    return (
        <div className="chordDiv">

            <p className="label">Chord Name:</p>
            <p className="name">{data.chordName}</p>

            <p className="label">Strings and Frets:</p>
            <div className="contrast">
            <p className="data">{data.strings}</p>
            </div>
            <p className="label"> Fingering Positions:</p>
            <div className="contrast">
            <p className="data">{data.fingering}</p>
            </div>
            <Visual data={data}/>
           
        </div>

    )
}

export default ChordCard