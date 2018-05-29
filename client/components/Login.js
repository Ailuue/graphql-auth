import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Signup from './Signup';
import mutation from '../graphql/mutations/Login';
import query from '../graphql/queries/CurrentUser';

class Login extends Component {
  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    });
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <Signup onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default graphql(mutation)(graphql(query)(Login));
