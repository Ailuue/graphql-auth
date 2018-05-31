import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import Auth from './Auth';
import mutation from '../graphql/mutations/Login';
import query from '../graphql/queries/CurrentUser';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data.user && this.props.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit = ({ email, password }) => {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [{ query }]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(e => e.message);
        this.setState({ errors });
      });
  };

  render() {
    return (
      <div>
        <h3>Login</h3>
        <Auth errors={this.state.errors} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default graphql(mutation)(graphql(query)(Login));
