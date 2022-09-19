import React, { useState } from "react";
import Account from "./Components/Account";
import AddAccount from "./Components/AddAccount";
import TransferBank from "./Components/TransferBank";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import { Routes,Route } from 'react-router-dom';

function App() {
  const [data,setData]=useState()
  const ChangeRoute =(value)=>{
    setData(value)
  }

  return (
    <>
    < Account data={data} />
      <Routes>
        <Route element={ < PrivateRoute />} >
        <Route path='/TransferBank' element={ < TransferBank />} />
        <Route path='/' element={ < AddAccount />} />
        {/* <Route path='/Account' element={<Account />} /> */}
        </Route>
        <Route path='/Signup' element={ < Signup />} />
        <Route path='/Login' element={ < Login ChangeRoute={ChangeRoute}/>} />
      </Routes>
    </>
  );
}

export default App;
