import React, { Component } from 'react';

import iconPSkill from '../../assets/personal_skill/personal.png'

class PersonalSkill extends Component {
	render() {

		const user_personal_skill = this.props.content.personalSkill;
		const personal_skill_title = user_personal_skill.title;
		const score_management = user_personal_skill.management;
		const score_team_work = user_personal_skill.teamWork;
		const score_creative = user_personal_skill.creative;
		const score_communication = user_personal_skill.communication;

		return (
			<div className="pl-30 pr-30 pb-30">
				<div className="info_profile br-10 w-65 h-65 bg-grey-light pst-relative mb-15"> 
					<img className="pst-absolute m-auto t-0 b-0 l-0 r-0" src={iconPSkill} /> 
					<h3 className="ml-90 tt-uppercase sz-30 wg-200 lh-60 c-white w-max-content w_b-100 lh_b-35"> {personal_skill_title} </h3>
				</div>
				<div className="d-table w-100"> 
					<p className="pb-10 d-table-cell w-200 tt-uppercase c-white wg-200">management</p>
					<div className="w-100 bg-white d-inline-block"> 
						<span style={{width: score_management + '%'}} className="bg-grey h-12 d-block"></span>
					</div>
				</div>	
				<div className="d-table w-100"> 
					<p className="pb-10 d-table-cell w-200 tt-uppercase c-white wg-200">team work</p>
					<div className="w-100 bg-white d-inline-block"> 
						<span style={{width: score_team_work + '%'}} className="bg-grey h-12 d-block w-20"></span>
					</div>
				</div>
				<div className="d-table w-100"> 
					<p className="pb-10 d-table-cell w-200 tt-uppercase c-white wg-200">creative</p>
					<div className="w-100 bg-white d-inline-block"> 
						<span style={{width: score_creative + '%'}} className="bg-grey h-12 d-block w-20"></span>
					</div>
				</div>
				<div className="d-table w-100"> 
					<p className="pb-10 d-table-cell w-200 tt-uppercase c-white wg-200">communication</p>
					<div className="w-100 bg-white d-inline-block"> 
						<span style={{width: score_communication + '%'}} className="bg-grey h-12 d-block w-20"></span>
					</div>
				</div>
			</div>
		)
	}
}

export default PersonalSkill;