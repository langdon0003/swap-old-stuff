import { useEffect, useState } from 'react'
import { Alert, Button, ButtonGroup, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRequests } from '../redux/modules/product'

export default function RequestTo() {
  const [isLogin, setIsLogin] = useState(false)
  const [successFetch, setSuccessFetch] = useState(false)
  const { user: userLogin } = useSelector((s) => s.user.userLogin)
  useEffect(() => {
    if (!userLogin || !userLogin._id) {
      setIsLogin(false)
    } else {
      setIsLogin(true)
    }
  }, [userLogin])

  const { loading, success, error, requests } = useSelector(
    (s) => s.product.fetchRequests
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRequests())
  }, [dispatch])
  // 1 get all products of userLogin._id === item.user
  // 2 get all products tradeTo not null

  const cancelRequestHandler = (e) => {
    console.log('cancelRequestHandler...')
  }
  return (
    <>
      <Link className='btn btn-warning my-2' to='/'>
        QUAY LẠI
      </Link>
      <h3>DANH SÁCH YÊU CẦU ĐỔI CỦA BẠN</h3>
      {!requests || !requests.length ? (
        <Alert variant='warning'>Bạn chưa có yêu cầu đổi nào cả !</Alert>
      ) : (
        <Table striped hover>
          <thead>
            <tr>
              <th>Món bị đổi</th>
              <th>Hình</th>
              <th>Tình trạng</th>
              <th>Món bạn muốn</th>
              <th>Hình</th>
              <th>Chỉnh sửa</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((item, _id) => (
              <>
                <tr>
                  <td>{item.title}</td>
                  <td>
                    <Image
                      style={{ borderRadius: '1.1em', width: '250px' }}
                      src={`${process.env.REACT_APP_IMAGE_URL_PREFIX}${item.image}`}
                      alt={item.title}
                      fluid
                    ></Image>
                  </td>
                  <td>{item.tradeTo.status ? 'Chờ' : 'Đã hủy'}</td>
                  <td>{item.tradeTo.title}</td>
                  <td>
                    <Image
                      style={{ borderRadius: '1.1em', width: '250px' }}
                      src={`${process.env.REACT_APP_IMAGE_URL_PREFIX}${item.tradeTo.image}`}
                      alt={item.tradeTo.title}
                      fluid
                    ></Image>
                  </td>
                  <td>
                    <ButtonGroup aria-label='Basic example'>
                      <Button
                        variant='secondary'
                        onClick={cancelRequestHandler}
                      >
                        Hủy
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </Table>
      )}
    </>
  )
}
