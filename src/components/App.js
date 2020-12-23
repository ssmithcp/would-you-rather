import React from 'react';
import { connect } from 'react-redux'

import Nav from './Nav'
import { handleInitialData } from '../actions/shared'

import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
      </React.Fragment>
    )
  }
}

export default connect()(App)
