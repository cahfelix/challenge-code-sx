import React, { Component } from 'react'

import Icon from '../../icons/icons'

class Main extends Component {
	render() {
		const mainImage = 'https://thumbs.dreamstime.com/b/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-illustration-58249506.jpg'
		const mainName = this.props.name
		const mainProfession = this.props.profession

		return (
			<section className="main">
				<figure>
					<img src={ mainImage } alt="Foto de Perfil" />
				</figure>
				<h1>{ mainName }</h1>
				<h2>{ mainProfession }</h2>
			</section>
		)
	}
}

export default Main