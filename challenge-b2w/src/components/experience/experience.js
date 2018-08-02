import React, { Component } from 'react';

import iconExperience from '../../assets/experience/experience.png'

class Experience extends Component {
	render() {

		const user_experience = this.props.content.experience;
		const experience_title = user_experience.title;
		const experience = user_experience.company;

		return (
			<div className="pl-30 pr-30 pb-30 bg-white pt-20">
				<div className="info_profile br-10 w-65 h-65 bg-blue-light pst-relative mb-15"> 
					<img className="pst-absolute m-auto t-0 b-0 l-0 r-0" src={iconExperience} /> 
					<h3 className="ml-90 tt-uppercase sz-30 wg-200 lh-60 w-max-content c-blue-light"> {experience_title} </h3>
				</div>
				{experience.map((x, i) =>
			    	<div className="d-flex mb-18 mt-10"> 
					<div className="ta-center">
						<p className="mb-0 c-gray wg-100">{x.month}</p>
						<p className="mt-0 c-gray wg-100">{x.year}</p>
					</div>
					<div>
						<h4 className="ml-30 mb-0 tt-uppercase">{x.companyName}</h4>
						<p className="ml-30 mt-0 mb-0">{x.roleName}, {x.companyCity}</p>
						<p className="ml-30 mt-0 mb-0 c-gray">{x.description}</p>
					</div>
					</div>
			  	)}
			</div>
		)
	}
}

export default Experience;
