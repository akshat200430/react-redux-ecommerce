import axios from '../../api/axios'
import {loadproduct,updateProduct,deleteProduct} from '../reducers/productSlice'




export const asynccreateproduct =( data)=> async (dispatch , getState)=>{
                 
    try {
            const res =    axios.post('products',data) ;
                dispatch(loadproduct(res.data));          
    } catch (error) {
        console.log(error)
    }

}





export const asyncproductrender = () => async (dispatch , getState)=>{

  try {
             const product = await axios.get('products'); 
             dispatch(loadproduct(product.data));          

  } catch (error) {
     console.log(error)
  }

}



export const asyncupdateproduct = (id, data) => async (dispatch) => {
  try {
    const res = await axios.patch(`/products/${id}`, data);

    dispatch(updateProduct(res.data)); 
  } catch (error) {
    console.log(error);
  }
};


export const asyncdeleteproduct=(id)=>async (dispatch)=>{


    try {
           
          await axios.delete(`/products/${id}`);
          
          dispatch(deleteProduct(id));

        

    } catch (error) {
        console.log(error);
    }
}