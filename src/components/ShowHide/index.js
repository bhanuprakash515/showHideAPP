import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    firstNameText: false,
    lastNameText: false,
  }

  onFirstName = () => {
    this.setState(prevState => ({
      firstNameText: !prevState.firstNameText,
    }))
  }

  onLastName = () => {
    this.setState(prevState => ({
      lastNameText: !prevState.lastNameText,
    }))
  }

  render() {
    const {firstNameText, lastNameText} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading"> Show/Hide </h1>
          <div className="card-container">
            <div className="details-card">
              <button className="btn" type="button" onClick={this.onFirstName}>
                Show/Hide Firstname
              </button>
              {firstNameText ? (
                <div className="para-card">
                  <p className="para">Joe</p>
                </div>
              ) : null}
            </div>
            <div className="details-card">
              <button className="btn" type="button" onClick={this.onLastName}>
                Show/Hide Lastname
              </button>
              {lastNameText ? (
                <div className="para-card">
                  <p className="para">Jonas</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
