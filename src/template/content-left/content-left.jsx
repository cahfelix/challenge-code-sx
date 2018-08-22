import React from 'react'

import Main from './sections/main'
import Profile from './sections/profile'
import Objective from './sections/objective'
import PersonalSkill from './sections/personal-skill'
import Contact from './sections/contact'

export default props => {
	const data = props.data || []

	return (
		<div className="content-left">
			<div className="content">
				<Main name={ data.name } thumb={ data.thumb } profession={ data.profession } />
				<Profile data={ data.profile } />
				<Objective data={ data.objective } />
				<PersonalSkill data={ data.personalSkill } />
				<Contact data={ data.contactMe } />
			</div>
		</div>
	)
}