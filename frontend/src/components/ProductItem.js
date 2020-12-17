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
          <Card.Title as='h5' className='my-2'>
            {props.item.title}
          </Card.Title>
          <Card.Subtitle as='p' className='mb-1'>
            {props.item.user}
          </Card.Subtitle>

          <Row>
            <Col md={12} lg={6}>
              <Card.Text>{props.item.location}</Card.Text>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <Badge className='mt-1' variant='primary badge-pill'>
                <Card.Text as='span'>
                  {props.item.likes}{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-heart-fill'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                    />
                  </svg>
                  {/*class='bi bi-heart'
                   */}
                </Card.Text>
              </Badge>
            </Col>
            <Col xs={6} md={6} lg={3}>
              <Badge className='my-1' variant='primary badge-pill'>
                <Card.Text as='span'>
                  {props.item.comments}{' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-chat-text-fill'
                    viewBox='0 0 16 16'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z'
                    />
                  </svg>
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
                Đổi ngay
              </Button>
            </Col>
            <Col xs={6}>
              <Button className='btn-block' variant='primary'>
                Chi tiết
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </>
  )
}
