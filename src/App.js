import React, { Component } from 'react';
import { connect } from "react-redux";

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
    times: state.times
  }
}
const addOne1sLater = () => {
  return { type: 'preAddOne', payload: 3 }
}

export default connect(mapStateToProps, {addOne1sLater})(App)
