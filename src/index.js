import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Components/Table';
import Form from './Components/Form';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import About from './Routes/About.js';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            characters: [],
        }
    }

    componentDidMount(){

    }

    removeCharacter = (index) => {
        const {characters} = this.state
        this.setState({
            characters: characters.filter((character, i) => {
            return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        let aux = this.state.characters;
        aux.push(character);
        this.setState({characters: aux});
    }

    render(){
        const {characters} = this.state;
        return (
/*            <div className="App">

                <h1>Hello, React!</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>*/
                <Router>
      <div>
       <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Button>Teste</Button>
            </li>
          </ul>
        </nav>
       </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
              <div className="container">
                <h1>Hello, React!</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
              </div>
          </Route>
        </Switch>
      </div>
    </Router>

        );
    }
}


function Users() {
  return(<div className="container"><h2>Users</h2></div>);
}

ReactDOM.render(<App/>, document.getElementById('root'));
