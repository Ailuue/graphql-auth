import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';

import currentUserQuery from '../../graphql/queries/CurrentUser';

export default WrappedComponent => {
  class RequireAuth extends Component {
    componentDidUpdate() {
      if (!this.props.data.loading && !this.props.data.user) {
        hashHistory.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return graphql(currentUserQuery)(RequireAuth);
};
