import React from "react";
import { Link } from "react-router-dom";

const API_KEY = "d05e5019b4dc4284a7531d46bdcab182";

class Recipe extends React.Component {
	state = {
		activeRecipe: []
	};
	componentDidMount = async () => {
		const title = this.props.location.state.recipe;
		const req = await fetch(
			`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`
		);
		const res = await req.json();
		console.log(res);
		this.setState({ activeRecipe: res.recipes[0] });
		console.log(this.state.activeRecipe);
	};

	render() {
		const recipe = this.state.activeRecipe;
		return (
			<div className="container">
				{this.state.activeRecipe.length !== 0 && (
					<div className="active-recipe">
						<img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
						<h3 className="active-recipe__title">{recipe.title}</h3>
						<h4 className="active-recipe__publisher">
							Publisher: <span>{recipe.publisher}</span>
						</h4>
						<p className="active-recipe__website">
							Website:
							<span>
								<a href={recipe.publisher_url}>{recipe.publisher_url}</a>
							</span>
						</p>
						<button className="active-recipe__button">
							<Link to="/">Go Home</Link>
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default Recipe;
