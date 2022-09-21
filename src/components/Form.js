import React from "react";

const Form = (props) => (
	<form onSubmit={props.getRecipe}>
		<label>
			<input type="text" name="name" />
		</label>
		<input className="form__button" type="submit" value="Submit" />
	</form>
);

export default Form;
