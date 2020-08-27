import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Components/Table';
import Form from './Components/Form';
import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import About from './Routes/About.js';
import {Nav, Navbar, NavDropdown, FormControl} from 'react-bootstrap';
import  Footer from './Components/Footer';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            characters: [],
        }
    }

    componentDidMount(){
      this.getStaff();
    }

    removeCharacter = (index) => {
        const {characters} = this.state
        this.deleteStaff(characters[index].id);
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
        this.createStaff(character);
    }

    getStaff(){
      fetch('http://localhost:4100/funcionarios',{
          method: 'GET',
          headers: {'Content-Type': 'Access-Control-Allow-Origin'},
        }).then(resp => resp.json())
        .then(resp => {

          this.setState({characters: resp.map((e)=> {
              return {id: e._id, name: e.name, job: e.job}
            })
          })
        }).catch(err => {
          console.log(err);
        })
    }


    createStaff(character){
      fetch('http://localhost:4100/funcionarios',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(character)
        }).then(resp => resp.json())
        .then(resp => {
          console.log(resp);
        }).catch(err => {
          console.log(err);
        })
    }

    deleteStaff(id){
      fetch('http://localhost:4100/funcionarios/'+id,{
          method: 'delete',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }).then(resp => resp.json())
        .then(resp => {
          console.log(resp);
        }).catch(err => {
          console.log(err);
        })
    }

    render(){
        const {characters} = this.state;
        return (
          /*<div className="App">
                <h1>Hello, React!</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
            </div>
          */
                <Router>
      <div>
       <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">TODOAPP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/users">Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
                <h1 style={{textAlign: 'center'}}>Hello, React!</h1>
                <Table characterData={characters} removeCharacter={this.removeCharacter}/>
                <Form handleSubmit={this.handleSubmit}/>
                <Footer/>

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
