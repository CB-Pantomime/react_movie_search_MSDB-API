
import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css'

class Main extends React.Component {
  render() {
    return (
      <h1>Movie Search App</h1>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));