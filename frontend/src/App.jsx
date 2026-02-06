import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentfunction } from "./store/actions/userActions";
import { asyncproductrender } from "./store/actions/productActions";
import { asyncloadcart } from "./store/actions/cartActions";

const App = () => {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user?.data?.id);

  useEffect(() => {
    dispatch(asynccurrentfunction());
    dispatch(asyncproductrender());
  }, []);

  useEffect(() => {
    if (userId) {
      dispatch(asyncloadcart(userId));
    }
  }, [userId]);

  return (
    <div className="min-h-screen flex flex-col w-screen bg-gradient-to-r from-gray-950 via-indigo-800 to-yellow-400">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
