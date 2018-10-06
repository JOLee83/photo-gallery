import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class PhotoList extends Component {
	render() {
		console.log(this.props)
		const category = this.props.match.params.category
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
							<h4>{Content[category].title}</h4>
						</li>
					</ul>
				</nav>
				<section>
					<h1>{Content[category].title}</h1>
					<h2>{Content[category].description}</h2>
					{Content[category].photos.map((photo, index) => {
						return (
							<article>
								<img src={photo.imageURL} />
								<Link to={`/${category}/${index}`}>{photo.title}</Link>
							</article>
						)
					})}
				</section>
			</>
		)
	}
}

export default PhotoList
