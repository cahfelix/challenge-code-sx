import React, { Component } from 'react';

import iconProSkill from '../../assets/professional_skill/pro_skill.png'

class ProfessionalSkill extends Component {
	render() {

		const user_professional_skill = this.props.content.professionalSkill;
		const professional_skill_title = user_professional_skill.title;
		const tools = user_professional_skill.tools;

		return ( 
			<div className="pl-30 pr-30 pb-30 bg-white pt-20">
				<div className="info_profile br-10 w-65 h-65 bg-blue-light pst-relative mb-15"> 
					<img className="pst-absolute m-auto t-0 b-0 l-0 r-0" src={iconProSkill} /> 
					<h3 className="ml-90 tt-uppercase sz-30 wg-200 lh-60 w-max-content w_b-100 lh_b-35 c-blue-light"> {professional_skill_title} </h3>
				</div>
				{tools.map((x, i) =>
					<div className="d-table w-100"> 
						<p className="pb-10 d-table-cell w-200 tt-uppercase wg-200">{x.toolName}</p>
						<div className="w-100 bg-grey d-inline-block"> 
							<span style={{width: x.toolsSkill + '%'}} className="bg-blue-light h-12 d-block w-20"></span>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default ProfessionalSkill;