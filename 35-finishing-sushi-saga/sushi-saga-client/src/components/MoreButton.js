import React from 'react'
import { connect } from 'react-redux'

const MoreButton = (props) => {
    return <button onClick={props.nextSushi}>
            More sushi!
          </button>
}

const mapDispatchToProps = (dispatch) => {
  return {
    nextSushi: () => dispatch({ type: "MORE_SUSHI" })
  }
}

export default connect(null, mapDispatchToProps)(MoreButton)
