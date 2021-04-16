import React from 'react';
import {Row, Card} from 'react-materialize';
import * as services from '../services/barbeariaServices'

class Profile extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            foto:'',
            nome:'',
            descricao:'',
            endereco:'',
            telefoneContato:'',
            emailContato:'',

        };
    }

    componentDidMount(){
        services.getDadosBarbearia()
        .then(
            data =>{
                this.setState({...data});
            }
        )
        .catch(
            e =>{
                console.log(e);
            }
        )
    }

    render(){
        return(
            <Card>
                <Row>
                    <img src={services.getApiUrl() + this.state.foto}
                    className="responsive-img"/>
                </Row>
                <Row>
                    <h3>{this.state.nome}</h3>
                </Row>
                <Row>
                    <h5>{this.state.descricao}</h5>
                </Row>
                <Row>
                <h6><strong>{this.state.endereco}</strong></h6>
                </Row>
                <Row>
                <h6><strong>{this.state.telefoneContato}</strong></h6>
                </Row>
                <Row>
                <h6><strong>{this.state.emailContato}</strong></h6>
                </Row>
            </Card>
        )
    }
}

export default Profile;