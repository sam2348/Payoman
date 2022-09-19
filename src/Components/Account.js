import React,{ useState,useEffect } from 'react';

const Account = (props) => {
    let data = props.data
  const [match,setmatch]=useState()
  const LogoutHandler=()=>{
    setmatch(false)
  }
  const MangeData=()=>{
    setmatch(data)
  }
  useEffect(() => {
    MangeData()
  },[props])
  return (
    <>
    {match ? <>
        <div className="container-board">
              <div className="navbar-container">
                  <div className="row ">
                      <div className="col-sm-1 col-md-1 pt-2">
                          <img src="img/avatar.webp" className="bankprofileAvatars" style={{ width: 60 }} />
                      </div>
                      <div className="col-sm-7 col-md-7 pt-2">
                          <ul className="list-unstyled ">
                              <li><h5><strong>NAME OF BUSINESS</strong></h5></li>
                              <li><span>Name of the bank account</span></li>
                          </ul>
                      </div>
                      <div className="col-sm-2 col-md-2 pt-2">
                          <ul className="list-unstyled">
                              <li><span>Total Balance:</span></li>
                              <li><h4><strong>   OMR +5.00 </strong></h4></li>
                          </ul>
                      </div>
                      <div className="col-sm-2 col-md-2 pt-4">
                          <ul className="list-unstyled d-flex ">
                              <li><button type="submit" className="btn btn-primary add-money">
                                  <img src="img/top-up.png" style={{ width: 20 }} /> &nbsp;To Bank</button></li> &nbsp;
                              <li><button type="submit" className="btn btn-primary" onClick={LogoutHandler}>
                                  <img src="img/turn-off.png" style={{ width: 16 }} /></button></li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="banner">
                  <img src="img/payobanner.png" className="d-block w-100" alt="..." />
              </div>
              <div className="container-board">
                  <div className="row p-3">
                      <h5>Recent Payments</h5>
                      <span className="mb-2">September , 2022</span>
                      <div className="col-2 border pt-4 text-center">
                          <i className="fa-solid fa-building-columns " />
                      </div>
                      <div className="col-8 border pt-3">
                          <ul className="list-unstyled ">
                              <li>Money Received via UPI</li>
                              <li><span>13 Sept, 3:00AM</span></li>
                          </ul>
                      </div>
                      <div className="col-2 border pt-3  text-end">
                          OMR +5.00
                      </div>
                      <br />
                      <div className="col-2 border pt-4 text-center">
                          <i className="fa-solid fa-building-columns " />
                      </div>
                      <div className="col-8 border pt-3">
                          <ul className="list-unstyled ">
                              <li>Sent to Paani Restaurant Dhaba</li>
                              <li><span>10 Sept, 6:30PM</span></li>
                          </ul>
                      </div>
                      <div className="col-2 border pt-3  text-end">
                          OMR -3.00
                      </div>
                      <br />
                      <div className="col-2 border pt-4 text-center">
                          <i className="fa-solid fa-building-columns " />
                      </div>
                      <div className="col-8 border pt-3">
                          <ul className="list-unstyled ">
                              <li>Money Received via UPI</li>
                              <li><span>01 Sept, 9:00PM</span></li>
                          </ul>
                      </div>
                      <div className="col-2 border pt-3  text-end">
                          OMR +20.00
                      </div>
                      <br />
                      <div className="col-2 border pt-4 text-center">
                          <i className="fa-solid fa-building-columns " />
                      </div>
                      <div className="col-8 border pt-3">
                          <ul className="list-unstyled ">
                              <li>Money Received via UPI</li>
                              <li><span>28 Aug, 5:00PM</span></li>
                          </ul>
                      </div>
                      <div className="col-2 border pt-3  text-end">
                          OMR +15.00
                      </div>
                  </div>
              </div>
              <div className="banner">
                  <img src="img/payobanner.png" className="d-block w-100" alt="..." />
              </div>
          </div>
    </>
    :
    <></>
    }
    </>
  )
}

export default Account;