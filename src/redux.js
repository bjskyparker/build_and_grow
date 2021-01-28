import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

const rootElement = document.getElementById('root')

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    userList: state.users
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)