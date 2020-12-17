import { Button, Col, Form, Row } from 'react-bootstrap'

export default function UserRegister() {
  return (
    <>
      <Row className='justify-content-center mt-4 pt-5'>
        <Col md={4}>
          <h2>ĐĂNG KÝ</h2>
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
