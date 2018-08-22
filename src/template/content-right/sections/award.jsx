import React, { Component } from 'react'

import Icon from '../../icons/icons'

class Experience extends Component {
	render() {
		const data = this.props.data || []
		const title = data.title
		const month = data.month
		const year = data.year
		const awardName = data.awardName
		const projectName = data.projectName
		const city = data.city
		const description = data.description
		
		return (
			<section className="award">
				<Icon text={ title } bg="bg-icon-rg" icon="award" />
				<div className="award-item">
					<span className="date">{ month } { year }</span>
					<div className="content-award">
						<h2>{ projectName }</h2>
						<span className="university">{ awardName }, { city }.</span>
						<p>{ description }</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Experience