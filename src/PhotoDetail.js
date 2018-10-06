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
							<Link to="/">
								<i className="fas fa-home" /> Home
							</Link>
						</li>
						<li>
							<h4 className="hide">/</h4>
						</li>
						<li>
							<Link to={`/${category}`}>{Content[category].title}</Link>
						</li>
						<li className="hide">
							<h4>/</h4>
						</li>
						<li>
							<h4>{Content[category].photos[index].title}</h4>
						</li>
					</ul>
				</nav>
				<section className="pic">
					<h1 className="title">{Content[category].photos[index].title}</h1>
					<img
						className="detailpic"
						src={Content[category].photos[index].imageURL}
					/>
					<a href={Content[category].photos[index].sourceURL}>Source</a>
				</section>
			</>
		)
	}
}

export default PhotoDetail
