import Axios from 'axios'
import { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  ProgressBar,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { Rating } from '../../components'
import { fetchDetails, updateProduct } from '../../redux/modules/product'

export default function ProductEdit() {
  const { id: productId } = useParams()

  const dispatch = useDispatch()
  const { error, loading, product } = useSelector(
    (s) => s.product.productDetails
  )

  const [percentUpload, setPercentUpload] = useState(null)
  const [imageUpload, setImageUpload] = useState()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState('')
  const [wishList, setWishList] = useState('')

  const { user: userLogin } = useSelector((s) => s.user.userLogin)
  const { success } = useSelector((s) => s.product.updateProduct)

  const history = useHistory()

  useEffect(() => {
    if (!product._id) {
      dispatch(fetchDetails(productId))
    } else {
      setTitle(product.title)
      setDescription(product.description)
      setLocation(product.location)
      setImage(product.image)
      setWishList(product.wishList)
    }
  }, [dispatch, productId, product])

  useEffect(() => {
    if (success) {
      history.push(`/products/${productId}`)
    }
  }, [success, productId, history])

  const uploadImageHandler = async () => {
    try {
      const formData = new FormData()
      formData.append('file', imageUpload)
      formData.append('upload_preset', 'sos-product')
      formData.append('cloud_name', 'longpos')

      const {
        data: { version, public_id, format },
      } = await Axios.request({
        method: 'POST',
        url: process.env.REACT_APP_CLOUDINARY_URL_UPLOAD,
        data: formData,
        onUploadProgress: ({ loaded, total }) => {
          const per = Math.round((loaded / total) * 100)
          setPercentUpload(per)
        },
      })

      await setImage(`/v${version}/${public_id}.${format}`)
    } catch (error) {
      console.log(error)
    }
  }

  const updateProductHandler = (e) => {
    e.preventDefault()
    const newInfo = {
      _id: productId,
      title,
      description,
      location,
      image,
      wishList,
    }
    dispatch(updateProduct(newInfo))
  }

  return (
    <>
      <Link className='btn btn-warning my-2' to={`/products/${productId}`}>
        Quay lại
      </Link>
      <Form onSubmit={updateProductHandler}>
        <h3>Chỉnh sửa</h3>
        <Row>
          <Col lg={3} md={3}>
            <Image
              style={{ borderRadius: '1.1em' }}
              src={
                !image
                  ? 'https://placeimg.com/300/300/tech'
                  : `${process.env.REACT_APP_IMAGE_URL_PREFIX}${image}`
              }
              alt={title}
              fluid
            ></Image>
            {percentUpload && (
              <>
                <ProgressBar
                  striped
                  variant='warning'
                  animated
                  label={`${percentUpload}%`}
                  now={percentUpload}
                  className='mt-1'
                />
              </>
            )}
          </Col>
          <Col lg={6} md={6}>
            <Form.Group controlId='title'>
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                placeholder='Tiêu đề'
                value={title}
                onChange={({ target: { value } }) => setTitle(value)}
              />
            </Form.Group>
            <Form.Group controlId='description'>
              <Form.Label>Chi tiết</Form.Label>
              <Form.Control
                placeholder='Chi tiết'
                value={description}
                onChange={({ target: { value } }) => setDescription(value)}
              />
            </Form.Group>

            <>
              <Form inline>
                <Form.File id='formcheck-api-regular'>
                  <Form.File.Input
                    onChange={({ target: { files } }) => {
                      setImageUpload(files[0])
                    }}
                  />
                </Form.File>
                <Button
                  type='button'
                  class=' btn-success btn btn-small'
                  onClick={uploadImageHandler}
                >
                  Upload
                </Button>
              </Form>
            </>
          </Col>
          <Col lg={3} md={3}>
            <Form.Group controlId='location'>
              <Form.Label>Địa điểm</Form.Label>
              <Form.Control
                placeholder='Địa điểm'
                value={location}
                onChange={({ target: { value } }) => setLocation(value)}
              />
            </Form.Group>
            <Form.Group controlId='wishList'>
              <Form.Label>Đồ đang cần</Form.Label>
              <Form.Control
                placeholder='Đồ đang cần'
                value={wishList}
                onChange={({ target: { value } }) => setWishList(value)}
              />
            </Form.Group>
            <Button type='submit' className='btn-block btn-warning ml-auto'>
              Cập nhật
            </Button>
          </Col>
        </Row>
      </Form>
      <>
        <h3 className='mt-2'>Xem trước bài đăng</h3>
        <Row>
          <Col lg={4} md={4}>
            <Image
              style={{ borderRadius: '1.1em' }}
              src={
                !image
                  ? 'https://placeimg.com/300/300/tech'
                  : `${process.env.REACT_APP_IMAGE_URL_PREFIX}${image}`
              }
              alt={title}
              fluid
            ></Image>
          </Col>
          <Col lg={5} md={5}>
            <ListGroup variant='flush'>
              <ListGroup.Item as='h6' className='mb-0 py-2'>
                {title || 'Tiêu đề'}
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
                Đang có <strong>999</strong> người yêu cầu đổi
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
                    <strong>{`Người bán: ${userLogin.name}`}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>{`Đánh giá: `}</strong>
                    <Rating value='5' text={` (5/5)`} />
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Nhận được <strong>999</strong> đánh giá từ{' '}
                    <strong>999</strong> giao dịch thành công.
                  </Col>
                </Row>
                <Button disabled className='btn-block my-3' variant='warning'>
                  Yêu cầu đổi
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </>
    </>
  )
}
