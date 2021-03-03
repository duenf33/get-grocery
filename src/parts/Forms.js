import React, { Component } from "react";
import PropTypes from "prop-types"

export class Forms extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit}>
					<div className="mb-3">
						<label htmlFor="exampleFormControlInput1" className="form-label">
							Get Some
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Type Some"
							name="inputVal"
							onChange={this.props.handleOnChange}
							value={this.props.inputVal}
						/>
					</div>
					<button className="btn btn-secondary mb-3" type="submit">
						Enter
					</button>
				</form>
			</div>
		);
	}
}

Forms.propTypes = {
	groceryList: PropTypes.array.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	inputVal: PropTypes.string.isRequired,
};

export default Forms;
