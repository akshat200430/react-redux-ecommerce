
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux' 
import { asynccreateproduct } from './../../store/actions/productActions';
import {nanoid} from 'nanoid'
 import {toast} from 'react-toastify'
const CreateProduct = () => {
    const dispatch = useDispatch();


    const {
        register,
        handleSubmit,
        reset
    } = useForm();
         
    
     const productHandler=(data)=>{
          data.id =nanoid();
         dispatch(asynccreateproduct(data));
         reset();
        
             toast.success(`Product is created`);
         
     }


  return <form onSubmit={handleSubmit(productHandler)} className='  flex flex-col max-h-[100%] mt-5 items-center mx-auto gap-8 border w-[90%] sm:w-full lg:w-1/2 lg:my-20   bg-white/10 backdrop-blur-lg  border-white/20 shadow-lg rounded-xl p-6 '>
       <input className=' w-full p-3
            rounded-xl
            bg-slate-100
            border border-slate-300
            text-slate-800
            placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500' {...register('image')} type="text" placeholder='Image URl....' required/>
       <input className='w-full p-3
            rounded-xl
            bg-slate-100
            border border-slate-300
            text-slate-800
            placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500' {...register('title')} type="text" placeholder='Title....' required/>
       <input className='w-full p-3
            rounded-xl
            bg-slate-100
            border border-slate-300
            text-slate-800
            placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500' {...register('price')} type="number" placeholder='Price....' required/>
       <textarea className='w-full p-3
            rounded-xl
            bg-slate-100
            border border-slate-300
            text-slate-800
            placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-blue-500 pt-5' {...register('description')} placeholder='description...' ></textarea>
       <button className= 'w-full
            py-3
            rounded-xl
            bg-blue-600
            text-white
            font-semibold
            hover:bg-blue-700
            active:scale-95
            transition'>Add</button>
     
   
  
  </form> 
}

export default CreateProduct