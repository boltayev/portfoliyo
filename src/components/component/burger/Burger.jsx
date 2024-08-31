import React from "react"
import "./Burger.scss"

import Home from "../../images/house.svg"
import About from "../../images/men.svg"
import Services from "../../images/service.svg"
import MenuBurger from "../../images/menu-burger.svg"

// import Services from "../../images/man.svg"
import Portfoliyo from "../../images/bag.svg"
import Contact from "../../images/messages.svg"
import {Link, NavLink, } from "react-router-dom"
import { useState } from "react";



const Burger = () => {

	const [open, setOpen] = useState(false)
	return (
        <>
		<div className={open ? "burger_block_mobile" : "burger_block"} onClick={() => setOpen(false) }>
			<div className='burger'>
				<div className='burger_bottom_four'>
                    <div className="one"></div>
                    <div className="two"></div>
				</div>

                <div className="fff">
                    <div className="three"></div>
                    <div className="four"></div>

                </div>

				<h1><span>C</span>oder</h1>
			</div>

			<div className='burger_inform'>
					 <div className="home">
                    <div className="full">
                        <img src={Home} alt="home" />
                        <NavLink to="/" className="span" >Home</NavLink>
                    </div>
                    <div className="hr"></div>
                </div>

                <div className="about">
                    <div className="full">
                        <img src={About} alt="about" />
                        <NavLink to="/about" className="span" >About</NavLink>  
                    </div>
                    <div className="hr"></div>
                </div>

                <div className="services">
                    <div className="full">
                        <img src={Services} alt="services" />
                        <Link to="/services" className="span" >Services</Link>
                    </div>
                    <div className="hr"></div>

                </div>

                <div className="portfoliyo">
                    <div className="full">
                        <img src={Portfoliyo} alt="portfoliyo" />
                        <Link to="/portfoliyo" className="span">Portfoliyo</Link>
                    </div>
                    <div className="hr"></div>
                   
                </div>

                <div className="contact">
                    <div className="full">
                        <img src={Contact} alt="contact" />
                        <Link to="./contact" className="span">Contact</Link>
                    </div>
                    <div className="hr"></div>

                </div>
			</div>
		</div>

        <div className='burgerClick'
        onClick={() => setOpen(!open)}>
			<img src={MenuBurger} alt="burger" />
		</div>

        </>
        
	)
}

export default Burger