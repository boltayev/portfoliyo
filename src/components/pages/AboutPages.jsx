"use client"
import "./AboutPages.scss"
import Box from "../images/box-open.svg"
import { TypeAnimation } from 'react-type-animation';


function AboutPages(){
	return (
		<div className='aboutPages'>
			<h1>About Me</h1>
			<div className='div_long'></div>
			<div className='div_short'></div>
			<div className='name'>
				Men Elbek Boltayev
				<TypeAnimation
					sequence={[
						// Same substring at the start will only be typed out once, initially
						'FrontEnd Dasturchiman',
						1000, // wait 1s before replacing "Mice" with "Hamsters"
						'UX/UI Designer',
						1000,
					]}
					wrapper='span'
					speed={30}
					style={{ fontSize: '1em', display: 'inline-block' }}
					repeat={Infinity}
				/>
				<span></span>
			</div>

			<p>
				Qashqadaryo Viloyati Shaxrisabz shahrida tug'ilganman.Tatu Qarshi
				filiali intitutini tamomlaganman.Undan Undan tashqari Open Web IT
				Academiyasini o'qib tugatganman.Bir qancha joylarda shu soxa bo'yicha
				ishlaganman.
			</p>
			<div className='skills'>
				<div className='adreess a'>
					<div className='birth'>
						<div>
							<div>Tug'ilgan yil:</div>
							<div>6 June 1996</div>
						</div>
						<div className='hr'></div>
					</div>

					<div className='webside'>
						<div>
							<div>Telegram manzil:</div>
							<div>@elbekboltayev8</div>
						</div>
						<div className='hr'></div>
					</div>

					<div className='degree'>
						<div>Degree:cd</div>
						<div className='hr'></div>
					</div>

					<div className='city'>
						<div>
							<div>Shaxar :</div>
							<div>Shaxrisabz</div>
						</div>
						<div className='hr'></div>
					</div>

					{/* <button>Download Cv</button> */}
				</div>

				<div className='adreess b'>
					<div className='yosh'>
						<div>
							<div>Age :</div>
							<div>28</div>
						</div>
						<div className='hr'></div>
					</div>

					<div className='email'>
						<div>
							<div>Email :</div>
							<div>elbekboltayev@gmail.com</div>
						</div>
						<div className='hr'></div>
					</div>

					<div className='phone'>
						<div>Tel: +99891 962 15 48</div>
						<div className='hr'></div>
					</div>

					<div className='frelance'>
						<div>Frelance: Available</div>
						<div className='hr'></div>
					</div>
				</div>

				{/* <div className="skill"> 
						
				</div> */}
			</div>

			<section className='skill'>
				<div className='nameSkill'>
					<h2>Texnologiyalar</h2>
				</div>
				<div className='bothSkill'>
					<div className='leftSkill'>
						<div className='html br'>
							<div className='technologiy'>
								<div className=''>HTML</div>
								<div className=''>85</div>
							</div>
							<div className='degree'></div>
						</div>

						<div className='css br'>
							<div className='technologiy'>
								<div className=''>CSS</div>
								<div className=''>78</div>
							</div>
							<div className='degree'></div>
						</div>

						<div className='sass br'>
							<div className='technologiy'>
								<div className=''>SASS</div>
								<div className=''>76</div>
							</div>
							<div className='degree'></div>
						</div>

						<div className='bootstrap br'>
							<div className='technologiy'>
								<div className=''>BOOTSTRAP 5</div>
								<div className=''>60</div>
							</div>
							<div className='degree'></div>
						</div>
					</div>

					<div className='righSkill'>
						<div className='git br'>
							<div className='technologiy'>
								<div className=''>GITHUB / GIT</div>
								<div className=''>75</div>
							</div>
							<div className='degree'></div>
						</div>

						<div className='js br'>
							<div className='technologiy'>
								<div className=''>JAVASCRIPT</div>
								<div className=''>71</div>
							</div>
							<div className='degree'></div>
						</div>

						<div className='react br'>
							<div className='technologiy'>
								<div className=''>REACT JS</div>
								<div className=''>65</div>
							</div>
							<div className='degree'></div>
						</div>

						<div className='react br'>
							<div className='technologiy'>
								<div className=''>TAILWIND CSS</div>
								<div className=''>70</div>
							</div>
							<div className='degree'></div>
						</div>
					</div>
				</div>
			</section>

			<div className='lider'>
				<h2>Ta'lim</h2>
				<div className='block_edu'>
					<div className='education'>
						<div className='job_name'></div>

						<div className='start_text'>
							<div className='y-div'></div>
							<div className='inform'>
								<div className='box'>
									<div>
										<img src={Box} alt='box' />
									</div>
									<div className='yearNum'>2011 -2014</div>
								</div>
								<div className='education_name'>Iqtisodiyot kolleji</div>
								<p>Shahrisabz Iqtisodiyot kolleji o'qib tamomlaganman</p>
							</div>
						</div>

						<div className='start_text'>
							<div className='y-div'></div>
							<div className='inform'>
								<div className='box'>
									<div>
										<img src={Box} alt='box' />
									</div>
									<div className='yearNum'> 2020 -2024</div>
								</div>
								<div className='education_name'>
									Toshkent axborot texnologiyalari Universiteti Qarshi filialini
									Bakalavr bosqichini tamomlaganman
								</div>
								<p>Axborot xavfsizligi yo'nalishi</p>
							</div>
						</div>
					</div>

					<div className='twoo'>
						<div className='experiencee'>
							{/* <div>experience</div> */}
							<div className='start_text'>
								<div className='y-div'></div>
								<div className='text'>
									<div className='box'>
										<div>
											<img src={Box} alt='box' />
										</div>
										<div className='year'>2022-2023</div>
									</div>
									<div className='job_name'>Open Web Academic</div>
									<p>
										Dasturlashni chuqurroq o'rganish maqsadida Open Web IT
										Academiyasida o'qiganman va Sertifikat bilan tamomlaganman.
									</p>
								</div>
							</div>

							<div className='start_text'>
								<div className='y-div'></div>
								<div className='text'>
									<div className='box'>
										<div>
											<img src={Box} alt='box' />
										</div>
										<div className='year'>2021-2022</div>
									</div>
									<div className='job_name'>
										Continental Ingliz tili o'quv markazi
									</div>
									<p>
										Ingliz tilini ham o'rganish maqsadida Continental o'quv
										markazida 1 yil davomida tahsil olganman.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='lider'>
				<h2>Ish Tajribam</h2>
				<div className='block_edu'>
					<div className='education'>
						<div className='job_name'></div>

						<div className='start_text'>
							<div className='y-div'></div>
							<div className='inform'>
								<div className='box'>
									<div>
										<img src={Box} alt='box' />
									</div>
									<div className='yearNum'> 2024-yil</div>
								</div>
								<div className='education_name'>
									Qashqadaryo IT park qoshiga qarashli Ko'kdala IT parkida
									ishlaganman 6 oy davomida
								</div>
							</div>
						</div>
					</div>

					<div className='twoo'>
						<div className='experiencee'>
							{/* <div>experience</div> */}
							<div className='start_text'>
								<div className='y-div'></div>
								<div className='text'>
									<div className='box'>
										<div>
											<img src={Box} alt='box' />
										</div>
										<div className='year'>2024-yil</div>
									</div>
									<div className='job_name'></div>
									<p>
										Shahrisabz Shahrida Iqro Liderlari O'quv markazida
										ishlaganman
									</p>
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