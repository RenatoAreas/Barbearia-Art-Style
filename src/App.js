import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Main from './views/Main';
import { Row, Col } from 'react-materialize';
 
class App extends React.Component {
 
  render() {
    return (
      <Row>
        <Header />
        <Row>
          <Col s={4}>
            <Profile />
          </Col>
          <Col s={8}>
            <Main />
          </Col>
        </Row>
      </Row>
    )
  }
 
}
 
export default App;
