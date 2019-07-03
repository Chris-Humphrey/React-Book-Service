import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';

class Main extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        const imgURL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/"
        let bookList = this.props.books.map((book) => {
            return (
                    <Col md={3} className="bg-dark pb-4 text-light">

                            Title: {book.title}<br/>
                            <a href={book.link} target="_blank"><img style={{width: 120 + 'px'}} src={imgURL + book.imageLink}/></a><br/>
                            Author: {book.author}<br/>
                            Year: {book.year}<br/>
                            Pages: {book.pages}<br/>
                            Language: {book.language}

                    </Col>
            )
        })
        return (
            <Row>
                {bookList}
            </Row>
        );
    }
}


Main.propTypes = {
    
};

export default Main
