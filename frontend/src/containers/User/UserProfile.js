import { Button, Col, Form, Row } from 'react-bootstrap'

export default function UserProfile() {
  return (
    <>
      <Button variant='warning' className='my-2'>
        Quay lại
      </Button>
      <h2>THÔNG TIN TÀI KHOẢN</h2>
      <Row>
        <Col md={4}>
          <h3>Đăng nhập</h3>
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
            <Button>Cập nhật</Button>
          </Form>
        </Col>
        <Col md={8}>
          <h3>Địa chỉ</h3>
          <Form>
            <Form.Row>
              <Col xs={5}>
                <Form.Group controlId='lastName'>
                  <Form.Label>Họ, Tên lót</Form.Label>
                  <Form.Control placeholder='Họ, Tên lót' />
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group controlId='firstName'>
                  <Form.Label>Tên</Form.Label>
                  <Form.Control placeholder='Tên' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='phoneNumber'>
                  <Form.Label>Điện thoại</Form.Label>
                  <Form.Control placeholder='Điện thoại' />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId='addressNo'>
                  <Form.Label>Số nhà</Form.Label>
                  <Form.Control placeholder='Số nhà' />
                </Form.Group>
              </Col>
              <Col xs={7}>
                <Form.Group controlId='street'>
                  <Form.Label>Tên Đường</Form.Label>
                  <Form.Control placeholder='Tên Đường' />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={7}>
                <Form.Group controlId='city'>
                  <Form.Label>Thành Phố</Form.Label>
                  <Form.Control placeholder='Thành Phố' />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='province'>
                  <Form.Label>Tỉnh</Form.Label>
                  <Form.Control placeholder='Tỉnh' />
                </Form.Group>
              </Col>
            </Form.Row>
            <Button>Cập nhật</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
