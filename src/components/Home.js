import React, { Component } from 'react';
import { ThemeContext } from '../App';

class Home extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {value => <h1>{value === 'Dark' ? 'black' : 'red'} Homepage</h1>}
        </ThemeContext.Consumer>
      </div>
    );
  }
}

export default Home;