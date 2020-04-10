import React, {Component} from 'react';
import Trips from './components/myTrips';

class App extends Component {

  state = {
    trips: []
  }

  componentDidMount() {
    const url = "http://127.0.0.1:8080/trips";


    fetch(url, {
      method: 'GET',
      headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'},
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      this.setState({ trips: data })
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  render () {
    return (
      <Trips trips={this.state.trips} />
    );
  }
}

export default App;
