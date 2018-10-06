import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class PhotoList extends Component {
	render() {
		const category = this.props.match.params.category
		return (
			<>
				<nav>
					<ul>
						<li>
							<Link to="/">
								<i className="fas fa-home" /> Home
							</Link>
						</li>
						<li className="hide">
							<h4>/</h4>
						</li>
						<li>
							<h4>{Content[category].title}</h4>
						</li>
					</ul>
				</nav>

				<h1>{Content[category].title}</h1>
				<h2>{Content[category].description}</h2>
				<article>
					{Content[category].photos.map((photo, index) => {
						return (
							<aside key={photo.title}>
								<img className="list" src={photo.imageURL} />
								<Link to={`/${category}/${index}`}>{photo.title}</Link>
							</aside>
						)
					})}
				</article>
			</>
		)
	}
}

export default PhotoList
