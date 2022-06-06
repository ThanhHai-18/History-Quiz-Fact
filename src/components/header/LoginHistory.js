import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, login } from "../../components/models/user";
import {Button,Modal,Form} from "react-bootstrap";

export default function LoginHistory(){
    const [dangnhapForm, setDangnhapForm] = useState(false);
       
    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [userpasswordError, setUserpasswordError] = useState('');
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLoginForm = (event) => {
      event.preventDefault();
      if (!username) setUsernameError('Nhập vào tên đăng nhập');
      if (!userpassword) setUserpasswordError('Nhập vào mật khẩu');
      if (username && userpassword) {
        const user = login(username, userpassword);
        if (!user) {
        setUsernameError('Tên đăng nhập hoặc mật khẩu không chính xác');
        } 
        else {
          auth.setCurrentUser(user);
          navigate('/');
          alert('Đăng nhập thành công')
        }
      }
    }

    return(<div>
        <Button variant="outline-light" onClick={() => setDangnhapForm(true)}>Đăng nhập</Button>
        <Modal show={dangnhapForm} onHide={() => setDangnhapForm(true)} >
            <Form onSubmit={handleLoginForm}>
              <Modal.Header className="form-dangnhap" closeButton={dangnhapForm} onClick={() => setDangnhapForm(false)}>
                <h4>Đăng nhập vào History Quiz & Fact</h4>
              </Modal.Header>
              <Modal.Body className="form-dangnhap">
                <Form.Group>
                  <Form.Label>Tên đăng nhập</Form.Label>
                  <Form.Control className="text" type="text" placeholder="Nhập tên đăng nhập"
                  onChange={(event) => setUsername(event.target.value)} />
                  <div className="text-danger"> {usernameError} </div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Mật khẩu</Form.Label>
                  <Form.Control className="text" type="password" placeholder="Nhập mật khẩu"
                  onChange={(event) => setUserpassword(event.target.value)}/>
                  <div className="text-danger"> {userpasswordError} </div>
                </Form.Group>
                <Form.Group>
                  <Form.Check className="text" type="checkbox" label="Duy trì Đăng nhập" />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer className="form-dangnhap">
                <Button type="submit" variant="secondary"> Đăng Nhập </Button>
                <Button variant="outline-secondary" onClick={() => setDangnhapForm(false)}>Hủy bỏ</Button>
              </Modal.Footer>
            </Form>
        </Modal>

    </div>);
}