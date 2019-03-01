import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { getDogs } from '../services/Backend';

import CheckLogin from '../components/CheckLogin';
import DogList from './DogList'
import DogDetail from './DogDetail'
import DogForm from './DogForm'

class DogContainer extends React.Component {

  state = {
      dogs: []
  }

  componentDidMount() {
    getDogs().then(json => this.setState({ dogs: json }))
  }

  addDog = (dog) => {
    let newDogList = this.state.dogs.concat(dog)
    this.setState({ dogs: newDogList })
  }

  render = () => {
    return (
      <div className="ui grid container">
        <DogList
          width="six"
          dogs={this.state.dogs}
        />
        <Switch>
          <Route path="/dogs/new" component={() => {
            let form = <DogForm addDog={this.addDog} />
            return <CheckLogin component={form} />
          }} />
          <Route path="/dogs/:id" component={(props) => {
            let dogId = parseInt(props.match.params.id)
            let currentDog = this.state.dogs.find(d => d.id === dogId)
            return currentDog ? <DogDetail dog={currentDog} /> : null
          }} />
        </Switch>
      </div>
    )
  }
}

export default DogContainer;
