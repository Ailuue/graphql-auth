import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../graphql/queries/CurrentUser';

class Header extends Component {
  render() {
    console.log(this.props.data);
    return <div>Header</div>;
  }
}

export default graphql(query)(Header);
