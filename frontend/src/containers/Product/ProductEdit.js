import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  FormControl,
  InputGroup,
} from 'react-bootstrap'
import { Rating } from '../../components'

import { products } from '../../dumpData'
const product = products[0]

export default function ProductEdit() {
  return (
    <>
      <Button className='my-3' variant='secondary'>
        Quay Lại
      </Button>
      <Form>
        <h3 class='text-center'>CHỈNH SỬA</h3>
        <Row>
          <Col lg={3} md={3}>
            <Image
              style={{ borderRadius: '35px' }}
              src='mouse.jpg'
              alt={product.name}
              fluid
            ></Image>
          </Col>
          <Col lg={6} md={6}>
            <Form.Group controlId='title'>
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control placeholder='Tiêu đề' />
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Chi tiết</Form.Label>
              <Form.Control placeholder='Chi tiết' />
            </Form.Group>
          </Col>
          <Col lg={3} md={3}>
            <Form.Group controlId='location'>
              <Form.Label>Địa điểm</Form.Label>
              <Form.Control placeholder='Địa điểm' />
            </Form.Group>
            <Form.Group controlId='wishList'>
              <Form.Label>Đồ đang cần</Form.Label>
              <Form.Control placeholder='Đồ đang cần' />
            </Form.Group>
          </Col>
          <Button className='ml-auto'>CẬP NHẬT</Button>
        </Row>
      </Form>
      <Row className='mb-2'>
        <h3>Xem trước bài đăng</h3>
      </Row>
      <Row>
        <Col lg={4} md={4}>
          <Image
            style={{ borderRadius: '35px' }}
            src='mouse.jpg'
            alt={product.name}
            fluid
          ></Image>
        </Col>
        <Col lg={5} md={5}>
          <ListGroup variant='flush'>
            <ListGroup.Item className='py-0'>
              <h4>{product.title}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              {`Langdon được đánh giá `}
              <Rating value='4' text={` 4/5`} />
            </ListGroup.Item>
            <ListGroup.Item>{` Nhận được 12 phản hồi từ 23 giao dịch thành công.`}</ListGroup.Item>
            <ListGroup.Item>
              <strong>Chi tiết : </strong>
              {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Địa điểm: TP HCM</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Đồ đang cần: sữa, bỉm</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Đang có 66 người yêu cầu đổi</Col>
              </Row>
              <Button className='btn-block my-3' variant='warning'>
                Yêu cầu đổi
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  )
}
