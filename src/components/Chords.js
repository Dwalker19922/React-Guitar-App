import React, {useEffect } from 'react';
import { connect } from 'react-redux'
import {newSearch,searchValue,fetchChords} from '../actions/actions'
import Form from './Form'
import ChordCard from'./ChordCard'


function Chords(props) {

    const{search,data,isLoading,fetchChords} = props

    useEffect(() => {
        fetchChords(search)
    }, [search,fetchChords])

    return (
        <div className="div">
            <h1 className="chordHeader">🎸Guitar Chords🎸</h1>
            <Form/>
            {isLoading===true?<h1>LOADING</h1>:null}
        {data.length===0? <h1 className="search">Enter your Search</h1>:data.map((item)=>{return(<ChordCard data={item}/>)})}
        </div>
    )
}


const mapdataToProps = (data) => {
    return {
        search: data.search,
        value: data.value,
        data: data.data,
        error:data.error,
        isLoading:data.isLoading
    }
}
const mapActionsToProps={
    newSearch,
    searchValue,
    fetchChords,
    
}
export default connect(mapdataToProps,mapActionsToProps)(Chords)