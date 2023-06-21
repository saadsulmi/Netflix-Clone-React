import React, { useState } from 'react';
import './NavBar.css';
function NavBar() {
  const [navbar,setNavbar]=useState(false);
  const changeBackground=()=>{
    console.log(window.scrollY)
    if(window.scrollY>=80){
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeBackground);
  return (
    <div className={navbar ? 'navbar active':'navbar'}>
      <img className='logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netflix Logo" />
      <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
    </div>
  )
}

export default NavBar
