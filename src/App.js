import './App.css';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Settings from './settings/Settings'
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem('gs-token'),
    };
  }

  setToken = (new_token) => {
    this.setState({ token: new_token })
  }

  // componentDidMount() {
  //   let config = {
  //     headers: {
  //       'Authorization': 'Bearer ' + this.state.token
  //     }
  //   };
    
  //   axios.get('https://127.0.0.1:5000/validate_and_refresh', config)
  //   .then(response => {
  //     localStorage.setItem('gs-token', response.data.access_token);
  //     this.setToken(response.data.access_token);
  //   })
  //   .catch(error => {
  //     this.setToken(null);
  //   });
  // }

  render() {
    if (!this.state.token) {
      return <LoginPage setToken={ this.setToken }/>
    }

    return (
      <div className="App">
        <BrowserRouter forceRefresh={true}>
          <Switch>
            <Route exact path="/">
              <Home token={ this.state.token }/>
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
