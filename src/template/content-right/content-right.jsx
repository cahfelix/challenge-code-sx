import React from 'react'

import Education from './sections/education'
import Experience from './sections/experience'
import ProfessionalSkills from './sections/professional-skills'
import Award from './sections/award'

export default props => {
	const data = props.data || []

	return (
		<div className="content-right">
			<div className="content">
				<Education data={ data.education } />
				<Experience data={ data.experience } />
				<ProfessionalSkills data={ data.professionalSkill } />
				<Award data={ data.award } />
			</div>
		</div>
	)
}