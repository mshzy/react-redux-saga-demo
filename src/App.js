import React, { Component } from 'react';
import { connect } from "react-redux";
import { addOne1sLater } from './action/actions'

class App extends Component {
  render() {
    return (
      <div>
        <span>你点击了 {this.props.times} 次</span>
        <br />
        <button onClick={this.props.addOne1sLater.bind(this)}>点击这里！</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { addOne1sLater })(App)
