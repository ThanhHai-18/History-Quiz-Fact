import React from "react";
import { Carousel } from "react-bootstrap";
import "../../css/HomeHistory.css";

export default function HomeHistory() {
  return (
    <div className="home-history">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="img-home d-block w-100"
            src="https://thuthuatnhanh.com/wp-content/uploads/2020/09/anh-nen-chu-de-lich-su-lam-slide-powerpoint.jpg"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="img-home d-block w-100"
            src="https://wallpaperaccess.com/full/1544894.jpg"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
