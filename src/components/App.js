import React from 'react';
import { connect } from 'react-redux'

import LoadingBar from 'react-redux-loading'

import Nav from './Nav'
import Login from './Login'
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
        <LoadingBar />

        {this.props.loading === false && (
          this.props.authedUser === null
            ? <Login />
            : <div></div>
        )}

      </React.Fragment>
    )
  }
}

function mapStateToProps({ loading, authedUser }) {
  return {
    loading,
    authedUser,
  }
}

export default connect(mapStateToProps)(App)
