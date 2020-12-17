import { Card, Button, Badge, Row, Col } from 'react-bootstrap'

export default function ProductItem(props) {
  return (
    <>
      <Card className='mt-4 position-relative' style={{ borderRadius: '35px' }}>
        <Card.Img
          style={{ borderTopRightRadius: '35px', borderTopLeftRadius: '35px' }}
          variant='top'
          src='mouse.jpg'
        />

        <Card.Body className='px-3 py-2'>
          <Card.Title as='h5' className='my-1'>
            {props.item.title}
          </Card.Title>
          <Card.Subtitle className='mb-1 fw-bold'>
            {props.item.user}
          </Card.Subtitle>
          {/* <Card.Text className='lh-1'>{props.item.description}</Card.Text> */}
          <Row>
            <Col md={12} lg={6}>
              <Card.Text>
                <strong>{props.item.location}</strong>
              </Card.Text>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <Badge className='mt-1' variant='primary badge-pill'>
                <Card.Text as='span'>
                  <strong>
                    {props.item.likes} <i class='fas fa-heart'></i>
                    {/* <i class='far fa-heart'></i> */}
                  </strong>
                </Card.Text>
              </Badge>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <Badge className='my-1' variant='primary badge-pill'>
                <Card.Text as='span'>
                  <strong>
                    {props.item.comments} <i class='fas fa-comments'></i>
                    {/* <i class='far fa-comments'></i> */}
                  </strong>
                </Card.Text>
              </Badge>
            </Col>
          </Row>
        </Card.Body>
        <Card.Footer
          style={{
            borderBottomRightRadius: '35px',
            borderBottomLeftRadius: '35px',
          }}
        >
          <Row>
            <Col xs={6}>
              <Button className='mb-1 btn-block' variant='warning'>
                <span>Đổi ngay</span>
              </Button>
            </Col>
            <Col xs={6}>
              <Button className='btn-block' variant='primary'>
                <span>Chi tiet</span>
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  )
}
