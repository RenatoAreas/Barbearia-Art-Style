import React from 'react';
import {Row, Navbar} from 'react-materialize';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{

    render(){
        return(
            <Row>
                <Navbar className="brown darken-3">
                    <li><NavLink to="/">Pagina inicial</NavLink></li>
                    <li><NavLink to="/cadastro-cliente">Crie a sua Conta de Cliente</NavLink></li>
                </Navbar>
            </Row>
        )
    }
}

export default Header;