import "./ServicesPages.scss"
import Phone from "../images/phone.png"
import Comp from "../images/comp.svg"
import Phoness from "../images/smartphone.svg"
import Css from "../images/css3-alt.svg"
import React from "../images/atom.svg"
import Js from "../images/js.svg"
import Code from "../images/code-simple.svg"
function ServicesPages(){
	return(
	<div className="service">
		<h1>Services</h1>
		<div className="both_div">
			<div className="div_long"></div>
			<div className="div_short"></div>
		</div>
		
		<section>
			<div className="first_block">
				<img src={Comp} alt="phone" />
				<div className="desiner">UX/UI Designer</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Phoness} alt="phone" />
				<div className="desiner">Mobile Version</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Css} alt="phone" />
				<div className="desiner">Css </div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={React} alt="phone" />
				<div className="desiner">React Js</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Js} alt="phone" />
				<div className="desiner">Js Code</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Code} alt="phone" />
				<div className="desiner">Coder</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

		</section>
		</div>
	)
}
export default ServicesPages