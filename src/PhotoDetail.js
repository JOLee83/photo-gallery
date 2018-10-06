import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Content from './Content.json'

class PhotoDetail extends Component {
	render() {
		const category = this.props.match.params.category
		const index = this.props.match.params.index
		return (
			<>
				<nav>
					<ul>
						<li>
							<Link to="/">★ Home</Link>
						</li>
						<li>
							<h4>/</h4>
						</li>
						<li>
							<Link to={`/${category}`}>{Content[category].title}</Link>
						</li>
						<li>
							<h4>/</h4>
						</li>
						<li>
							<h4>{Content[category].photos[index].title}</h4>
						</li>
					</ul>
				</nav>
				<article>
					<h1>{Content[category].photos[index].title}</h1>
					<img src={Content[category].photos[index].imageURL} />
					<a href={Content[category].photos[index].sourceURL}>Source</a>
				</article>
			</>
		)
	}
}

export default PhotoDetail
