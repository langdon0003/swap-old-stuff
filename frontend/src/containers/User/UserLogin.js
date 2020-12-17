import { Button, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'

export default function UserLogin() {
  return (
    <>
      <Row className='justify-content-center'>
        <Col md={4}>
          <h3>ĐĂNG NHẬP</h3>
          <Form>
            <Form.Group controlId='Email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>
            <Form.Group controlId='Password'>
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type='password' placeholder='Mật khẩu' />
            </Form.Group>

            <Button className='btn-block'>ĐĂNG NHẬP</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
