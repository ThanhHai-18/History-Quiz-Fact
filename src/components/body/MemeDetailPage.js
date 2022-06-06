import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getMemeById } from "../../data/Meme_data";
import "../../css/MemeDetailPage.css";

export default function MemeDetailPage() {
  const { id } = useParams();
  const [meme, setMeme] = useState({});

  useEffect(() => {
    let data = getMemeById(id);
    setMeme(data);
  }, [id]);

  return (
    <div className="meme-detail-page">
      <Container >
        <h2 className="mb-4">{meme.name}</h2>
        <Row>
          <Col sm={4}>
            <img src={meme.image} className="img400 w-100" />
          </Col>

          <Col>
            <div className="noidung mb-1">
              <b>Mã:</b> <span>{meme.name}</span>
            </div>
            <div className="noidung mb-1">
              <b>Học phần:</b> <span>{meme.phan1}</span>
            </div>
            <div className="noidung mb-1">
              <b>Chương:</b> <span>{meme.chuong1}</span>
            </div>
            <div className="noidung mb-1">
              <b>Bài:</b> <span>{meme.bai}</span>
            </div>
            <div className="noidung mb-1">
              <b>Số câu:</b> <span>{meme.questionnumber}</span>
            </div>
            <div className="noidung mb-1">
              <b>Thời gian làm bài:</b> <span>{meme.timetest}</span>
            </div>
            <div className="noidung mb-1">
              <b>Hướng dẫn làm bài thi trắc nghiệm:</b> <br />
              <span>{meme.note1}</span> <br/>
              <span>{meme.note2}</span> <br/>
              <span>{meme.note3}</span>
            </div>
            <Link to={"/memeQuestionTest/" + id}>
              {" "}
              <Button variant="dark mt-3">Làm kiểm tra</Button>{" "}
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
