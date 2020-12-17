import { Button, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'

export default function UserRegister() {
  return (
    <>
      <Row className='justify-content-center'>
        <Col md={4}>
          <h3>ĐĂNG KÝ TÀI KHOẢN</h3>
          <Form>
            <Form.Group controlId='Email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group controlId='Password'>
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type='password' placeholder='Mật khẩu' />
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Xác nhận Mật khẩu</Form.Label>
              <Form.Control type='password' placeholder='Xác nhận Mật khẩu' />
            </Form.Group>
            <Button className='btn-block'>ĐĂNG KÝ</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
