

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import Loader from "./components/Loader";

import { asynccurrentfunction } from "./store/actions/userActions";
import { asyncproductrender } from "./store/actions/productActions";
import { asyncloadcart } from "./store/actions/cartActions";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const initApp = async () => {
      try {
     
        await dispatch(asynccurrentfunction());
        await dispatch(asyncproductrender());
        await dispatch(asyncloadcart());
      } catch (err) {
        console.error( err);
      } finally {
        setLoading(false); 
      }
    };

    initApp();
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex flex-col w-screen bg-gradient-to-r from-gray-950 via-indigo-800 to-yellow-400">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
