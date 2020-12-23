import React from 'react';
import { connect } from 'react-redux'

import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Login from './Login'
import QuestionsContainer from './QuestionsContainer'

import { handleInitialData } from '../actions/shared'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Nav />
        <LoadingBar />

        <div className='container my-1'>
          {this.props.loading === false && (
            this.props.authedUser === null
              ? <Login />
              : (<>
                  <Route path='/' exact component={ QuestionsContainer } />
                </>)
          )}
        </div>
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
