import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  incrementDecrement = (value) => {
    this.setState({ count: value });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-8 text-center">
              <div className="card">
                <div className="card-header">
                  <h1>Simple Counter</h1>
                </div>
                <div className="card-body">
                  <h1>{this.state.count}</h1>
                </div>
                <div className="card-footer">
                  <button
                    onClick={() =>
                      this.incrementDecrement(this.state.count + 1)
                    }
                    className="btn btn-success"
                  >
                    Increment
                  </button>
                  <button className="btn btn-primary m-2" onClick={this.reset}>
                    Reset
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      this.incrementDecrement(this.state.count - 1)
                    }
                  >
                    Decrement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
