import React, { Component } from 'react'

import Icon from '../../icons/icons'

class ProfessionalSkill extends Component {
	render() {
		const data = this.props.data || []
		const ProfessionalTitle = data.title

		const renderRows = () => {
			const tools = data.tools

			if(tools) {
				return tools.map( (item, index) => (
					<div className="skill-item" key={ index }>
						<span>{ item.toolName }</span>
						<div className={ "graph-rg graph-rg-" + item.toolsSkill }></div>
					</div>
				))
			}
		}

		return (
			<section className="pro-skill">
				<Icon text={ ProfessionalTitle } bg="bg-icon-rg" icon="professional" />
				{renderRows()}
			</section>
		)
	}
}

export default ProfessionalSkill