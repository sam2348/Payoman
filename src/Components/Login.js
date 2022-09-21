import React,{useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate =useNavigate();
    const LoginHandler = () => {
        localStorage.setItem('login',true)
        navigate('/')
      };
      useEffect(() => {
        let login = localStorage.getItem('login');
        if(login){
          navigate('/')
        }
      })
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
                                  <div className="col-sm text-end">
                                      <NavLink to="/ForgetPassword">Forgot Password?</NavLink>
                                  </div>
                              </div>
                              <br />
                              <button type="button" className="btn btn-primary" onClick={LoginHandler} > Login&nbsp; <i className="fa-solid fa-right-to-bracket" /></button>
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