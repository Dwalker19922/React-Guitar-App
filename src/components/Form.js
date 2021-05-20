import React from 'react';

import { connect } from 'react-redux'
import {newSearch,searchValue,fetchChords} from '../actions/actions'

function Form (props) {

    const handleChange = (e) => {
        e.preventDefault();
        props.searchValue(e.target.value)
    }

    const handleSubmits = (e) => {
        e.preventDefault()
        props.newSearch(props.value)
    }
    return (
        <div>
           
            <form className="form" onSubmit={handleSubmits}>
                <input className="input" type="text" placeholder="Enter Chord Name" onChange={handleChange} />
                <button className="btn">Search</button>
            </form>
        </div>
    )
}


const mapdataToProps = (data) => {
    return {
        search: data.search,
        value: data.value,
        data: data.data,
        error:data.error
    }
}
const mapActionsToProps={
    newSearch,
    searchValue,
    fetchChords,
}
export default connect(mapdataToProps,mapActionsToProps)(Form)