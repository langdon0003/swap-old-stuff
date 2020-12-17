import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'

export default function Header() {
  return (
    <header>
      <Navbar fixed='stick' bg='primary' variant='dark' expand='lg'>
        <Container>
          <IndexLinkContainer to='/'>
            <Navbar.Brand>
              <h5>Swap Old Stuff</h5>
            </Navbar.Brand>
          </IndexLinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Form inline>
              <FormControl
                type='text'
                placeholder='tìm kiếm ...'
                className='mr-sm-2'
              />
              <Button variant='secondary'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  class='bi bi-search'
                  viewBox='0 0 16 16'
                >
                  <path
                    fill-rule='evenodd'
                    d='M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z'
                  />
                  <path
                    fill-rule='evenodd'
                    d='M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z'
                  />
                </svg>{' '}
              </Button>
            </Form>
            <Nav className='ml-auto'>
              <LinkContainer to='/my-requests'>
                <Nav.Link>My Requests</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/transactions '>
                <Nav.Link>My Transactions</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/products/create'>
                <Nav.Link>Create New</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link>Sign In</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/register'>
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>

              <NavDropdown title='Langdon' id='basic-nav-dropdown'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                </LinkContainer>

                <LinkContainer to='/products'>
                  <NavDropdown.Item href='/product-list'>
                    Your Products
                  </NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />

                <NavDropdown.Item href='/logout'>Log out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
