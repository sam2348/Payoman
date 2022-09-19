import React from 'react';

const AddAccount = () => {
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
                    <img src="img/payoman-logo1.png" style={{width: 300}} />
                </div>
                <h5 className="form-heading mb-4 p-2 text-center">Add Account</h5>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Business Name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder=" Enter Business Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Bank Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Bank Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Account Number</label>
                    <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="xxxx xxxxx xxxx" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Swift Code</label>
                    <input type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="xxxx xxxxx xxxx" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary mb-3">Confirm</button>
                </div></form>
            </div>
        </div>
    </div>
 </div>
  )
}

export default AddAccount;