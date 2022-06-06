import React, { useEffect, useState } from "react";
import {Button,Col,Container,Row,Form} from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMemeById } from "../../data/Meme_data";
import "../../css/MemeQuestionTest.css";
import FinalButton from "./FinalButton";

export default function MemeQuestionTest() {
  const { id } = useParams();
  const [meme, setMeme] = useState({});
  useEffect(() => {
    let data = getMemeById(id);
    setMeme(data);
  }, [id]);
  console.log(meme);

  return (
    <div className="meme-question-test">
      <h3 className="mb-4 text-center">{meme.name}</h3>
      <Row className="row">
        <Col sm={4}>
          <div className="thongtin-question">
          <img src={meme.image} className="img-questiontest w-85 mb-3" />
          <div>
            <b>⁕ Học phần:</b> <span>{meme.phan1}</span>
          </div>
          <div>
            <b>⁕ Chương:</b> <br />
            <span>{meme.chuong1}</span>
          </div>
          <div>
            <b>⁕ Số câu:</b> <span>{meme.questionnumber}</span>
          </div>
          <div>
            <b>⁕ Thời gian làm bài:</b> <span>{meme.timetest}</span>
          </div>
          </div>
        </Col>

        <Col>
          <h5 className="header-question mx-md-4">{meme.bai}</h5>
          <div>
            {meme.question &&
              meme.question.map((item) => ( 
                <div className="question-item mx-md-4">
                  <div className="question-ask"> {item.namequestion} </div>
                  <Form>
                    {["radio"].map((type) => (
                      <div className="mb-3">
                        <Form.Check
                          reverse
                          label={item.answer1}
                          type={type}
                        />
                        <Form.Check
                          reverse
                          label={item.answer2}
                          type={type}
                        />
                        <Form.Check
                          reverse
                          label={item.answer3}
                          type={type}
                        />
                        <Form.Check
                          reverse
                          label={item.answer4}
                          type={type}
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              ))}
          </div>
        </Col>
      </Row>
      <div>
      <FinalButton />
      </div>
    </div>
  );
}
