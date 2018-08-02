import React, { Component } from 'react';

import iconObjective from '../../assets/objective/objective_icon.png'

class Objective extends Component {
	render() {
		const user_objetive = this.props.content.objective;
		const objetive_title = user_objetive.title;
		const objetive_description= user_objetive.description;

		return (
			<div className="pl-30 pr-30 pb-30">
				<div className="info_profile br-10 w-65 h-65 bg-grey-light pst-relative"> 
					<img className="pst-absolute m-auto t-0 b-0 l-0 r-0" src={iconObjective} /> 
					<h3 className="ml-90 tt-uppercase sz-30 wg-200 lh-60 c-white w-max-content"> {objetive_title} </h3>
				</div>
				<div className="wg-200 c-white"> 
					<p>{objetive_description}</p>
				</div>	
			</div>
		)
	}
}

export default Objective;