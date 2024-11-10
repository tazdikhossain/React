import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';

// Component
const Navigation = () =>{
    return(
        <div>
            <Navbar dark color="dark">
                <div className="container"></div>
                <NavbarBrand href='/'>Spicy Food Restaurent</NavbarBrand>
            </Navbar>
        </div>
    );
}


export default Navigation;