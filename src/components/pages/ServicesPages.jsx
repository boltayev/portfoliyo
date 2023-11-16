import "./ServicesPages.scss"
import Phone from "../images/phone.png"
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
				<img src={Phone} alt="phone" />
				<div className="desiner">Web Desiner</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Phone} alt="phone" />
				<div className="desiner">Web Desiner</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Phone} alt="phone" />
				<div className="desiner">Web Desiner</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Phone} alt="phone" />
				<div className="desiner">Web Desiner</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Phone} alt="phone" />
				<div>Web Desiner</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

			<div className="first_block">
				<img src={Phone} alt="phone" />
				<div>Web Desiner</div>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio iure dignissimos quo excepturi libero quos ipsa fugiat similique modi dolorem.</p>
			</div>

		</section>
		</div>
	)
}
export default ServicesPages