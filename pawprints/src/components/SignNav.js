import React, { useState } from 'react';
import './SignNav.css';

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleRadioChange = (event) => {
    setIsSignUp(event.target.value === 'company');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://th.bing.com/th/id/R.165247a044f519c8a2f981f6ec1e89ca?rik=9%2fYKw%2fv0egKq3Q&pid=ImgRaw&r=0"
            alt="Cute puppy"
            className="img-fluid rounded-img"
          />
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body" style={{ padding: '30px' }}>
              <h1 className="card-title text-center">{isSignUp ? 'Company Sign Up' : 'Individual Sign Up'}</h1>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="signupType"
                  id="companySignUp"
                  value="company"
                  checked={isSignUp}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="companySignUp">
                  Company Sign Up
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="signupType"
                  id="individualSignUp"
                  value="individual"
                  checked={!isSignUp}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="individualSignUp">
                  Individual Sign Up
                </label>
              </div>

              {isSignUp ? (
                <form>
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="companyName">Company Name:</label>
                    <input type="text" className="form-control" id="companyName" name="companyName" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </form>
              ) : (
                <form>
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" name="username" required />
                  </div>
                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign Up
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
