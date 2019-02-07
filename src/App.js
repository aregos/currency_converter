import React, { Component } from 'react';
import getCurrencies from './currenciesHelper';

class App extends Component {

    state = {
      chosenCurrency : null,
      currencyList : null,
    };

    componentDidMount() {

    }

    currencyChooser = () => {
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
        )
    };

  render() {
      return this.currencyChooser();
  }
}

export default App;
