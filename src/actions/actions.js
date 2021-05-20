import axios from 'axios'
export const NEW_SEARCH="NEW_SEARCH"
export const SEARCH_VALUE="SEARCH_VALUE"
export const FETCH_START="FETCH_START"
export const FETCH_SUCCESS="FETCH_SUCCESS"
export const FETCH_FAIL="FETCH_FAIL"

export const newSearch=(search)=>{
return{
    type:NEW_SEARCH,payload:search
}
}
export const searchValue=(value)=>{
    return{
        type:SEARCH_VALUE,payload:value
    }
    }
export const fetchStart =()=>{
    return({type:FETCH_START})
}
export const fetchSuccess =(chordData)=>{
    return({type:FETCH_SUCCESS,payload:chordData})
}
export const fetchFail=(error)=>{
return({type:FETCH_FAIL,payload:error})
}
export const fetchChords =(search)=>{
    return(dispatch =>{
        dispatch({type:FETCH_START});
        dispatch(fetchStart());
    axios.get(`https://api.uberchord.com/v1/chords?nameLike=${search}`)
        .then((res)=>{
            dispatch({type:FETCH_SUCCESS,payload:res.data})})
        .catch((error)=>{
            dispatch({type:FETCH_FAIL,payload:error})
        })
    })
}