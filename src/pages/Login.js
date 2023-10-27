import React, { useState } from "react";

function Login({setLogin}) {
  // console.log(login)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler =()=>{
    console.log(email)
    console.log(password)
    if(email==='admin'&&password==='admin'){
        setLogin(true)
    }
  }
  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth px-0">
            <div className="row w-100 mx-0">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                  <div className="brand-logo">
                    <img src="../../images/logo.svg" alt="logo" />
                  </div>
                  <h4>Hello! let's get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3" >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="exampleInputEmail1"
                        placeholder="Username"
                        onChange={(e)=>setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}
                      />
                    </div>
                    <div className="mt-3">
                    <div className="my-2 d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <label className="form-check-label text-muted">
                          <input type="checkbox" className="form-check-input" />
                          Keep me signed in
                        </label>
                      </div>
                      <a href="#" className="auth-link text-black">
                        Forgot password?
                      </a>
                    </div>
                      <a
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        // href="../../index.html"
                        onClick={loginHandler}

                      >
                        SIGN IN
                      </a>
                    </div>
                    
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
