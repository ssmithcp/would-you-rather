import React from 'react';
import { connect } from 'react-redux'

import LoadingBar from 'react-redux-loading'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Login from './Login'

import QuestionsContainer from './QuestionsContainer'
import FocusedQuestion from './FocusedQuestion'
import AddQuestion from './AddQuestion'
import LeaderBoard from './LeaderBoard'

import { handleInitialData } from '../actions/shared'

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <LoadingBar />
        <Nav />

        <div className='container my-1'>
          {this.props.loading === false && (
            this.props.authedUser === null
              ? <Login />
              : (<>
                  <Route path='/' exact component={ QuestionsContainer } />
                  <Route path='/questions/:id' component={ FocusedQuestion } />
                  <Route path='/add' component={ AddQuestion } />
                  <Route path='/leaderboard' component={ LeaderBoard } />
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
