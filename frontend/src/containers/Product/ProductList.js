import { Table, ButtonGroup, Button } from 'react-bootstrap'
import { products } from '../../dumpData'

export default function ProductList() {
  return (
    <>
      <h3>DANH SÁCH ĐỒ CŨ CỦA BẠN</h3>

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
