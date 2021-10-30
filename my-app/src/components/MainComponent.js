
import { Component } from 'react'
import { Navbar, NavbarBrand } from 'react-bootstrap';
import Menu from './MenuComponents';
import { DISHES } from '../shared/Dishes'
import DishDetail from './DishDetail';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            selectedDish: null

        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }


    render() {
        return (
            <div>
                <Navbar bg="primary" >
                    <div className="container">
                        <NavbarBrand href="/"> xxxxx</NavbarBrand>
                    </div>
                </Navbar>

                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter( (dish)=> dish.id === this.state.selectedDish )[0] } />
            </div>
        )
    }
}

export default Main;
