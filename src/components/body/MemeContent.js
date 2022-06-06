import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../css/MemeContent.css"

export default function MemeContent({id, name, phan1, chuong1, bai, questionnumber, timetest, note1, note2, note3,  image, question}){
    return(
        <Container className="meme-content border mb-3 shadow-sm">
        <Row>
            <Col sm={12} className="text-center mt-4">
                <b>{phan1}</b>
            </Col>
            <Col sm={12} className="text-center mt-2">
                <Link to={"/memes/" + id}> <img src={image} className="img300 w-100" /> </Link>
            </Col>
            <Col sm={12} className="text-center mt-1 mb-2">
                <span>{chuong1}</span>
            </Col>
            <Col sm={12} className="text-center mt-1 mb-2">
                <span>{name}</span>
            </Col>
        </Row>
        </Container>
    );
}

