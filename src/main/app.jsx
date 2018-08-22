import React, { Component } from 'react'
import axios from 'axios'

import RequestApi  from './requestApi.jsx'

class App extends Component {
	render() {
		return (
			<RequestApi />
		)
	}
}

export default App