import React, { Component } from 'react';

export class App extends Component {
  state = {
    groceryList: [
      {
        buy: "apples",
      },
    ],
    inputVal: "",
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    console.log(16)
  }

  handleOnChange = (e) => {
    this.setState({
      inputVal: e.target.value
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
      </div>
    );
  };
};

export default App;
