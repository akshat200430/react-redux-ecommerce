import React from 'react'
import Home from '../pages/Home'
import {Routes ,Route} from 'react-router-dom'
import Login from './../pages/Login';
import Products from './../pages/Products';
import Register from './../pages/Register';
import CreateProduct from './../pages/admin/CreateProduct';
import UpdateProduct from '../pages/UpdateProduct';
import SingleProduct from './../pages/SingleProduct';
import Cart from './../pages/Cart';


const Mainroutes = () => {
  return <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/login' element={<Login/>}/>
     <Route path='/register' element={<Register/>}/>
     <Route path='/admin/create-product' element={<CreateProduct/>}/>
     <Route path='/products/:id' element={<SingleProduct/>}>
          <Route path='update-product' element={<UpdateProduct/>}/>

     </Route>
     <Route path='/cart' element={<Cart/>} />
  </Routes>
}

export default Mainroutes