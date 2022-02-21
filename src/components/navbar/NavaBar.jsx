import React,{useState} from 'react';
import logo from '../../assets/logo.svg';
import {RiMenu3Line,RiCloseLine} from 'react-icons/ri'
import './navbar.css'


const Menu=()=>{

  return(
    <>
         <p><a href='#home'>Home</a></p>
         <p><a href='#what is gpt'>What is GPT?</a></p>
         <p><a href='#open AI'>Open AI</a></p>
         <p><a href='#case study'>Case Studies</a></p>
         <p><a href='#library'>Library</a></p>
     </>
  )
}

const NavBar = () => {

  const [toggleMenu,setToggleMenu]=useState(false)
  return (
   <div className='gpt3__navbar'>
     <div className='gpt3__navbar-links'>

       <div className='gpt3__navbar-links_logo'>
         <img src={logo} alt='logo'/>
       </div>

       <div className='gpt3__navbar-links_container'>

         <Menu/>

       </div>

     </div>

     <div className='gpt3__navbar-sign' >
       <p>sign in</p>
       <button type='button'> Sign up</button>
     </div>

     <div className='gpt3__navbar-menu'>
       { toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={()=>{
         setToggleMenu(false)

       }}/> :
       <RiMenu3Line   color='#fff' size={27} onClick={()=>{
        setToggleMenu(true)

      }}/>

       }

       {
       toggleMenu &&
       ( <div className='gpt3__navbar-menu_container scale-up-center'>

        <div className='gpt3__navbar-menu_container-links'>
          <Menu/>

        </div>
        <div className='gpt3__navbar-menu_container-links-sign'>
        
        <p>sign in</p>
       <button type='button'> Sign up</button>

        </div>


       </div>)}

     </div>
   </div>
  )
}

export default NavBar