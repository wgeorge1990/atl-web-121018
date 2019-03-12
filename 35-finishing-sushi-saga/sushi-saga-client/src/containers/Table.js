import React, { Fragment } from 'react'
import { connect } from 'react-redux';

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates([])
          }
        </div>
      </div>
    </Fragment>
  )
}

let mapStateToProps = (state) => {
  return { budget: state.budget }
}

// const propAdder = connect(mapStateToProps)
//
// console.log(Table)
// console.log(propAdder(Table))

export default connect(mapStateToProps)(Table);
