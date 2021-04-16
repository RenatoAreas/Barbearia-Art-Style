import React from 'react';
import {Card, Col, Row} from 'react-materialize';
import * as services from '../services/barbeariaServices'

class Products extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount(){
        services.getDadosServicos()
        .then(
            data =>{
                this.setState({ products: data})
            }
        )
        .catch(
            e => {
                console.log (e);
            }
        )
    }

    render(){
        return(
            <Card>
            <Row>
              <h4><strong>Conheça nossos produtos</strong></h4>
            </Row>
            {
              this.state.products.map(
                function (item, i) {
                  return (
                    <Row key={i}>
                      <Col m={2}>
                        <img src={services.getApiUrl() + item.foto} 
                             className="responsive-img" />
                      </Col>
                      <Col m={10}>
                        <h5><strong>{item.nome}</strong></h5>
                        <p>{item.descricao}</p>
                        <h5>R$: {item.preco}</h5>
                      </Col>
                    </Row>
                  )
                }
              )
            }
          </Card>
        )
      }
    }
    export default Products;
    