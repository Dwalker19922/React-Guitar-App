
import React from 'react'
import{Link,useHistory} from 'react-router-dom'
import {makeStyles} from '@material-ui/styles'
import {Button} from '@material-ui/core'
import fire from'../img/fire.jpg'
import { Input } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import{newSearch,searchValue}from '../actions/actions';
import {connect} from 'react-redux';

const useStyles = makeStyles({
  nav: {
    background: 'linear-gradient(45deg,#FF0000  10%, #000000 40%)', 
    border: 0,
    borderRadius: 3,
    boxShadow: '0 1px 5px 5px rgb(0, 0, 100)',
    position: 'fixed',
    width: '100%',
    color: 'white',
    height: "5%",
    minHeight: "50px",
    paddingTop:"1%",
    top:0,
    display: "flex",
    flexDirection:"row",
    flexWrap: "no-wrap",
    justifyContent:"space-around",
  },
  navButton: {
    backgroundImage:`url(${fire})`,
    backgroundSize: "40px",
    borderRadius:"100%",
    color: 'white',

  },
  Button2:{
    backgroundImage:`url(${fire})`,
    backgroundSize: "40px",
   borderRadius:"100%",
    color: 'white',

  },
  search:{
    background:"white",
   borderRadius:"20%",
    border:"5px solid navy",
    height:"50%",
    minHeight:"40px",
    
  },
  Menu:{
    color:"black",
    fontSize:"300%",
    marginLeft:"-10%"
   
 
    },
    container:{
      marginLeft:"-0%",

  marginRight:""}
  });

 function Header(props) {
   const{push}= useHistory()
  const handleChange = (e) => {
    e.preventDefault();
    props.searchValue(e.target.value)
}

const handleSubmits = (e) => {
    e.preventDefault()
    props.newSearch(props.value)
    push("/chords")
}

  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();
  return(
  <div className={classes.nav}>
      < MenuIcon className={classes.Menu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to= "/">
        <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/chords">
        <MenuItem onClick={handleClose}>Chord Diagrams</MenuItem>
        </Link>
        </Menu>

    <div className={classes.container}>
      <form onSubmit={handleSubmits}>
    <Input onChange={handleChange} className={classes.search}/>
    <Button onClick={handleSubmits}  className={classes.navButton}>Search</Button>
    </form>
    </div>
     <Link to={"/chords"}>
    <Button className={classes.Button2}>Chords</Button>
    </Link>
    
  </div>
   

  )}

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
  
}
export default connect(mapdataToProps,mapActionsToProps)(Header)