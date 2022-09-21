import React, { useState } from "react";
import Account from "./Components/Account";
import AddAccount from "./Components/AddAccount";
import TransferBank from "./Components/TransferBank";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import PrivateRoute from "./Components/PrivateRoute";
import ForgetPassword from "./Components/ForgetPassword";
import PaymentProcess from "./Components/PaymentProcess";
import PasswordReset from "./Components/PasswordReset";
import { Routes,Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/PaymentProcess' element={ < PrivateRoute Component={PaymentProcess} />} />
        <Route path='/TransferBank' element={ < PrivateRoute Component={TransferBank} />} />
        <Route path='/AddAccount' element={ < PrivateRoute Component={AddAccount} />} />
        <Route path='/' element={< PrivateRoute Component={Account} />} />
        <Route path='/*' element={ < Navigate to="/" />} />
        <Route path='/ForgetPassword' element={ < ForgetPassword/> } />
        <Route path='/PasswordReset' element={ < PasswordReset/> } />
        <Route path='/Signup' element={ < Signup />} />
        <Route path='/Login' element={ < Login />} />
      </Routes>
    </>
  );
}

export default App;
