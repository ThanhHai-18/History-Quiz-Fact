import React, { useState } from "react";
import { Button, Form, InputGroup, Row, Col, Container } from "react-bootstrap";
import MemeContent from "./MemeContent";
import "../../css/MainContent.css"

export default function MainContent({ data }) {

  const [keyword, setKeyword] = useState(''); //Tìm kiếm gần đúng
  const result = keyword 
  ? data.filter(item => item.chuong1.toLowerCase().indexOf(keyword.toLowerCase()) > -1) 
  : data 

  return (
    <Container fluid className="main-content">
      <Row className="mt-4">
        <Col><h4>Danh sách lựa chọn</h4></Col>
        <Col>
          <Form className="search->meme-form">
            <InputGroup>
              <Form.Control type="text" placeholder="Nhập từ khóa tìm kiếm ..." onChange={(event) => setKeyword(event.target.value)} />
              <Button type="submit" variant="dark">
                <i className="fa fa-search" ></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>

      <Row className="meme-list mt-4">
        {result.map((memedata) => (
          <Col lg={3} md={6}>
            <MemeContent key={"meme-content-" + memedata.chuong1 + memedata.phan1} {...memedata} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
