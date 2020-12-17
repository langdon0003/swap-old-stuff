import { Container } from 'react-bootstrap'
import {
  Home,
  ProductCreate,
  ProductDetails,
  ProductList,
  RequestTo,
  UserProfile,
  UserRegister,
  Transaction,
} from './index'
import { Header, Footer } from '../components/'
import UserLogin from './User/UserLogin'

export default function App() {
  return (
    <>
      <Header />
      <main className='mt-3'>
        <Container>
          {/* <Home /> */}
          {/* <ProductCreate /> */}
          {/* <ProductList /> */}
          {/* <ProductDetails />
           */}
          {/* <UserLogin /> */}
          {/* <RequestTo /> */}
          <Transaction />
          {/* <ProductList /> */}
        </Container>
      </main>
      <Footer />
    </>
  )
}
