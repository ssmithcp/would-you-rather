import React from 'react';
import { connect } from 'react-redux'

import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Login from './Login'
import QuestionsList from './QuestionsList'

import { handleInitialData } from '../actions/shared'

import './App.css';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Nav />
        <LoadingBar />

        {this.props.loading === false && (
          this.props.authedUser === null
            ? <Login />
            : (<>
                <Route path='/' exact component={ QuestionsList } />
               </>)
        )}

      </Router>
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
