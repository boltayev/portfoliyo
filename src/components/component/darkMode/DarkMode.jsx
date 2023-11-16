import React from 'react'
import "./DarkMode.scss"
import { useState } from "react"
import Suun from "../../images/suun.svg"
import Moon from "../../images/moon.svg"




function DarkMode () {
	const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false)  
    const changeTheme = () => {
    document.body.classList.toggle('dark')
    setMode(!mode)
    localStorage.setItem('mode', !mode)
  }

	return (
		<div className='darkMode'>
							  <div className="header_block">
            {
                  !mode ? <img src={Suun} alt="mode"/> :
                    <img  src={Moon} alt="mode" />
                }
            
            {/* <div><img src={Owa} alt="owa_img"  /></div> */}
            <nav>
                {
                    !mode ? <img src={Moon} alt="mode" onClick={changeTheme}/> : 
                    <img src={Suun} alt="mode" onClick={changeTheme}/>
                }
                {/* <div><img src={Moon} alt="moon" onClick={changeTheme}/></div> */}
            </nav>
        </div>


		</div>
	)
}

export default DarkMode