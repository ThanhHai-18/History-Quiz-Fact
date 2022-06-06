import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Col, Row, Modal, Form } from "react-bootstrap";
// import { AuthContext } from "../models/user";


export default function RegisterHistory() {
  const [dangkyForm, setDangkyForm] = useState(false);

  const [Firstname, setFirstName] = useState();
  const [Lastname, setLastName] = useState();
  const [username, setUsername] = useState();
  const [userpassword, setuserPassword] = useState();
  const [Confirm, setConfirm] = useState();
  // const auth = useContext(AuthContext);


  //Lấy giá trị đăng ký
  //   const changeuserpassword = (event) => {
  //     setuserassword(event.target.value);
  //   };

  //Xét điều kiện đăng ký
  const handleRegister = (event) => {
    event.preventDefault();
    let newUser = { username, userpassword };
    let userData = localStorage.getItem("userData"); // lấy array user trong localStorage
    userData = JSON.parse(userData);
    if (userData == null || userData.length == 0 ) {
        if (!username || !userpassword || !Firstname || !Lastname || !Confirm) {
            alert("Vui lòng nhập đầy đủ thông tin!");
        } 
        else if (Confirm != userpassword) {
            alert("Mật khẩu không khớp, vui lòng thử lại!");
        } 
        else {
            userData = [newUser];
            alert("Đăng kí tài khoản thành công");
        }
    } else {
      let nameSake = false;
      for (let user of userData) {
        if (user.username == username) {
          nameSake = true;
        }
      }
      if (!nameSake) {
        userData.push(newUser);
        // auth.setCurrentUser(newUser)
      } else {
        alert("Tài khoản này đã được đăng ký. Vui lòng thử lại!");
      }
    }
    userData = JSON.stringify(userData);
    localStorage.setItem("userData", userData);
    
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      userpassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("")
        .min(6, "Tên đăng nhập tối thiểu 6 ký tự."),
      userpassword: Yup.string()
        .required("")
        .min(6, "Mật khẩu tối thiểu 6 ký tự."),
    }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      console.log(values);
    },
  });

  return (
    <div>
      <Button variant="outline-light" onClick={() => setDangkyForm(true)}>
        Đăng ký
      </Button>
      <Modal
        show={dangkyForm}
        onHide={() => setDangkyForm(true)}
        onSubmit={handleRegister}
      >
        <Form>
          <Modal.Header
            className="form-dangky"
            closeButton={dangkyForm}
            onClick={() => setDangkyForm(false)}
          >
            <h4>Đăng ký tài khoản</h4>
          </Modal.Header>
          <Modal.Body className="form-dangky">
            <Form.Group>
              <Form.Label>Họ và tên</Form.Label>
              <Row>
                <Col>
                  <Form.Control
                    className="text"
                    type="text"
                    placeholder="Họ"
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Control
                    className="text"
                    type="text"
                    placeholder="Tên"
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Tên đăng nhập</Form.Label>
              <Form.Control
                className="text"
                id="username"
                type="text"
                name="username"
                value={formik.values.username}
                onChangeCapture={formik.handleChange}
                placeholder="Nhập tên đăng nhập"
                onChange={(event) => setUsername(event.target.value)}
              />
              {formik.errors.username && (
                <p className="error-name">{formik.errors.username}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                className="text"
                type="password"
                id="userpassword"
                name="userpassword"
                value={formik.values.userpassword}
                onChangeCapture={formik.handleChange}
                placeholder="Nhập mật khẩu"
                onChange={(event) => setuserPassword(event.target.value)}
              />
              {formik.errors.userpassword && (
                <p className="error-name">{formik.errors.userpassword}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Xác nhận mật khẩu</Form.Label>
              <Form.Control
                className="text"
                type="password"
                placeholder="Xác nhận mật khẩu"
                onChange={(event) => setConfirm(event.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="form-dangky">
            <Button variant="secondary" type="submit">
              Đăng ký
            </Button>
            <Button
              variant="outline-secondary"
              onClick={() => setDangkyForm(false)}
            >
              Hủy bỏ
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}
