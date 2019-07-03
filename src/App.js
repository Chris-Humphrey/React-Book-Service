import React from 'react';
import Main from './Main';
import BookService from './bookService';
import {Container, Row, Col} from 'react-bootstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            books: BookService.getAllBooks()
        }
    }

    render() {
        return (
            <Container fluid={true}>
                <Main books={this.state.books}/>
                {/* <Col md={2}><Main books={this.state.books} /></Col>
                <Col md={2}>Second Column</Col>
                <Col md={2}>Third Column</Col>
                <Col md={2}>Fourth Column</Col>
                <Col md={2}>Fifth Column</Col>
                <Col md={2}>Sixth Column</Col> */}
            </Container>
        );
    }
}


App.propTypes = {
    
};

export default App
