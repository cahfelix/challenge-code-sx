import React, { Component } from 'react'
import axios from 'axios'

import ContentLeft  from '../template/content-left/content-left'
import ContentRight from '../template/content-right/content-right'

const URL = "http://www.mocky.io/v2/57dfec211000009020598073"

class RequestApi extends Component {

	constructor(props) {
		super(props)

		this.state = { data: [] }
	}

	componentDidMount() {
	    axios.get(`${URL}`)
        .then(res => {
            this.setState({ ...this.state, data: res.data });
        })
	}

	render() {
		return (
			<main className="container">
				<ContentLeft data={this.state.data} />
				<ContentRight data={this.state.data} />
			</main>
		)
	}
}

export default RequestApi