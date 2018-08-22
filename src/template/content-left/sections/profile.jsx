import React, { Component } from 'react'

import Icon from '../../icons/icons'

class Profile extends Component {
	render() {
		const data = this.props.data || []
		const profileTitle = data.title
		const profileDescription = data.description

		return (
			<section className="profile">
				<Icon text={ profileTitle } icon="profile"/>
				<p>{ profileDescription }</p>
			</section>
		)
	}
}

export default Profile