import React, { Component } from 'react'

import Icon from '../../icons/icons'

class PersonalSkills extends Component {
	render() {
		const data = this.props.data || []
		const personalTitle = data.title

		return (
			<section className="personal-skill">
				<Icon text={ personalTitle } bg="bg-icon-lf" icon="personal"/>
				<div className="skill-item">
					<span>Management</span>
					<div className={ "graph-lf graph-lf-" + data.management }></div>
				</div>
				<div className="skill-item">
					<span>Team/Work</span>
					<div className={ "graph-lf graph-lf-" + data.teamWork }></div>
				</div>
				<div className="skill-item">
					<span>Creative</span>
					<div className={ "graph-lf graph-lf-" + data.creative }></div>
				</div>
				<div className="skill-item">
					<span>Comunication</span>
					<div className={ "graph-lf graph-lf-" + data.communication }></div>
				</div>
			</section>
		)
	}
}

export default PersonalSkills