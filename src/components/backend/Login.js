import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Login extends Component{
    render(){
        return(
            <div>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content />
            <meta name="author" content />
            <title>Login - SB Admin</title>
            <link href="css/styles.css" rel="stylesheet" />
            <div id="layoutAuthentication">
              <div id="layoutAuthentication_content">
                <main>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                          <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                          <div className="card-body">
                            <form>
                              <div className="form-floating mb-3">
                                <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                <label htmlFor="inputEmail">Email address</label>
                              </div>
                              <div className="form-floating mb-3">
                                <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                                <label htmlFor="inputPassword">Password</label>
                              </div>
                              <div className="form-check mb-3">
                                <input className="form-check-input" id="inputRememberPassword" type="checkbox" defaultValue />
                                <label className="form-check-label" htmlFor="inputRememberPassword">Remember Password</label>
                              </div>
                              <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                <a className="small" href="/passwordreset">Forgot Password?</a>
                                <a className="btn btn-primary" href="admin">Login</a>
                              </div>
                            </form>
                          </div>
                          <div className="card-footer text-center py-3">
                            <div className="small"><a href="/reginster">Need an account? Sign up!</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
              <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                  <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                      <div className="text-muted">Copyright © Your Website 2021</div>
                      <div>
                        <a href="#">Privacy Policy</a>
                        ·
                        <a href="#">Terms &amp; Conditions</a>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        )
    }
}
export default Login