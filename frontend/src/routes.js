import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Home,
  ProductDetails,
  ProductEdit,
  ProductList,
  ProductCreate,
  UserRegister,
  UserProfile,
  NotFound,
  RequestTo,
  Transaction,
} from './containers'
import UserLogin from './containers/User/UserLogin'

export default function MainSwitch() {
  return (
    <Switch>
      <Route path='/products/create' exact>
        <ProductCreate />
      </Route>

      <Route path='/products' exact>
        <ProductList />
      </Route>

      <Route path='/products/:id'>
        <ProductDetails />
      </Route>

      <Route path='/products/:id/edit'>
        <ProductEdit />
      </Route>

      <Route path='/login' exact>
        <UserLogin />
      </Route>

      <Route path='/register' exact>
        <UserRegister />
      </Route>

      <Route path='/profile' exact>
        <UserProfile />
      </Route>

      <Route path='/my-requests' exact>
        <RequestTo />
      </Route>

      <Route path='/transactions' exact>
        <Transaction />
      </Route>

      <Route path='/' exact>
        <Home />
      </Route>

      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  )
}
