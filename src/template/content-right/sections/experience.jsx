import React, { Component } from 'react'

import Icon from '../../icons/icons'

class Experience extends Component {
	render() {
		const data = this.props.data || []
		const experienceTitle = data.title
		
		const renderRows = () => {
			const company = data.company
			if(company) {
				return company.map( (item, index) => (
					<div className="experience-item" key={ index }>
						<span className="date">{ item.month } { item.year }</span>
						<div className="content-experience">
							<h2>{ item.roleName }</h2>
							<span className="university">{ item.companyName }, { item.companyCity }.</span>
							<p>{ item.description }</p>
						</div>
					</div>
				))
			}
		}

		return (
			<section className="experience">
				<Icon text={ experienceTitle } bg="bg-icon-rg" icon="experience" />
				{renderRows()}
			</section>
		)
	}
}

export default Experience