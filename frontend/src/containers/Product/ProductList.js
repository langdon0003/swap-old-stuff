import { useEffect } from 'react'
import { Button, ButtonGroup, Image, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageBox from '../../components/ImageBox'
import { fetchMyList } from '../../redux/modules/product'

export default function ProductList() {
  const { user: userLogin } = useSelector((s) => s.user.userLogin)

  const { error, loading, products } = useSelector(
    (s) => s.product.myProductList
  )
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMyList(userLogin._id, false))
  }, [dispatch, userLogin])

  return (
    <>
      <Link className='btn btn-warning my-2' to='/'>
        QUAY LẠI
      </Link>
      <h3>DANH SÁCH ĐỒ CŨ CỦA BẠN</h3>

      <Table responsive striped hover>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Tình trạng</th>
            <th>Số yêu cầu</th>
            <th>Chỉnh sửa</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, _id) => (
            <tr>
              <td xs={4}>{item.title}</td>
              <td>
                {/* <Image
                  style={{ borderRadius: '1.1em', width: '250px' }}
                  src={`${process.env.REACT_APP_IMAGE_URL_PREFIX}${item.image}`}
                  alt={item.title}
                  fluid
                ></Image> */}
                <ImageBox image={item.image} height='80px' />
              </td>
              <td>
                {!item.tradeTo
                  ? 'Chưa đổi'
                  : item.tradeTo.status
                  ? 'Chờ'
                  : 'Đã đổi'}
              </td>
              <td>
                <Link to={`/products/${item._id}`}>
                  <strong>{item.numRequests}</strong>
                </Link>
              </td>
              <td>
                <ButtonGroup aria-label='Basic example'>
                  <Button variant='secondary' className='mr-1'>
                    Hủy
                  </Button>
                  <Link
                    className='btn btn-secondary'
                    to={`/products/${item._id}/edit`}
                  >
                    Sửa
                  </Link>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
