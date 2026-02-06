// api or slice import karte hai actions me
import axios from '../../api/axios'
import {loaduser} from '../reducers/userSlice'
// import Login from './../../pages/Login';






export const asyncregisterfunction =(data)=>async (dispatch,getstate)=>{
      
    try {
        
   const res =  await axios.post('users',data);
   console.log(res);


    } catch (error) {
        console.log(error);
    }


}

export  const  asyncloginfunction =(user) =>async (dispatch ,getstate)=>{

      
    try {
         const {data} = await axios.get(`users?email=${user.email}&password=${user.password}`) ;
            if(data[0]) {localStorage.setItem('user',JSON.stringify(data[0]))
                dispatch(loaduser(data[0]))
               
            };
    } catch (error) {
        console.log(error)
    }

 




}


export  const  asynclogoutfunction =() =>async (dispatch ,getstate)=>{

      
    try {
        localStorage.removeItem('user');
        dispatch(loaduser(null));

    } catch (error) {
        console.log(error)
    }
   

 




}


export  const  asynccurrentfunction =() =>async (dispatch ,getstate)=>{

      
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        user?dispatch(loaduser(user)):console.log("User is logged out");
    } catch (error) {
        console.log(error)
    }

 




}




