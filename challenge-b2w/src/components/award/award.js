import React, { Component } from 'react';

import iconAward from '../../assets/award/award.png'

class Award extends Component {
	render() {

		const user_award = this.props.content.award;
		const award_title = user_award.title;
		const month = user_award.month;
		const year = user_award.year;
		const award_name = user_award.awardName;
		const project_name = user_award.projectName;
		const city = user_award.city;
		const description = user_award.description;


		return (
			<div className="pl-30 pr-30 pb-30 bg-white pt-20">
				<div className="info_profile br-10 w-65 h-65 bg-blue-light pst-relative mb-15"> 
					<img className="pst-absolute m-auto t-0 b-0 l-0 r-0" src={iconAward} /> 
					<h3 className="ml-90 tt-uppercase sz-30 wg-200 lh-60 w-max-content c-blue-light"> {award_title} </h3>
				</div>
				<div className="d-flex mb-18"> 
					<div className="ta-center">
						<p className="mt-0 mb-0 c-gray wg-100">{month}</p>
						<p className="mt-0 c-gray wg-100">{year}</p>
					</div>
					<div>
						<h4 className="ml-30 mt-0 mb-0">{award_name}</h4>
						<p className="ml-30 mt-0 mb-0">{project_name}, {city}</p>
						<p className="ml-30 mt-0 mb-0 c-gray">{description}</p>
					</div>
				</div>
			</div>
		)
	}
}

export default Award;
