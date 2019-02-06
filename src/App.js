import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <div className="wrapper">
          <div className="header">
            <h1>
              Currency converter online
            </h1>
          </div>
          <div className="main">
            <p>Please choose your currency</p>
            <select>
              <option>
                Rub
              </option>
            </select>
          </div>
        </div>
    );
  }
}

export default App;
