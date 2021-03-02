import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";

export class App extends Component {
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
    e.preventDefault()

    let newInputArr = [
      ...this.state.groceryList,
      { id: uuidv4(), buy: this.state.inputVal, finished: false },
    ];

    this.setState({
      groceryList: newInputArr,
      inputVal: "",
    })
  }

  handleOnChange = (e) => {
    this.setState({
      inputVal: e.target.value
    })
  }

  handleFinished = (e) => {
    const element = e.target;
    element.classList.toggle("crossed-line");
  }

  handleRIP = (id) => {
    let filterGroceryList = this.state.groceryList.filter((item) => item.id !== id);
    this.setState({
      groceryList: filterGroceryList,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Get Some</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Type Some" 
              name="inputVal"
              onChange={this.handleOnChange}
              value={this.inputVal}
            />
          </div>
          <button
            className="btn btn-secondary mb-3"
            type="submit"
          >
            Enter
          </button>
        </form>
        <div>
          <ul>
            {this.state.groceryList.map((item) => {
              return (
            <div key={item.id}>
              <li>
              {item.buy}
              </li>
                  <button
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
                  </button>
                </div>
              )    
            })}
          </ul>
        </div>
      </div>
    );
  };
};

export default App;
