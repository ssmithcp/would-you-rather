import React from 'react'
import { connect } from 'react-redux'

import Button from 'react-bootstrap/Button';

class AddQuestion extends React.Component {
  state = {
    optionOne: null,
    optionTwo: null,
  }
  render() {
    return (
      <form>
        <h3>Create a question</h3>
        <h4>Would you rather</h4>
        <div>
          <input
            type='text'
            placeholder='First option'
            onChange={ e =>
              this.setState({
                optionOne: e.value
              })
            }
          />
        </div>
        <p>OR</p>
        <div>
          <input
            type='text'
            placeholder='Second option'
            onChange={
              e =>
                this.setState({
                  optionTwo: e.value
                })
            }
          />
        </div>
        <Button
            variant="outline-dark"
            disabled={ this.state.optionOne === null || this.state.optionTwo == null }
            onClick={ () => {} }
          >
            Add Question!
        </Button>
      </form>
    )
  }
}

export default connect()(AddQuestion)