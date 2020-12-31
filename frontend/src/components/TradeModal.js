import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  createRequest,
  fetchMyList,
  fetchRequests,
} from '../redux/modules/product'
import ImageBox from './ImageBox'

const TradeModel = ({ productTitle, productImage, productId, userId }) => {
  const [giveAwayItemId, setGiveAwayItemId] = useState('')
  const [giveAwayItem, setGiveAwayItem] = useState([])
  const [show, setShow] = useState(false)

  const { error, loading, products } = useSelector(
    (s) => s.product.myProductList
  )
  const dispatch = useDispatch()
  useEffect(() => {
    if (show) {
      dispatch(fetchMyList(userId, true))
    }
  }, [dispatch, show, userId])

  const changeHandler = async ({ target: { value } }) => {
    await setGiveAwayItemId(value)
    const result = products.filter((item) => item._id === value)
    await setGiveAwayItem(result)
  }

  const tradeHandler = async (e) => {
    e.preventDefault()
    await dispatch(
      createRequest(giveAwayItemId, productImage, productTitle, productId)
    )
    await dispatch(fetchRequests())
    await setShow(false)
  }
  return (
    <>
      <Button
        className='btn-block'
        variant='warning'
        onClick={() => setShow(true)}
      >
        Đổi ngay
      </Button>

      <Modal
        dialogClassName='modal-30w'
        show={show}
        onHide={() => setShow(false)}
      >
        <Form onSubmit={tradeHandler}>
          {show && products.length ? (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Chọn món đồ bạn muốn đổi</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group controlId='formGridState'>
                  <Form.Control as='select' onChange={changeHandler}>
                    <option selected>Choose ...</option>
                    {products.map((item) => (
                      <option value={item._id}>{item.title}</option>
                    ))}
                  </Form.Control>
                </Form.Group>

                {!giveAwayItem.length ? (
                  <></>
                ) : (
                  <>
                    <Container>
                      <Row className='border-bottom py-1'>
                        <Col xs md>
                          <strong>Tiêu đề</strong>
                        </Col>
                        <Col xs={4} md={4}>
                          <strong>Hình ảnh</strong>
                        </Col>
                      </Row>
                      {giveAwayItem.map((item) => (
                        <Row className='pt-2 pb-0'>
                          <Col xs md>
                            {item.title}
                          </Col>
                          <Col xs={4} md={4}>
                            {/* <Image
                              style={{ maxWidth: '160px', maxHeight: '99px' }}
                              src={`${process.env.REACT_APP_IMAGE_URL_PREFIX}${item.image}`}
                              alt={item.title}
                              fluid
                            ></Image> */}
                            <ImageBox image={item.image} height='80px' />
                          </Col>
                        </Row>
                      ))}
                    </Container>
                  </>
                )}
              </Modal.Body>
              <Modal.Footer>
                <Button variant='secondary' onClick={() => setShow(false)}>
                  Hủy
                </Button>
                <Button variant='primary' type='submit'>
                  Gửi
                </Button>{' '}
              </Modal.Footer>
            </>
          ) : (
            <>
              <Modal.Header closeButton>
                <Modal.Title>Bạn chưa có gì để đổi cả !</Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button variant='secondary' onClick={() => setShow(false)}>
                  Tắt
                </Button>
              </Modal.Footer>
            </>
          )}
        </Form>
      </Modal>
    </>
  )
}

export default TradeModel
