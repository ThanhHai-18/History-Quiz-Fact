import React from "react";
import { Form } from "react-bootstrap";
import "../../css/AsideLeft.css";

export default function AsideLeft() {
  return (
    <div className=" mt-4">
      <h4 className=" mb-4"> Danh mục</h4>
      <b className="danhmucthegioi ">⁂ Lịch sử thế giới:</b>
      <Form className=" mt-2">
        {["checkbox"].map((type) => (
          <div className="mb-3">
            <Form.Check
              label="Liên xô & các nước Đông Âu (1945-2000)."
              type={type}
            />
            <Form.Check
              label="Các nước Á, Phi & Mỹ LaTinh (1945-2000)."
              type={type}
            />
            <Form.Check
              label="Mỹ, Tây Âu & Nhật Bản (1945-2000)."
              type={type}
            />
          </div>
        ))}
      </Form>

      <b>⁂ Lịch sử Việt Nam:</b>
      <Form className="danhmucthegioi-vn mt-2">
        {["checkbox"].map((type) => (
          <div className="mb-3">
            <Form.Check
              label="Việt Nam từ năm 1919 đến năm 1930."
              type={type}
            />
            <Form.Check
              label="Việt Nam từ năm 1930 đến năm 1945."
              type={type}
            />
            <Form.Check
              label="Việt Nam từ năm 1945 đến năm 1954."
              type={type}
            />
            <Form.Check
              label="Việt Nam từ năm 1954 đến năm 1975."
              type={type}
            />
          </div>
        ))}
      </Form>
    </div>
  );
}
