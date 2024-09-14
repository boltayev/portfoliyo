"use client"
import "./MainPages.scss"
import Man from "../images/elbek.jpg"
// import Suun from "../images/suun.svg"
// import Moon from "../images/moon.png"
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react"
import { Link, NavLink } from 'react-router-dom'


function MainPages(){
	// const [mode, setMode] = useState(localStorage.getItem('mode') === 'true' || false)  
  //   const changeTheme = () => {
  //   document.body.classList.toggle('dark')
  //   setMode(!mode)
  //   localStorage.setItem('mode', !mode)
  // }


	return (
		<div className='main_pages'>
			<div className='left_block'>
				<h1>
					Salom,mening ismim <p className='paragraf'></p>
					<TypeAnimation
						sequence={[
							// Same substring at the start will only be typed out once, initially
							' Elbek Boltayev',
							1000, // wait 1s before replacing "Mice" with "Hamsters"
							' Elbek Coder',
							1000,
						]}
						wrapper='span'
						speed={10}
						style={{ fontSize: '1em', display: 'inline-block' }}
						repeat={Infinity}
					/>
				</h1>
				<div className='job'>
					{' '}
					Men <span>Front End</span>{' Dasturchiman'}
				</div>
				<p>
					Qashqadaryo Viloyati Shaxrisabz shahrida tug'ilganman.Tatu Qarshi filiali
					intitutini tamomlaganman.Undan Undan tashqari Open Web IT
					Academiyasini o'qib tugatganman.Bir qancha joylarda shu soxa bo'yicha
					ishlaganman.
				</p>
				{/* <button>About me</button> */}
				<NavLink to='/about' className='span'>
				 <button>About me</button>
				</NavLink>
			</div>
			<div className='right_block'>
				<div className='bottom_top'>
					<div className='first'></div>
					<div className='second'></div>
					{/* <div className="third"></div>
                    <div className="fours"></div> */}
				</div>
				<div className='photos'>
					<img src={Man} alt='own_pages' />
				</div>
				<div className='bottom_bottom'>
					<div className='third'></div>
					<div className='fours'></div>
				</div>
			</div>
		</div>
	)
}
export default MainPages