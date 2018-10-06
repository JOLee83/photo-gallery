import React, { Component } from 'react'
import CategoryList from './CategoryList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PhotoList from './PhotoList'
import PhotoDetail from './PhotoDetail'
class App extends Component {
	render() {
		return (
			<Router>
				<>
					<header>
						<h1>Things I Like</h1>
						<h3>A Photo Gallery by Justin Lee</h3>
					</header>
					<section>
						<Switch>
							<Route exact path="/" component={CategoryList} />
							<Route exact path="/:category" component={PhotoList} />
							<Route path="/:category/:index" component={PhotoDetail} />
						</Switch>
					</section>
				</>
			</Router>
		)
	}
}

export default App
