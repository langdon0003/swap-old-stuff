import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap'

export default function Header() {
  return (
    <header>
      <Navbar fixed='stick' bg='primary' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>Swap Old Stuff</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Form inline>
              <FormControl
                type='text'
                placeholder='Search'
                className='mr-sm-2'
              />
              <Button variant='secondary'>
                <i class='fas fa-search'></i>
              </Button>
            </Form>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>Your Requests</Nav.Link>
              <Nav.Link href='/cart'>Create New</Nav.Link>
              <Nav.Link href='/login'>Sign In</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
              <NavDropdown title='Langdon' id='basic-nav-dropdown'>
                <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                <NavDropdown.Item href='/product-list'>
                  Your Products
                </NavDropdown.Item>
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
