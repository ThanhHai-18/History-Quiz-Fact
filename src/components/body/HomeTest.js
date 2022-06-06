import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getAllMemes } from "../../data/Meme_data";
import AsideLeft from "./AsideLeft";
import MainContent from "./MainContent";
import "../../css/HomeTest.css";

export default function HomeTest(){

    const [memes, setMemes] = useState([]);

    useEffect(() => {
        let data = getAllMemes();
        setMemes(data);
    }, []);
    
    return(<div className="home-test">
        <Container fluid>
            <Row>
                <Col lg={3} md={4} xs={12} className="aside-left"><AsideLeft /></Col>
                <Col><MainContent data={memes} /></Col>
            </Row>
        </Container>

    </div>);
}