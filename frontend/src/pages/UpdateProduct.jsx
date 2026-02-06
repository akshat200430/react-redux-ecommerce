import {useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux' 
import { asyncupdateproduct } from '../store/actions/productActions';
import { useOutletContext } from "react-router-dom";

const UpdateProduct = () => {
   const { product } = useOutletContext();
        
  const dispatch = useDispatch();
    

    const {
        register,
        handleSubmit,
      
    } = useForm({
      defaultValues:{
      image : product.image,
      title : product.title,
      price : product.price,
      description : product.description,
    }
    });
          if (!product) {
  return <div className="text-center py-10">Loading product...</div>;
}

    
     const productHandler=(data)=>{
         dispatch(asyncupdateproduct(product.id,data));

     }



return (
  <form
    onSubmit={handleSubmit(productHandler)}
    className="flex flex-col gap-6 border w-full  bg-white/10 backdrop-blur-lg border-white/20 shadow-lg rounded-xl p-6"
  >
    <input
      className="w-full p-3
            rounded-xl
            bg-slate-100
            border border-slate-300
            text-slate-800
            placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...register('image')}
      type="text"
      placeholder="Image URL..."
      required
    />

    <input
      className="w-full p-3
            rounded-xl
            bg-slate-100
            border border-slate-300
            text-slate-800
            placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...register('title')}
      type="text"
      placeholder="Title..."
      required
    />

    <input
      className="w-full p-3
            rounded-xl
            bg-slate-100
            border border-slate-300
            text-slate-800
            placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...register('price')}
      type="number"
      placeholder="Price..."
      required
    />

    <textarea
      className="w-full p-3
            rounded-xl
            bg-slate-100
            border border-slate-300
            text-slate-800
            placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...register('description')}
      placeholder="Description..."
    />

    <button className="w-full
            py-3
            rounded-xl
            bg-blue-600
            text-white
            font-semibold
            hover:bg-blue-700
            active:scale-95
            transition">
      Update
    </button>
  </form>
);


 
}

export default UpdateProduct



