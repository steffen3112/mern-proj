import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export default class AppNavbar extends Component {

    //~ Constructor
    //--------------------------------------------------------------------------------------------------------------------------
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    //~ Methods
    //--------------------------------------------------------------------------------------------------------------------------

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    //~ Render func
    //--------------------------------------------------------------------------------------------------------------------------

    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand><Link activeClassName='is-active' to="/Home">Home</Link></NavbarBrand>
                        <NavbarBrand><Link activeClassName='is-active' to="/ShoppingList">Shopping List</Link></NavbarBrand>
                        <NavbarBrand><Link activeClassName='is-active' to="/Basket">Basket</Link></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar >
                                <NavItem>
                                    <NavLink href="https://github.com/steffen3112">
                                        Github
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://twitter.com">
                                    Twitter
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}