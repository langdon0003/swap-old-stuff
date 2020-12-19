import { useEffect } from 'react'
import { Col, Row, Alert, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { fetchList } from '../redux/modules/product'

export default function Home() {
  const dispatch = useDispatch()
  const { error, loading, products } = useSelector((s) => s.productList)
  console.log('error :>> ', error)
  useEffect(() => {
    dispatch(fetchList())
  }, [dispatch])

  return (
    <>
      <h2>Old Stuff List</h2>
      {loading ? (
        <Spinner animation='border' variant='primary' />
      ) : error ? (
        <Alert variant='warning'>{error}</Alert>
      ) : (
        <Row>
          {products.map((item) => (
            <Col md={6} lg={4} key={item.id}>
              <ProductItem product={item} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}
