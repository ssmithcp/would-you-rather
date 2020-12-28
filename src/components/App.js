import React from 'react';
import { connect } from 'react-redux'

import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Login from './Login'

import QuestionsContainer from './QuestionsContainer'
import FocusedQuestion from './FocusedQuestion'
import CreateQuestion from './CreateQuestion'
import LeaderBoard from './LeaderBoard'
import NotFoundPage from './NotFoundPage'

import { handleInitialData } from '../actions/shared'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData()
  }

  render() {
    return (
      <Router>
        <LoadingBar />
        <Nav />

        <div className='container my-4'>
          {this.props.loading === false && (
            this.props.authedUser === null
              ? <Login />
              : (<Switch>
                  <Route path='/' exact component={ QuestionsContainer } />
                  <Route path='/questions/:id' component={ FocusedQuestion } />
                  <Route path='/add' component={ CreateQuestion } />
                  <Route path='/leaderboard' component={ LeaderBoard } />
                  <Route component={ NotFoundPage } />
                </Switch>)
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ loading, authedUserId, users }) {
  return {
    loading,
    authedUser: users[authedUserId] || null,
  }
}

export default connect(mapStateToProps, { handleInitialData })(App)
