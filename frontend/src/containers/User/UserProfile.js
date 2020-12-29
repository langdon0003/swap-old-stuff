import { useEffect, useState } from 'react'
import { Alert, Button, Col, Form, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { fetchProfile, updateProfile } from '../../redux/modules/user'

export default function UserProfile() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [addressNo, setAddressNo] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [memo, setMemo] = useState('')

  const [message, setMessage] = useState(null)
  const history = useHistory()
  const dispatch = useDispatch()

  

  const userLogin = useSelector((stage) => stage.user.userLogin)
  const UpdateProfile = useSelector((stage) => stage.user.UpdateProfile)
  const { error, loading, user } = useSelector(
    (stage) => stage.user.userProfile
  )
  const userUpdateProfile = {
    name,
    email,
    password,
    lastName,
    firstName,
    phoneNumber,
    addressNo,
    street,
    city,
    province,
    memo,
  }
  useEffect(() => {
    if (!userLogin || !userLogin.user) {
      history.push('/login')
    } else {
      if (!user) {
        dispatch(fetchProfile())
      } else {
        setName(user.name)
        setEmail(user.email)
        setPassword(user.password)
        setConfirmPassword(user.confirmPassword)
        setLastName(user.shipping.lastName)
        setFirstName(user.shipping.firstName)
        setPhoneNumber(user.shipping.phoneNumber)
        setAddressNo(user.shipping.addressNo)
        setStreet(user.shipping.street)
        setCity(user.shipping.city)
        setProvince(user.shipping.province)
        setMemo(user.shipping.memo)
      }
    }
  }, [dispatch, history, userLogin, user])

  const updateProfileHandler = (e) => {
    setMessage(null)
    e.preventDefault()
    if (!password || !confirmPassword) {
      setMessage('Bạn phải điền mật khẩu xác nhận.')
    } else if (password !== confirmPassword) {
      setMessage('Mật khẩu xác nhận không khớp.')
    } else {
      dispatch(updateProfile(userUpdateProfile))
    }
  }
  return (
    <>
      <Link className='btn btn-warning my-2' to='/'>
        QUAY LẠI
      </Link>

      <h2>THÔNG TIN TÀI KHOẢN</h2>
      {loading && <Spinner animation='border' variant='primary' />}
      {error && <Alert variant='warning'>{error}</Alert>}
      {message && <Alert variant='warning'>{message}</Alert>}
      {UpdateProfile && UpdateProfile.success ? (
        <Alert variant='primary'>Cập nhật thành công!</Alert>
      ) : null}
      <Form onSubmit={updateProfileHandler}>
        <Form.Row>
          <Col md={4}>
            <h4>Đăng nhập</h4>
            <Form.Group controlId='Name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={({ target: { value } }) => setName(value)}
              />
            </Form.Group>
            <Form.Group controlId='Email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
            </Form.Group>
            <Form.Group controlId='Password'>
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control
                type='password'
                placeholder='Mật khẩu'
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
              />
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Xác nhận Mật khẩu</Form.Label>
              <Form.Control
                type='password'
                placeholder='Xác nhận Mật khẩu'
                value={confirmPassword}
                onChange={({ target: { value } }) => setConfirmPassword(value)}
              />
            </Form.Group>
          </Col>
          <Col md={8}>
            <h4>Địa chỉ</h4>
            <Form.Row>
              <Col xs={5}>
                <Form.Group controlId='lastName'>
                  <Form.Label>Họ, Tên lót</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Họ, Tên lót'
                    value={lastName}
                    onChange={({ target: { value } }) => setLastName(value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group controlId='firstName'>
                  <Form.Label>Tên</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Tên'
                    value={firstName}
                    onChange={({ target: { value } }) => setFirstName(value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='phoneNumber'>
                  <Form.Label>Điện thoại</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Điện thoại'
                    value={phoneNumber}
                    onChange={({ target: { value } }) => setPhoneNumber(value)}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId='addressNo'>
                  <Form.Label>Số nhà</Form.Label>
                  <Form.Control
                    placeholder='Số nhà'
                    value={addressNo}
                    onChange={({ target: { value } }) => setAddressNo(value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={7}>
                <Form.Group controlId='street'>
                  <Form.Label>Tên Đường</Form.Label>
                  <Form.Control
                    placeholder='Tên Đường'
                    value={street}
                    onChange={({ target: { value } }) => setStreet(value)}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col xs={7}>
                <Form.Group controlId='city'>
                  <Form.Label>Thành Phố</Form.Label>
                  <Form.Control
                    placeholder='Thành Phố'
                    value={city}
                    onChange={({ target: { value } }) => setCity(value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId='province'>
                  <Form.Label>Tỉnh</Form.Label>
                  <Form.Control
                    placeholder='Tỉnh'
                    value={province}
                    onChange={({ target: { value } }) => setProvince(value)}
                  />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col>
                <Form.Group controlId='memo'>
                  <Form.Label>Ghi chú giao hàng</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Ghi chú khi giao hàng...'
                    value={memo}
                    onChange={({ target: { value } }) => setMemo(value)}
                  />{' '}
                </Form.Group>
              </Col>
            </Form.Row>
          </Col>
          <Button className='ml-auto mr-3' type='submit'>
            Cập nhật
          </Button>
        </Form.Row>
      </Form>
    </>
  )
}
