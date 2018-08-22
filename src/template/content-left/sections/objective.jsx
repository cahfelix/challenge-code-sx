import React, { Component } from 'react'

import Icon from '../../icons/icons'

class Objective extends Component {
	render() {
		const data = this.props.data || []
		const objectiveTitle = data.title
		const objectiveDescription = data.description

		return (
			<section className="objective">
				<Icon text={ objectiveTitle } icon="objective"/>
				<p>{ objectiveDescription }</p>
			</section>
		)
	}
}

export default Objective