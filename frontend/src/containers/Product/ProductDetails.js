import { useEffect, useState } from 'react'
import {
  Alert,
  Badge,
  Button,
  Col,
  Form,
  Image,
  InputGroup,
  ListGroup,
  Row,
  Spinner,
  Toast,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Rating from '../../components/Rating'
import TradeModal from '../../components/TradeModal'
import {
  createComment,
  CREATE_COMMENT_RESET,
  fetchDetails,
} from '../../redux/modules/product'
import convertTime from '../../utils/convertTime'

export default function ProductDetails() {
  const [isLogin, setIsLogin] = useState(false)
  const { user: userLogin } = useSelector((s) => s.user.userLogin)
  useEffect(() => {
    if (!userLogin || !userLogin._id) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, [userLogin])

  const [isSeller, setIsSeller] = useState(false)
  const [text, setText] = useState('')
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState(null)

  const { id: productId } = useParams()

  const dispatch = useDispatch()
  const { error, loading, product } = useSelector(
    (s) => s.product.productDetails
  )

  const {
    numComments,
    numLikes,
    numRequests,
    requestsFrom,
    title,
    description,
    location,
    image,
    comments,
    wishList,
    user,
    userName,
  } = product
  console.log('userLogin && product.user :>> ', userLogin, product.user)
  useEffect(() => {
    if (userLogin && product.user) {
      userLogin._id === product.user._id
        ? setIsSeller(true)
        : setIsSeller(false)
    }
  }, [userLogin, product])

  const { success } = useSelector((s) => s.product.createComment)
  console.log('requestsFrom :>> ', requestsFrom)
  const commentHandler = (e) => {
    e.preventDefault()

    if (!text) {
      setMessage("You can't send empty message!")
      setShow(true)
    } else {
      const comment = {
        name: userLogin.name,
        text: text,
        user: userLogin._id,
      }
      dispatch(createComment(productId, comment, numComments + 1))
    }
  }

  useEffect(() => {
    dispatch(fetchDetails(productId))
  }, [dispatch, productId])

  useEffect(() => {
    if (success) {
      setText('')
      dispatch({ type: CREATE_COMMENT_RESET })
    }
  }, [dispatch, success])

  return (
    <>
      <Link className='btn btn-warning my-2' to='/'>
        QUAY LẠI
      </Link>
      {isSeller && (
        <Link
          className='btn btn-success ml-2 my-2'
          to={`/products/${productId}/edit`}
        >
          Chỉnh sửa
        </Link>
      )}

      {loading ? (
        <Spinner animation='border' variant='primary' />
      ) : error ? (
        <Alert variant='warning'>{error}</Alert>
      ) : (
        <>
          <h3>CHI TIẾT</h3>
          <Row>
            <Col lg={4} md={4}>
              <Image
                style={{ borderRadius: '1.1em' }}
                src={`${process.env.REACT_APP_IMAGE_URL_PREFIX}${image}`}
                alt={title}
                fluid
              ></Image>
            </Col>
            <Col lg={5} md={5}>
              <ListGroup variant='flush'>
                <ListGroup.Item as='h6' className='mb-0 py-2'>
                  {title}
                </ListGroup.Item>

                <ListGroup.Item>
                  <strong>Địa điểm: </strong>
                  {location}
                </ListGroup.Item>

                <ListGroup.Item>
                  <strong>Thông tin chi tiết : </strong>
                  {description}
                </ListGroup.Item>
                <ListGroup.Item>
                  Đang có <strong>{numRequests}</strong> người yêu cầu đổi
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Đồ đang cần: </strong>
                  {wishList}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={3} md={3}>
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>{`Người bán: ${userName}`}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>{`Đánh giá: `}</strong>
                      <Rating
                        value={!user ? 0 : user.rating}
                        text={`(${!user ? 0 : user.rating}/5)`}
                      />
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col className='mb-2'>
                      Nhận được <strong>{!user ? 0 : user.numFeedback}</strong>{' '}
                      đánh giá từ{' '}
                      <strong>{!user ? 0 : user.numSuccessTX}</strong> giao dịch
                      thành công.
                    </Col>
                  </Row>
                  {isLogin && !isSeller ? (
                    <TradeModal
                      productId={productId}
                      productImage={image}
                      productTitle={title}
                      userId={userLogin._id}
                    />
                  ) : (
                    <></>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
      <Row>
        <Col lg={5} md={4}>
          <h3 className='mt-4'>BÌNH LUẬN</h3>

          {loading ? (
            <Spinner animation='border' variant='primary' />
          ) : error ? (
            <Alert variant='warning'>{error}</Alert>
          ) : (
            <>
              {numComments ? (
                <ListGroup variant='flush'>
                  {comments.map((item) => (
                    <ListGroup.Item key={item._id}>
                      <Row>
                        <Col lg={9} className='pl-1'>
                          {item.user === user._id ? (
                            <Badge
                              pill
                              variant='warning'
                              as='small'
                              className='text-dark font-weight-bold m-0 p-1'
                            >
                              <small>seller</small>
                            </Badge>
                          ) : (
                            ''
                          )}
                          <strong className='ml-1'>{item.name}: </strong>
                          <span>{item.text}</span>
                        </Col>
                        <Col as='small' lg={3} className='text-right'>
                          <small>{convertTime(item.createdAt)}</small>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) : (
                <Alert variant='danger'>
                  There is no comment. Be the first one by type below.
                </Alert>
              )}
            </>
          )}
          {!isLogin ? (
            <>
              <Alert variant='info'>Please login to comment!</Alert>
            </>
          ) : (
            <>
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={2000}
                autohide
              >
                <Toast.Header>
                  <strong className='mr-auto'>{message}</strong>
                </Toast.Header>
              </Toast>
              <Form onSubmit={commentHandler}>
                <InputGroup className='my-2 mr-sm-2'>
                  <Form.Control
                    id='comment'
                    placeholder='Bình luận của bạn ...'
                    value={text}
                    onChange={({ target: { value } }) => setText(value)}
                  />
                  <Button type='submit' className='btn btn-warning ml-1'>
                    Gửi
                  </Button>
                </InputGroup>
              </Form>
            </>
          )}
        </Col>
        {isLogin && isSeller ? (
          <>
            <Col lg={7} md={4}>
              <h3 className='mt-4'>Danh sách yêu cầu đổi:</h3>
              {loading ? (
                <Spinner animation='border' variant='primary' />
              ) : error ? (
                <Alert variant='warning'>{error}</Alert>
              ) : (
                <>
                  {numRequests ? (
                    <>
                      <Row as='strong'>
                        <Col lg={2}>Hình ảnh</Col>
                        <Col>Tiêu đề</Col>
                        <Col lg={2}>Địa điểm</Col>
                        <Col lg={2}>Tên</Col>
                        <Col lg='auto'>Nhận</Col>
                      </Row>

                      {requestsFrom.map((request) => (
                        <Row className='border-top py-1'>
                          <Col lg={2}>
                            <Image
                              style={{
                                borderRadius: '1.1em',
                                // maxWidth: '60px',
                                maxHeight: '60px',
                              }}
                              src={`${process.env.REACT_APP_IMAGE_URL_PREFIX}${request.item.image}`}
                              alt={request.item.title}
                              fluid
                            ></Image>
                          </Col>
                          <Col as='small'>{request.item.title}</Col>
                          <Col as='small' lg={2}>
                            {request.item.location}
                          </Col>
                          <Col as='small' lg={2}>
                            {request.item.userName}
                          </Col>
                          <Col lg='auto' className='p-2'>
                            <Button variant='secondary'>OK</Button>
                          </Col>
                        </Row>
                      ))}
                    </>
                  ) : (
                    <Alert variant='danger'>
                      Món này chưa có ai yêu cầu đổi.
                    </Alert>
                  )}
                </>
              )}
            </Col>
          </>
        ) : (
          ''
        )}
      </Row>
    </>
  )
}
