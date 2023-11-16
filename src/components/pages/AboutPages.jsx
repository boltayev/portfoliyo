"use client"
import "./AboutPages.scss"
import Box from "../images/box.png"
import { TypeAnimation } from 'react-type-animation';


function AboutPages(){
	return(
		<div className="aboutPages"> 
			<h1>About  Me</h1>
			<div className="div_long"></div>
			<div className="div_short"></div>
			<div className="name">I am Elbek and  
			<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
         'FrontEnd Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'UX/UI Designer',
        1000,
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
			/>

			  <span></span></div>



			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius vel, nulla fugiat ea ex eaque eveniet veritatis sed quod dolore laudantium <br /> hic mollitia quia aliquam, illo repellat exercitationem excepturi <br /> officia! Numquam mollitia blanditiis, nihil totam quasi quis perspiciatis impedit quisquam. </p>
			<div className="skills">
				<div className="adreess a">
					<div className="birth">
						<div>
							<div>Birthday</div>
							<div>6 June 1996</div>
						</div>
						<div className="hr"></div>
					</div>

					<div className="webside">
						<div>
							<div>Webside</div>
							<div>wwww.bekdev.com</div>
						</div>
						<div className="hr"></div>
					</div>

					<div className="degree">
						<div>Degree:cd</div>
						<div className="hr"></div>
					</div>

					<div className="city">
						<div>
							<div>City</div>
							<div>Shaxrisabz</div>
						</div>
						<div className="hr"></div>
					</div>

					{/* <button>Download Cv</button> */}
				</div>

				<div className="adreess b">
					<div className="age">
						<div>
							<div>Age</div>
							<div>26</div>
						</div>
						<div className="hr"></div>
					</div>

					<div className="email">
						<div>
							<div>Email</div>
							<div>elbekboltayev@gmail.com</div>
						</div>
						<div className="hr"></div>
					</div>

					<div className="phone">
						<div>Phone: +99891 962 15 48</div>
						<div className="hr"></div>
					</div>

					<div className="frelance">
						<div>Frelance: Available</div>
						<div className="hr"></div>
					</div>
				</div>

				{/* <div className="skill"> 
						
				</div> */}
			</div>

			<section className="skill">
				<div className="nameSkill">Skill</div>
				<div className="bothSkill">
					<div className="leftSkill">
					<div className="html br">
							<div className="technologiy">
								<div className="">HTML</div>
								<div className="">85</div>
							</div>
							<div className="degree"></div>
						</div>

						<div className="css br">
							<div className="technologiy">
								<div className="">CSS</div>
								<div className="">78</div>
							</div>
							<div className="degree"></div>
						</div>

						<div className="sass br">
							<div className="technologiy">
								<div className="">SASS</div>
								<div className="">76</div>
							</div>
							<div className="degree"></div>
						</div>

						<div className="bootstrap br">
							<div className="technologiy">
								<div className="">BOOTSTRAP 5</div>
								<div className="">60</div>
							</div>
							<div className="degree"></div>
						</div>

					</div>

					<div className="righSkill">
						<div className="git br">
							<div className="technologiy">
								<div className="">GITHUB / GIT</div>
								<div className="">75</div>
							</div>
							<div className="degree"></div>
						</div>

						<div className="js br">
							<div className="technologiy">
								<div className="">JAVASCRIPT</div>
								<div className="">71</div>
							</div>
							<div className="degree"></div>
						</div>

						<div className="react br">
							<div className="technologiy">
								<div className="">REACT JS</div>
								<div className="">65</div>
							</div>
							<div className="degree"></div>
						</div>
					</div>
				</div>
			</section>

			<div className="lider">
			<div className="block_edu">
				<div className="education">
					<div className="job_name"></div>
					<div className="start_text">
						<div className="y-div"></div>
						<div className="inform">
							<div className="box">
								<div><img src={Box} alt="box" /></div>
								<div className="yearNum">2002 -2011</div>
							</div>
							<div className="education_name">70th school in Shkrisabz</div>
							<p>In 2002 - 2011, I studied at school No. 70. I participated in various events and graduated with honors.</p>
						</div>
					</div>

					<div className="start_text">
						<div className="y-div"></div>
						<div className="inform">
							<div className="box">
								<div><img src={Box} alt="box" /></div>
								<div className="yearNum">2011 -2014</div>
							</div>
							<div className="education_name">College of Economics</div>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed recusandae rem minima repudiandae beatae deserunt. Mollitia obcaecati esse perspiciatis.Dolorum, sed recusandae rem minima repudiandae beatae deserunt. Mollitia obcaecati esse perspiciatis.</p>
						</div>
					</div>

					<div className="start_text">
						<div className="y-div"></div>
						<div className="inform">
							<div className="box">
								<div><img src={Box} alt="box" /></div>
								<div className="yearNum"> 2020 -2024</div>
							</div>
							<div className="education_name">Tashkent University of Information Technology Karshi branch</div>
							<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sed recusandae rem minima repudiandae beatae deserunt. Mollitia obcaecati esse perspiciatis.Dolorum, sed recusandae rem minima repudiandae beatae deserunt. Mollitia obcaecati esse perspiciatis.</p>
						</div>
					</div>
				</div>

				<div className="twoo">
				<div className="experiencee">
					{/* <div>experience</div> */}
					<div className="start_text">
						<div className="y-div"></div>
						<div className="text">
							<div className="box">
								<div><img src={Box} alt="box" /></div>
								<div className="year">2021-2022</div>
							</div>
							<div className="job_name">Open Web Academic</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis ea repellendus quaerat dwswsw wdwdwswsw quod vel dicta voluptates nesciunt atque illo.Quisquam debitis ea repellendus quaerat quod vel dicta voluptates nesciunt atque illo.</p>
						</div>
					</div>

					<div className="start_text">
						<div className="y-div"></div>
						<div className="text">
							<div className="box">
								<div><img src={Box} alt="box" /></div>
								<div className="year">2022-2023</div>
							</div>
							<div className="job_name">Open Web Academic</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis ea repellendus quaerat quod vel dicta voluptates nesciunt ccwdw wddwswsw atque illo.Quisquam debitis ea repellendus quaerat quod vel dicta voluptates nesciunt atque illo.</p>
						</div>
					</div>

					<div className="start_text">
						<div className="y-div"></div>
						<div className="text">
							<div className="box">
								<div><img src={Box} alt="box" /></div>
								<div className="year">200738-3484</div>
							</div>
							<div className="job_name">Open Web Academic</div>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis ea repellendus quaerat quod vel dicta voluptates nesciunt  ddqsqs qsqsqsqsq atque illo.Quisquam debitis ea repellendus quaerat quod vel dicta voluptates nesciunt atque illo.</p>
						</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
	)
}
export default AboutPages