import React, { Component } from 'react';
import { directive } from '@babel/types';
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div>
        <span>你点击了 {this.props.times} 次</span>
        <br />
        <button onClick={this.props.addOne.bind(this)}>点击这里！</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    times: state.times
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addOne: () => dispatch({ type: 'add', payload: 1 })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
