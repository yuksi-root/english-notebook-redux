import React, { Component } from 'react'
import {Row,Col} from 'reactstrap'
import Lists from "../lists/List"
import WordList from "../words/WordList"
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs="3">
                        <Lists/>
                    </Col>
                    <Col xs="9">
                        <WordList/> 
                    </Col>
                </Row>
            </div>
        )
    }
}
