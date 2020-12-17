import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  InputGroup,
} from 'react-bootstrap'
import { Rating } from '../../components'

import { products } from '../../dumpData'
const product = products[0]

export default function ProductDetails() {
  return (
    <>
      <Button className='my-3' variant='secondary'>
        Quay Lại
      </Button>
      <Row>
        <Col lg={4} md={4}>
          <Image
            style={{ borderRadius: '35px' }}
            src='/mouse.jpg'
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
              <Rating value='4.5' text={` 4/5`} />
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
      <h4 className='my-3'>Bình Luận</h4>
      <Row>
        <Col lg={6} md={4}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <strong>Lara: </strong>Cras justo odio
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Lara: </strong>Dapibus ac facilisis in
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Lara: </strong>Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Lara: </strong>Porta ac consectetur ac
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className='my-3'>
        <Col lg={6} md={4}>
          <Form inline>
            <InputGroup className='mb-2 mr-sm-2'>
              <Form.Control id='comment' placeholder='Bình luận của bạn ...' />
            </InputGroup>
            <Button type='submit' className='mb-2'>
              Gửi
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}
