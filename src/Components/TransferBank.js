import React from 'react';

const TransferBank = () => {
  return (
    <div>
          <div className="container-fluid ">
              <div className="row">
                  <div className="col-sm-2 col-md-4">
                  </div>
                  <div className="col-sm-8 col-md-4">
                      <form>
                          <div className="section p-4 rounded-3 bg-white shadow-lg">
                              <h4 className="form-heading mb-4 text-center">Wallet to bank</h4>
                              <div className="row py-2 pay">
                                  <div className="col">
                                      <h5>Transfer to</h5>
                                  </div>
                              </div>
                              <div className="row py-2 pay">
                                  <div className="col">
                                      <h6>Recent Bank Transfers</h6>
                                  </div>
                                  <br />
                                  <div className="container  border rounded">
                                      <div className="row p-2 pay ">
                                          <div className="col-2">
                                              <img src="img/avatar.webp" className="bankprofileAvatars" style={{ width: 52 }} />
                                          </div>
                                          <div className="col-8 ps-4">
                                              <h6>CODESOFTIC TECH</h6>
                                              <span>XXXXXXXXXX</span>
                                          </div>
                                          <div className="col-2 pt-2">
                                              <img src="img/SBI-logo.svg.png" className="bankprofileAvatars" style={{ width: 35 }} />
                                          </div>
                                      </div>
                                      <div className="row p-2 pay">
                                          <div className="col-2">
                                              <img src="img/avatar.webp" className="bankprofileAvatars" style={{ width: 52 }} />
                                          </div>
                                          <div className="col-8 ps-4">
                                              <h6>ABHINANDAN</h6>
                                              <span>XXXXXXXXXX</span>
                                          </div>
                                          <div className="col-2 pt-2">
                                              <img src="img/SBI-logo.svg.png" className="bankprofileAvatars" style={{ width: 35 }} />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div></form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default TransferBank;