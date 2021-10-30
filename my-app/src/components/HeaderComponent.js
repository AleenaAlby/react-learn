import React, { Component } from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <>
                <Navbar bg="primary" >
                    <div className="container">
                        <NavbarBrand href="/"> xxxxx</NavbarBrand>
                    </div>
                </Navbar>
                <div class="mt-4 p-5 bg-secondary text-white rounded">
                    <div className="contianer">
                        <div className="row row-Header">
                            <div className="col-12 col-sm-6">
                                <h1>XXXX</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi rem asperiores quasi iure adipisci accusantium dolore ullam sit illum amet, corrupti doloribus mollitia molestias perferendis quis officiis quo temporibus perspiciatis.</p>
                            </div>

                        </div>
                    </div>
                    </div>

            </>
        )
    }
}

export default Header 