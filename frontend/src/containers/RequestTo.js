import { Table, ButtonGroup, Button } from 'react-bootstrap'
import { products } from '../dumpData'

export default function RequestTo() {
  return (
    <>
      <h3>DANH SÁCH YÊU CẦU ĐỔI CỦA BẠN</h3>

      <Table striped hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Hình ảnh</th>
            <th>Tình trạng</th>
            <th>Món bị đổi</th>
            <th>Hình</th>
            <th>Chỉnh sửa</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, _id) => (
            <tr>
              <td>{item._id}</td>
              <td>{item.title}</td>
              <td>{item.image}</td>
              <td>{`Chờ xác nhận`}</td>
              <td>{`Bỉm`}</td>
              <td>{`img url `}</td>
              <td>
                <ButtonGroup aria-label='Basic example'>
                  <Button variant='secondary'>Bỏ yêu cầu</Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
