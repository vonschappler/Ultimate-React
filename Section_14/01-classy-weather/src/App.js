import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: '' };
    this.fetchWeather = this.fetchWeather.bind(this)
  }

  fetchWeather() {
    console.log('Loading data...')
  }

  render() {
    return (
      <div className='app'>
        <h1>Classy Weather</h1>
        <div>
          <input
            type='text'
            placeholder='Seach for a location...'
            onChange={(e) => this.setState({ location: e.target.value })}
            value={this.state.location}
          />
        </div>
        <button onClick={this.fetchWeather}>Get weather</button>
      </div>
    );
  }
}

export default App;
