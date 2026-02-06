import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    data :[]
}





const productSlice = createSlice({
      
      name : "product",
      initialState,
      reducers:{
        loadproduct :(state,action)=>{
            state.data=action.payload;
        },
        updateProduct: (state, action) => {
  const index = state.data.findIndex(
    p => p.id === action.payload.id
  );
  if (index !== -1) {
    state.data[index] = action.payload;
  }},
  deleteProduct: (state,action)=>{
       
    const filter = state.data.filter((product)=>product.id!==action.payload);
    state.data = filter;

}
      
        }

})

export default productSlice.reducer;
export const { loadproduct, updateProduct,deleteProduct} = productSlice.actions;
