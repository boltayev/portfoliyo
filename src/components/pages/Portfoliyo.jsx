import "./Portfoliyo.scss"
import Boots from "../images/boots.png"
import Planet from "../images/planet.png"
import City from "../images/city.jpg"
import Flowers from "../images/flovers.jpg"
import Home from "../images/home.jpg"
import Lunch from "../images/lunch.jpg"
function Portfoliyo(){
	return(
		<div className="portfoliyoo">
			<h1>Portfolito</h1>
			<div className="both_divv">
				<div className="div_long"></div>
				<div className="div_short"></div>
			</div>
			<div className="project">
				<div className="pro">My Last Project</div>
				<div className="project_block">
					<div className="first_project ">
						<img src={Boots} alt="boots" />
					
						<div>
							<h3>Boots</h3>
							<button>
										<a href="https://legendary-meringue-cadee9.netlify.app/">event</a>
							</button>
						</div>
						
					</div>
					<div className="first_project">
						<img src={Planet} alt="planet" />
						<div>
							<h3>Planet</h3>
							<button>
										<a href="https://splendorous-figolla-5d1ba7.netlify.app">event</a>
							</button>
						</div>

						{/* <h3>Planet</h3> */}
					</div>
					<div className="first_project">
						<h3>City</h3>
						<img src={City} alt="sity" />
					</div>
					<div className="first_project">
						<h3>Flowers</h3>
						<img src={Flowers} alt="flowers" />
					</div>
					<div className="first_project">
						<h3>Lunch</h3>
						<img src={Lunch} alt="lunch" />
					</div>
					<div className="first_project">
						<h3>Home</h3>
						<img src={Home} alt="home" />
					</div>

				</div>
			</div>

		</div>
	)
}
export default Portfoliyo