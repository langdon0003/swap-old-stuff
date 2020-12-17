import { Container } from 'react-bootstrap'
import { BrowserRouter } from 'react-router-dom'

import { Header, Footer } from '../components/'

import MainSwitch from '../routes'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='mt-3'>
        <Container>
          <MainSwitch />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
