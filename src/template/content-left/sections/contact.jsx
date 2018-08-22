import React, { Component } from 'react'

import Icon from '../../icons/icons'

class Contact extends Component {
	render() {
		const data = this.props.data || []
		const contactTitle = data.title
		const contactAdress = data.address
		const contactTel = data.tel
		const contactEmail = data.email
		const contactWebsite = data.webSite


		return (
			<section className="contact-me">
				<Icon text={ contactTitle } icon="contact" />
				<div className="contact-item">
					<div className="icon">
						<img src="images/location.png" />
					</div>
					<p>{ contactAdress }</p>
				</div>
				<div className="contact-item">
					<div className="icon">
						<img src="images/phone.png" />
					</div>
					<p>{ contactTel }</p>
				</div>
				<div className="contact-item">
					<div className="icon">
						<img src="images/email.png" />
					</div>
					<p>{ contactEmail }</p>
				</div>
				<div className="contact-item">
					<div className="icon">
						<img src="images/web.png" />
					</div>
					<a href="#">{ contactWebsite }</a>
				</div>
			</section>
		)
	}
}

export default Contact