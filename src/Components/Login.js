import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = ({ChangeRoute}) => {
    const LoginHandler=()=>{
        ChangeRoute(true);
    }
  return (
    <div>
        <div className="container-fluid">
              <div className="row">
                  <div className="col-sm-2 col-md-4">  
                  </div>
                  <div className="col-sm-8 col-md-4">
                      <form>
                          <div className="section p-4 bg-white border shadow-lg rounded-3">
                              <div className="logo text-center">
                                  <img src="img/payoman-logo1.png" style={{ width: 300 }} />
                              </div>
                              <h5 className="form-heading mb-4 p-2 text-center">Login to payoman</h5>
                              <div className="input-group mb-3">
                                  <input type="text" className="form-control" id="exampleInputNumber1" placeholder="Enter phone number" />
                              </div>
                              <div className="input-group mb-3">
                                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" />
                              </div>
                              <div className="input-group ">
                                  <div className="col-sm-6 ">
                                      <label className="checkbox-inline d-flex align-items-center m-0">
                                          <input type="checkbox" className="form-check-input" defaultChecked="checked" name="remember" id="flexCheckDefault" /><span className="check-symbol" />
                                          <span className="ms-2">Stay logged in</span>
                                      </label>
                                  </div>
                                  <div className="col-sm-6 text-end">
                                      <a href>Forgot Password?</a>
                                  </div>
                              </div>
                              <br />
                              <button type="button" className="btn btn-primary" onClick={LoginHandler} ><i className="fa-solid fa-right-to-bracket" /> Login </button>
                              <div className="row mt-1">
                                  <div className="col mt-2 pt-2 text-center">
                                      Don't have account?  <NavLink to="/Signup" className="bottom-text">Register now</NavLink>
                                  </div>
                              </div>
                        </div>
                    </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Login