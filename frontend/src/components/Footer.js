import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Container>
          <Row>
            <Col className='text-center py-3'>
              All rights reserved - Swap Old Stuff - 2020
            </Col>
          </Row>
        </Container>
      </Container>
    </footer>
  )
}
