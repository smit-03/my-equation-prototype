import React from 'react';
import './Query.css';
function Query() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src="images/query.svg" alt="IMG" />
          </div>

          <form className="login100-form validate-form">
            <span className="login100-form-title">Have any Doubts?&nbsp;Reach out to us.</span>

            <div className="wrap-input100 validate-input">
              <input className="input100" type="text" placeholder="Full Name" />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input">
              <input className="input100" type="text" name="mobile" placeholder="Phone No." />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input className="input100" type="text" name="email" placeholder="Email" />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input">
              <textarea className="input100 textarea100" placeholder="Write a message..." />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                <a>Submit</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Query;
