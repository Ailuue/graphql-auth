import React, { Component } from 'react';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit} className="col s4">
          <div className="input-field">
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
              type="text"
            />
          </div>
          <div className="input-field">
            <input
              placeholder="Password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </div>
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;
