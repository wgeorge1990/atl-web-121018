import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate">
        {
          props.eaten.includes(props.id) ?
            null
          :
            <img src={props.img_url} width="100%"
             onClick={() => props.eatSushi(props.id, props.price)} />
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
  let sushi = state.sushi.menu.find(x => x.id === ownProps.id)
  return { ...sushi, eaten: state.eaten.list }
}

const mapDispatchToProps = (dispatch) => {
  return {
    eatSushi: (id, price) => dispatch({ type: 'EAT_SUSHI', id, price })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sushi)
