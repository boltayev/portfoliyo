import "./Portfoliyo.scss"
import Boots from "../images/boots.png"
import Planet from "../images/planet.png"
import Book from "../images/book.png"
import Flag from "../images/flag.png"
import Empl from "../images/employest.png"
import GitHub from "../images/gitHub.png"
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
						<img src={Book} alt="sity" />
						<div>
							<h3>Library</h3>
							<button>
								<a href="https://exam-book-react.vercel.app/sign-in">event</a>
							</button>
						</div>
					</div>

					<div className="first_project">
						<img src={Flag} alt="flowers" />
						<div>
							<h3>Flag</h3>
							<button>
								<a href="https://react-js-styles-module-ml3f.vercel.app/">event</a>
							</button>
						</div>
					</div>


					<div className="first_project">
						<img src={GitHub} alt="lunch" />
						<div>
							<h3>GitHub Search</h3>
							<button>
								<a href="https://react-js-styles-module-uelh.vercel.app/">event</a>
							</button>
						</div>
					</div>

					<div className="first_project">
						<img src={Empl} alt="home" />
						<div>
							<h3>Employest</h3>
							<button>
								<a href="https://employees-react-fxby.vercel.app/">event</a>
							</button>
						</div>
					</div>

				</div>
			</div>

		</div>
	)
}
export default Portfoliyo