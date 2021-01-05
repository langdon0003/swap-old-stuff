import { useEffect, useState } from 'react'
import { Alert, Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ImageBox from '../components/ImageBox'
import { fetchTransactions } from '../redux/modules/transaction'

export default function TransactionList() {
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

  const { loading, success, error, transactions } = useSelector(
    (s) => s.transaction.fetchTX
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTransactions())
  }, [dispatch])

  const cancelTransactionHandler = (e) => {
    console.log('cancelTransactionHandler...')
  }
  return (
    <>
      <Link className='btn btn-warning my-2' to='/'>
        QUAY LẠI
      </Link>
      <h3>Your Transaction List</h3>

      {!transactions || !transactions.length ? (
        <Alert variant='warning'>Bạn chưa có giao dịch nào cả !</Alert>
      ) : (
        <>
          <Table className='table__sm_hide' responsive striped hover>
            <thead>
              <tr>
                <th>Hình</th>
                <th>Món bị đổi</th>
                <th>Tình trạng</th>
                <th>Hình</th>
                <th>Món bạn muốn</th>
                <th>Chỉnh sửa</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item, _id) => (
                <>
                  <tr>
                    <td>
                      <ImageBox
                        image={
                          item.buyer.user._id === userLogin._id
                            ? item.buyer.item.image
                            : item.seller.item.image
                        }
                        height='80px'
                        width='80px'
                      />
                    </td>
                    <td>
                      {item.buyer.user._id === userLogin._id
                        ? item.buyer.item.title
                        : item.seller.item.title}
                    </td>
                    <td>{item.transactionStatus}</td>
                    <td>
                      <ImageBox
                        image={
                          item.buyer.user._id === userLogin._id
                            ? item.buyer.item.image
                            : item.seller.item.image
                        }
                        height='80px'
                        width='80px'
                      />
                    </td>
                    <td>
                      {item.buyer.user._id === userLogin._id
                        ? item.buyer.item.title
                        : item.seller.item.title}
                    </td>
                    <td>
                      <Button
                        variant='warning'
                        onClick={cancelTransactionHandler}
                      >
                        Hủy
                      </Button>
                    </td>
                  </tr>
                </>
              ))}
              {transactions.map((item, _id) => (
                <>
                  <tr>
                    <td>
                      <ImageBox
                        image={
                          item.buyer.user._id === userLogin._id
                            ? item.buyer.item.image
                            : item.seller.item.image
                        }
                        height='80px'
                        width='80px'
                      />
                    </td>
                    <td>
                      {item.buyer.user._id === userLogin._id
                        ? item.buyer.item.title
                        : item.seller.item.title}
                    </td>
                    <td>{item.transactionStatus}</td>
                    <td>
                      <ImageBox
                        image={
                          item.buyer.user._id === userLogin._id
                            ? item.buyer.item.image
                            : item.seller.item.image
                        }
                        height='80px'
                        width='80px'
                      />
                    </td>
                    <td>
                      {item.buyer.user._id === userLogin._id
                        ? item.buyer.item.image
                        : item.seller.item.title}
                    </td>
                    <td>
                      <Button
                        variant='warning'
                        onClick={cancelTransactionHandler}
                      >
                        Hủy
                      </Button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </>
      )}

      {!transactions || !transactions.length ? (
        <Alert variant='warning'>Bạn chưa có yêu cầu đổi nào cả !</Alert>
      ) : (
        <>
          {transactions.map((item, _id) => (
            <Container>
              <div class='border-bottom table__md_hide'>
                <div class='row row-cols-xs-2 row-cols-sm-3 row-cols-md-6'>
                  <div class='col-md-1 mb-2'>
                    <div class='row'>Image</div>
                    <div class='row'>
                      <ImageBox
                        image={
                          item.buyer.user._id === userLogin._id
                            ? item.buyer.item.image
                            : item.seller.item.image
                        }
                        height='80px'
                        width='80px'
                      />
                    </div>
                  </div>
                  <div class='col-md-4'>
                    <div class='row'>Your stuff</div>
                    <div class='row'>
                      {item.buyer.user._id === userLogin._id
                        ? item.buyer.item.title
                        : item.seller.item.title}{' '}
                    </div>
                  </div>
                  <div class='col-md-1'>
                    <div class='row'>Status</div>
                    <div class='row'>{item.transactionStatus}</div>
                  </div>
                  <div class='col-md-1'>
                    <div class='row'>Image</div>
                    <div class='row'>
                      <ImageBox
                        image={
                          item.buyer.user._id === userLogin._id
                            ? item.buyer.item.image
                            : item.seller.item.image
                        }
                        height='80px'
                        width='80px'
                      />
                    </div>
                  </div>
                  <div class='col-md-4'>
                    <div class='row'>Your wishlist</div>
                    <div class='row'>
                      {item.buyer.user._id === userLogin._id
                        ? item.buyer.item.title
                        : item.seller.item.title}
                    </div>
                  </div>
                  <div class='col-md-1'>
                    <div class='row'>Actions</div>
                    <div class='row'>
                      <Button
                        variant='warning'
                        onClick={cancelTransactionHandler}
                      >
                        Hủy
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          ))}
        </>
      )}
    </>
  )
}
