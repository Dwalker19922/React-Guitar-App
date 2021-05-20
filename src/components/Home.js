import React from 'react';
import {Link} from "react-router-dom"
import {makeStyles} from '@material-ui/styles'
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FF0000 30%,#000000 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '1 3px 5px 5px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});
function Home(){
    const classes = useStyles();
return (
    <div className="homeDiv">
    <h1 className="header">Guitar Chord App</h1>
    <div className="bodyDiv">
    </div>
    <p className="paraOne">This page uses uber chord api.</p>
    <p className="para2">It can be found here:</p>
    <a className="link" rel="noreferrer" href="https://api.uberchord.com" target="_blank"> https://api.uberchord.com </a>
    <br></br>
    <Link to='/chords'>
    <button className={classes.root}>🔥Click here to find your desired Chords🔥</button>
    </Link>
    </div>
)
}
export default Home