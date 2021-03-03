import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Forms from "./Forms";
import UnOrdList from "./UnOrdList";

export class Mains extends Component {
	state = {
		groceryList: [
			{
				id: uuidv4(),
				buy: "apples",
				finished: false,
			},
			{
				id: uuidv4(),
				buy: "pears",
				finished: false,
			},
		],
		inputVal: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();

		let newInputArr = [
			...this.state.groceryList,
			{ id: uuidv4(), buy: this.state.inputVal, finished: false },
		];

		this.setState({
			groceryList: newInputArr,
			inputVal: "",
		});
	};

	handleOnChange = (e) => {
		this.setState({
			inputVal: e.target.value,
		});
	};

	handleFinished = (e) => {
		const element = e.target;
		element.classList.toggle("crossed-line");
	};

	handleRIP = (id) => {
		let filterGroceryList = this.state.groceryList.filter(
			(item) => item.id !== id
		);
		this.setState({
			groceryList: filterGroceryList,
		});
	};

	render() {
		return (
			<div className="parent-container">
				<Forms
					groceryList={this.state.groceryList}
					handleSubmit={this.handleSubmit}
					handleOnChange={this.handleOnChange}
					inputVal={this.state.inputVal}
				/>
				<UnOrdList
					groceryList={this.state.groceryList}
					handleFinished={this.handleFinished}
					handleRIP={this.handleRIP}
				/>
			</div>
		);
	}
}

export default Mains;
