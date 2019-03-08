import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={/* Give me a callback! */ null}>
        {
          /* Tell me if this sushi has been eaten! */
          false ?
            null
          :
            <img src={props.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log("ownProps are:", ownProps)
  let sushi = state.sushi.find(x => x.id === ownProps.id)
  return { ...sushi }
}

export default connect(mapStateToProps)(Sushi)
