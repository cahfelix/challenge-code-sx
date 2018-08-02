import React, { Component } from 'react';

import iconEducation from '../../assets/education/education.png'

class Education extends Component {
	render() {

		const user_education = this.props.content.education;
		const education_title = user_education.title;
		const university = user_education.university;

		return (
			<div className="pl-30 pr-30 pb-30 bg-white pt-20">
				<div className="info_profile br-10 w-65 h-65 bg-blue-light pst-relative mb-15"> 
					<img className="pst-absolute m-auto t-0 b-0 l-0 r-0" src={iconEducation} /> 
					<h3 className="ml-90 tt-uppercase sz-30 wg-200 lh-60 w-max-content c-blue-light"> {education_title} </h3>
				</div>
				{university.map((x, i) =>
			    	<div className="d-flex mb-18 mt-10"> 
					<div className="ta-center">
						<p className="mb-0 c-gray wg-100">{x.month}</p>
						<p className="mt-0 c-gray wg-100">{x.year}</p>
					</div>
					<div>
						<h4 className="ml-30 mb-0 tt-uppercase">{x.courseName}</h4>
						<p className="ml-30 mt-0 mb-0">{x.universityName}, {x.universityCity}</p>
						<p className="ml-30 mt-0 mb-0 c-gray">{x.description}</p>
					</div>
					</div>
			  	)}
			</div>
		)
	}
}

export default Education;