import React from "react";

const Login = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div class="text-center">
            <h3>Login into your Account</h3>
          </div>
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example13">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="form1Example13"
                    className="form-control form-control-lg"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form1Example23">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form1Example23"
                    className="form-control form-control-lg"
                  />
                </div>
                <div>
                  <a href="#!">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-dark btn-lg">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
