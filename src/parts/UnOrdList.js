import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../common/Button"

export class UnOrdList extends Component {
	render() {
		return (
			<div>
				<ul>
					{this.props.groceryList.map((item) => {
						return (
							<div key={item.id}>
                <li>{item.buy}</li>
                <Button
                  propsClassName={"btn btn-warning button-style"}
                  propsOnClick={() => this.props.handleFinished(item.id)}
                  propsName={"Finished"}
                />
                <Button
                  propsClassName={"btn btn=danger"}
                  propsOnClick={() => this.props.handleRIP(item.id)}
                  propsName={"RIP"}
                />
                <Button />
								{/* <button
									onClick={() => this.handleFinished(item.id)}
									className="btn btn-warning button-style"
								>
									Finished
								</button>
								<button
									onClick={() => this.handleRIP(item.id)}
									className="btn btn=danger"
								>
									RIP
								</button> */}
							</div>
						);
					})}
				</ul>
			</div>
		);
	}
}

UnOrdList.propTypes = {
  groceryList: PropTypes.array.isRequired,
	handleFinished: PropTypes.func.isRequired,
	handleRIP: PropTypes.func.isRequired,
}

export default UnOrdList;
