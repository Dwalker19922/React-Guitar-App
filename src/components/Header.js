
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
import useMediaQuery from '@material-ui/core/useMediaQuery';



 function Header(props) {
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
  
    const smallStyles =makeStyles({
      Menu:{
        color:"white",
        fontSize:"300%",
        marginLeft:"0%",
       maxWidth:"10%"
     
        },
  
    })
    const mobileStyles =makeStyles({
      search:{
        background:"white",
       borderRadius:"20%",
        border:"1px solid navy",
        height:"50%",
        minHeight:"40px",
        maxWidth:"40%",
  
      },
  
    })
    const xSmallStyles =makeStyles({
      navButton: {
        backgroundImage:`url(${fire})`,
        backgroundSize: "40px",
        borderRadius:"100%",
        color: 'white',
        width:"1px",
        fontSize:"10%"
      }
    })
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
  const standard = useStyles();
  const small = useMediaQuery('(max-width:800px)');
  const Ismobile = useMediaQuery('(max-width:350px)');
  const smallScrn=smallStyles()
  const mobile=mobileStyles()
  const xSmall= xSmallStyles()
  const isSmall=useMediaQuery('(max-width:175px)')
  console.log(isSmall)
  return(
  <div className={standard.nav}>
     { small===false? < MenuIcon className={standard.Menu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>:< MenuIcon className={smallScrn.Menu} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>}
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

    <div className={standard.container}>
      <form onSubmit={handleSubmits}>
    {Ismobile===true?<Input onChange={handleChange} className={mobile.search}/>:<Input onChange={handleChange} className={standard.search}/>}
    {isSmall===false?<Button onClick={handleSubmits}  className={standard.navButton}>Search</Button>:<Button onClick={handleSubmits}  className={xSmall.navButton}>Search</Button>}
    </form>
    </div>
     <Link to={"/chords"}>
  
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