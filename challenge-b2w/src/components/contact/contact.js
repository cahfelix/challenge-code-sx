import React, { Component } from 'react';

import iconContact from '../../assets/contact/contact.png'
import iconEmail from '../../assets/contact/email_icon.png'
import iconLocation from '../../assets/contact/location_icon.png'
import iconPhone from '../../assets/contact/phone_icon.png'
import iconWeb from '../../assets/contact/web_icon.png'

class Contact extends Component {
	render() {

		const user_contact = this.props.content.contactMe;
		const contact_title = user_contact.title;
		const address = user_contact.address;
		const tel = user_contact.tel;
		const email = user_contact.email;
		const web_site = user_contact.webSite;

		return (
			<div className="pl-30 pr-30 pb-30">
				<div className="info_profile br-10 w-65 h-65 bg-grey-light pst-relative mb-15"> 
					<img className="pst-absolute m-auto t-0 b-0 l-0 r-0" src={iconContact} /> 
					<h3 className="ml-90 tt-uppercase sz-30 wg-200 lh-60 c-white w-max-content"> {contact_title} </h3>
				</div>
				<div className="d-flex mb-18"> 
					<img className="w-17 h-25 mt-20" src={iconLocation} /> 
					<p className="ml-30 c-white">{address}</p>
				</div>
				<div className="d-flex mb-18"> 
					<img className="w-22 h-22 mt-20" src={iconPhone} /> 
					<p className="ml-30 c-white">{tel}</p>
				</div>	
				<div className="d-flex mb-18"> 
					<img className="w-21 h-17 mt-20" src={iconEmail} /> 
					<p className="ml-30 c-white">{email}</p>
				</div>
				<div className="d-flex mb-18"> 
					<img className="w-22 h-21 mt-20" src={iconWeb} /> 
					<p className="ml-30 c-white">{web_site}</p>
				</div>
			</div>
		)
	}
}

export default Contact;