import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getSushi } from '../services/backend'

import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

    componentDidMount() {
      getSushi().then(data => this.props.dispatch({
        type: 'FETCHED_SUSHI',
        sushi: data
      }))
    }

    render() {
      return (
        <Fragment>
          <div className="belt">
            { this.props.sushi.map(x => <Sushi key={x.id} id={x.id} />) }
            <MoreButton />
          </div>
        </Fragment>
      )
    }
}

const mapStateToProps = ({ sushi }) => {
  return { sushi }
}

export default connect(mapStateToProps)(SushiContainer)
