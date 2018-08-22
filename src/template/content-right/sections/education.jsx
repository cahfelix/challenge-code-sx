import React, { Component } from 'react'

import Icon from '../../icons/icons'

class Education extends Component {
	render() {
		const data = this.props.data || []
		const EducationTitle = data.title
		
		const renderRows = () => {
			const university = data.university

			if(university) {
				return university.map( (item, index) => (
					<div className="education-item" key={ index }>
						<span className="date">{ item.month } { item.year }</span>
						<div className="content-education">
							<h2>{ item.courseName }</h2>
							<span className="university">{ item.universityName }, { item.universityCity }</span>
							<p>{ item.description }</p>
						</div>
					</div>
				))
			}
		}

		return (
			<section className="education">
				<Icon text={EducationTitle} bg="bg-icon-rg" icon="education" />
				{renderRows()}
			</section>
		)
	}
}

export default Education