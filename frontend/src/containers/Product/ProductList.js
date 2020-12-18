import { Table, ButtonGroup, Button } from 'react-bootstrap'
import { products } from '../../dumpData'

export default function ProductList() {
  return (
    <>
      <Button className='my-2' variant='warning'>
        Quay Lại
      </Button>
      <h2>DANH SÁCH ĐỒ CŨ CỦA BẠN</h2>

      <Table striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Chi tiết</th>
            <th>Tình trạng</th>
            <th>Số yêu cầu</th>
            <th>Chỉnh sửa</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, _id) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.image}</td>
              <td>{item.description}</td>
              <td>{item.status}</td>
              <td>{item.requests}</td>
              <td>
                <ButtonGroup aria-label='Basic example'>
                  <Button variant='secondary'>Dừng</Button>
                  <Button variant='secondary'>Chỉnh sửa</Button>
                  <Button variant='secondary'>Xem</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
