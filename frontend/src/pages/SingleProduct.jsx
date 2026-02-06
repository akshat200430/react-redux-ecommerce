import React from 'react'
import {useParams , useNavigate ,Outlet,useMatch} from 'react-router-dom'
import { useSelector } from 'react-redux';
import {asyncdeleteproduct} from '../store/actions/productActions'
import {asyncaddtocart} from '../store/actions/cartActions'
import {useDispatch} from 'react-redux' 

const SingleProduct = () => {
            const isediting = useMatch('/products/:id/update-product');
          const {id} =useParams();
            const dispatch = useDispatch();

          const products = useSelector((state)=>state.product.data)
          const user = useSelector((state)=>state.user.data);
                   const navigate  =useNavigate()
             const isAdmin = !!user?.isAdmin;
             const ids = user?.id;
                const product = products?.find((product)=>product.id==id);
             if(!product){
                return <p>Product not found...</p>
             }
                
             const DeletHandler = ()=>{
                   dispatch(asyncdeleteproduct(id));
                   navigate('/products')
             }
             
             const cartHandler=()=>{
                 
              dispatch(asyncaddtocart(ids,id));


             }

             return (
  <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-5 py-8">
    
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-black/10">
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              {product.title}
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed">
              {product.description}
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-green-400">
              ₹{product.price}
            </h2>

            {isAdmin ? (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  disabled={isediting}
                  onClick={() => navigate('update-product')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition disabled:opacity-50"
                >
                  Edit
                </button>

                <button onClick={DeletHandler} className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button onClick={cartHandler} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition">
                  Add to Cart
                </button>

                <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
                  Buy Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <Outlet context={{ product }} />
      </div>

    </div>
  </div>
);

}

export default SingleProduct