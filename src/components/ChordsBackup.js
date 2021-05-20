import React,{useState,useEffect} from 'react';
import axios from 'axios'




function Chords(){


   
const[state,setState]=useState(null)
const[error,setError]=useState("")
const[value,setValue]=useState("")
const[selector,setSelector]=useState("B")
const[string,setString]=useState(null)


useEffect(()=>{
axios.get(`https://api.uberchord.com/v1/chords/${selector}`)
.then((response) =>{
setState(response.data[0])
setString( parseInt(state.chordName))
})
.catch((error)=>{

setError("Please enter a valid chord")
})
},[selector])
const handleChange=(e)=>{
    e.preventDefault();
    setValue(e.target.value)
  
}
const handleSubmits=(e)=>{
e.preventDefault()
setSelector(value)
}
return (
    <div>
{'chords'}
<form onSubmit={handleSubmits}>
    <input type="text" placeholder="Enter Chord Name" onChange={handleChange}/>
    <button>Sumbit</button>
</form>
<br></br>
Chord: {!state?error:state.chordName}
<br></br>
Strings: {!state?error:state.strings}
<div>
</div>
    </div>
)
}
export default Chords