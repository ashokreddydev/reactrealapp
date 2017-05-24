import React  from 'react';
import logo  from './images/main-logo.png';


class Login extends React.Component {
  render() {
    return (
      <div>
        
        

  <div className="login-body cust-body">

    <div className="container">

      <form className="form-signin" action="index.html">
        <img src={logo} alt="logo" className="img-responsive"/>
        <div className="login-wrap">
            <div className="user-login-info" id="cust-login">
				<input placeholder="Username" id="user" type="text" required />
				<input placeholder="Password" type="password" required />
			</div>
                <label className="active customlabel">
				  <input type="checkbox" name='email1' /><i className="fa fa-square-o"></i><i className="fa fa-check-square-o"></i> <span> Remember Password</span>
				</label>
				<span className="pull-right">
                    <a data-toggle="modal" href="#forgotpwd"> Forgot Password?</a>
                </span>
            <button className="btn btn-lg btn-login btn-block" id="SignIn" type="submit">Sign in</button>

            <div className="registration">
                Don't have an account yet?
                <a className="" href="registration.html">
                    Create an account
                </a>
            </div>
        </div>
         
          <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabIndex="-1" id="forgotpwd" className="modal fade">
              <div className="modal-dialog">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                          <h4 className="modal-title">Forgot Password ?</h4>
                      </div>
                      <div className="modal-body">
							<div className="row">
								<div className="col-md-8 col-md-offset-2">
									<div className="" id="cust-login">
										<input placeholder="Email" type="email" required />
									</div>
								</div>
							</div>
                      </div>
                      <div className="modal-footer">
                          <button data-dismiss="modal" className="danger-btn" type="button">Cancel</button>
                          <button className="main-btn" type="button">Submit</button>
                      </div>
                  </div>
              </div>
          </div>
         
      </form>
    </div>
    
  </div>


      </div>
    );
  }
}

export default Login;
