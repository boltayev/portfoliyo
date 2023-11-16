"use client"
import "./MainPages.scss"
import Man from "../images/elbek.jpg"
// import Suun from "../images/suun.svg"
// import Moon from "../images/moon.png"
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react"

function MainPages(){
	// const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false)  
  //   const changeTheme = () => {
  //   document.body.classList.toggle('dark')
  //   setMode(!mode)
  //   localStorage.setItem('mode', !mode)
  // }


	return(

		
		<div className="main_pages">
				<div className="left_block">
					<h1>Hello, my name is
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                ' Elbek Boltayev',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                ' Elbek Coder',
                1000,
              ]}
              wrapper="span"
              speed={10}
              style={{ fontSize: '1em', display: 'inline-block' }}
              repeat={Infinity}
            />
      
					</h1>
					<div className="job"> I am <span>Web Developer</span> </div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam quae dignissimos ratione rem. Deleniti dolore cupiditate voluptatibus perferendis voluptates.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam quae dignissimos ratione rem. Deleniti dolore cupiditate voluptatibus perferendis voluptates.</p>
					<button>About me</button>
				</div>
				<div className="right_block">

					<div className="bottom_top">
                    <div className="first"></div>
                    <div className="second"></div>
                    {/* <div className="third"></div>
                    <div className="fours"></div> */}
          </div>
					<div className="photos"><img src={Man} alt="own_pages" /></div>
					<div className="bottom_bottom">
							<div className="third"></div>
							<div className="fours"></div>
					</div>
				</div>
		</div>
	)
}
export default MainPages