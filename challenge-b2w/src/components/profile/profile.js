import React, { Component } from 'react';

import imgProfile from '../../assets/profile/profile_picture.png'
import iconProfile from '../../assets/profile/profile_icon.png'

class Profile extends Component {
	render() {

		const user = this.props.content;
		const user_profile = user.profile;

		return (
			<div className="pl-30 pr-30 pb-30 pt-20">
				<div className="ta-center c-white">
					<img className="w-267 h-297 br-30" src={imgProfile} />
					<h2 className="wg-200 sz-45 lh-5 tt-uppercase"> {user.name} </h2>
					<h4 className="lh-3 sz-20 wg-200 tt-uppercase"> {user.profession} </h4>
				</div>

				<div className="info_profile br-10 w-65 h-65 bg-grey-light pst-relative"> 
					<img className="pst-absolute m-auto t-0 b-0 l-0 r-0" src={iconProfile} /> 
					<h3 className="ml-90 tt-uppercase sz-30 wg-200 lh-60 c-white w-max-content"> {user_profile.title} </h3>
				</div>
				<div className="wg-200 c-white"> 
					<p> {user_profile.description} </p>
				</div>	
			</div>
		)
	}
}

export default Profile;