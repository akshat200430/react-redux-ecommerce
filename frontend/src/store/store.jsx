import {configureStore} from '@reduxjs/toolkit'
 import userSlice from '../store/reducers/userSlice'
 import ProductSlice from '../store/reducers/productSlice'
 import cartSlice from '../store/reducers/cartSlice'

export const  store = configureStore({
    reducer:{
       user : userSlice,
       product:ProductSlice,
        cart : cartSlice,
    }
})


