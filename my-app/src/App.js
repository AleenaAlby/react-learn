
import { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand } from 'react-bootstrap';
import Menu from './components/MenuComponents';
import {DISHES} from './shared/Dishes'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes : DISHES
    }

  }
  render() {
    return (
      <div>
        <Navbar bg="primary" >
          <div className="container">
            <NavbarBrand href="/"> xxxxx</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes}/>
      </div>
    )
  }
}

export default App;
