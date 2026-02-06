
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
       <input className='w-full p-2 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl' {...register('image')} type="text" placeholder='Image URl....' required/>
       <input className='w-full p-2 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl' {...register('title')} type="text" placeholder='Title....' required/>
       <input className='w-full p-2 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl' {...register('price')} type="number" placeholder='Price....' required/>
       <textarea className='w-full p-2 bg-gradient-to-r from-blue-800 to-yellow-600 rounded-2xl pt-5' {...register('description')} placeholder='description...' ></textarea>
       <button className='bg-amber-300 w-1/4 rounded-xl p-2 bg-gradient-to-r from-blue-800 to-yellow-600 font-bold active:scale-95 transition delay-75 cursor-pointer'>Add</button>
     
   
  
  </form> 
}

export default CreateProduct