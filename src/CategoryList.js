import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Content from './Content.json'

class CategoryList extends Component {
	render() {
		return (
			<>
				<nav>
					<ul>
						<li>
							<h4>
								<i className="fas fa-home" /> Home
							</h4>
						</li>
					</ul>
				</nav>
				<main>
					{Object.keys(Content).map(category => {
						return (
							<aside>
								<section>
									<h3>
										<Link to={`/${category}`}>{Content[category].title}</Link>
									</h3>
									<p>{Content[category].description}</p>
								</section>
								<img src={Content[category].photos[0].imageURL} />
							</aside>
						)
					})}
				</main>
			</>
		)
	}
}

export default CategoryList
