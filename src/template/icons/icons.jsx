import React from 'react'

export default props => {

	const iconDir = `images/${props.icon}.png`

	return (
		<div className="box-title">
			<div className="box-icon">
				<img src={iconDir} />
			</div>
			<h2 className="title">{props.text}</h2>
		</div>
	)
}