import "./Contact.scss"
import Call from "../images/Frame.svg"
import Message from "../images/message.svg"
import Map from "../images/marker.svg"
import Website from "../images/website.svg"

function Contact(){
	return(
		<div className="contacts">
			<h1>Contact Me</h1>
			<div className="div_blockk">
				<div className="div_long"></div>
				<div className="div_short"></div>
			</div>

			<section>
				<h3>Have you any question</h3>
				<h4>I'm at your service</h4>
				<div className="service">
					<div className="phones">
						<img src={Call} alt="icon" />
						<div className="email_adreess">Call us on</div>
						<div className="num">+99891 962 15 48</div>
					</div>

					<div className="phones">
						<img src={Map} alt="icon" />
						<div className="email_adreess">Office</div>
						<div className="num">Ozodlik Street 60</div>
					</div>

					<div className="phones">
						<img src={Message} alt="icon" />
						<div className="email_adreess">Email</div>
						<div className="num">elbekbolgayev@gmail.com</div>
					</div>

					<div className="phones">
						<img src={Website} alt="icon" />
						<div className="email_adreess">Website</div>
						<div className="num">elbekcoder.com</div>
					</div>
				</div>
			</section>

			<section className="input_section">
				<h3>Sevd me and email</h3>
				<h4>I'm very responsive message</h4>
				<div className="input_block">
					<div className="text_send">
						<div><input type="text" placeholder="Text" /></div>
						<div><input type="text" placeholder="Email" /></div>
					</div>
					<div className="subject"><input type="text" placeholder="Subject" /></div>
					<div className="message"><input type="text" placeholder="Message" /></div>
					<button>Send Message</button>
				</div>
			</section>
		</div>
	)
}
export default Contact