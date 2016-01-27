import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container login-wrap">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <a href="/">
            <div className="loggin-logo text-center">
              Snicket
            </div>
            </a>
            <div className="loggin-header text-center">
              Welcome to Snicket
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form accept-charset="UTF-8" role="form" onSubmit={this.handleSubmit}>
              <fieldset>
                <div className="form-group">
                  <TextField
                    fullWidth={true}
                    inputStyle={{color: '#fff'}}
                    floatingLabelStyle={{color: '#f3565d', fontSize: '0.85em'}}
                    floatingLabelText="Username" />
                </div>
                <div className="form-group">
                  <TextField
                    fullWidth={true}
                    inputStyle={{color: '#fff'}}
                    floatingLabelStyle={{color: '#f3565d', fontSize: '0.85em'}}
                    floatingLabelText="Password"
                    type="password" />
                </div>
                <input className="btn btn-lg u-btn-success btn-block" type="submit" value="Login" />
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
