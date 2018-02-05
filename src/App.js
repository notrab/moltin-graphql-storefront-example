import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { data: { error, loading, allProducts } } = this.props;

    if (loading) return <p>Loading...</p>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        {allProducts.map(product => <li key={product.id}>{product.name}</li>)}
      </div>
    );
  }
}

const PRODUCT_QUERY = gql`
  query getAllProducts {
    allProducts {
      id
      name
      description
    }
  }
`;

const PageWithData = graphql(PRODUCT_QUERY)(App);

export default PageWithData;
