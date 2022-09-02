import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignupCard() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [occupation, setOccupation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');

  // const Navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors('');
      setLoading(true);
      axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/auth/register`, {
        name,
        email,
        password,
        confirmPassword,
        phone: number,
        occupation,
      }).then((response) => {
        // console.log(response);
        if (response) {
          setLoading(false);

          // CLEAR INPUT FIELDS AFTER SUCCCESSFULLY SIGNING
          setName('');
          setEmail('');
          setNumber('');
          setOccupation('');
          setPassword('');
          setConfirmPassword('');
          toast.success(
            response?.data?.msg,
            {
              position: 'top-right',
              autoClose: 8000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            },
          );
        }
      }, (error) => {
        // console.log(error);
        setLoading(false);
        if (error.response) {
          error.response.data.errors.map((err) => toast.error(`${err.message}`, {
            position: 'top-right',
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }));
        } else {
          toast.error('Ops, something went wrong, please try again', {
            position: 'top-right',
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    } else {
      setErrors('Ensure passwords are the same for both fields');
    }
  };

  return (
    <div className="signup py-5">
      <ToastContainer />
      <div className="signup__card p-3 p-lg-5 mx-auto mb-lg-5">
        <form onSubmit={Submit}>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="name">
              Full Name
            </label>
            {' '}
            <input type="text" className="name p-3 my-2 signup__card--input" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="email">
              Email Address
            </label>
            <input type="email" className="name p-3 my-2 w-100 signup__card--input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="row py-2 px-lg-5">
            <div className="col-md-6">
              <label className="p-0" htmlFor="email">
                Number
              </label>
              <input type="number" className="name p-3 my-2 w-100 signup__card--input" value={number} onChange={(e) => setNumber(e.target.value)} required />
            </div>
            <div className="col-md-6">
              <label className="p-0" htmlFor="occupation">
                Occupation
              </label>
              <input type="text" className="name p-3 my-2 signup__card--input" value={occupation} id="occupation" onChange={(e) => setOccupation(e.target.value)} required />
            </div>
          </div>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="password">
              Password
            </label>
            <input type="password" className="name p-3 my-2 signup__card--input" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <p className="signup__card--error"><small>{errors}</small></p>
          </div>
          <div className="py-2 px-lg-5">
            <label className="p-0" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input type="password" className="name p-3 my-2 signup__card--input" id="confirm-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            <p className="signup__card--error"><small>{errors}</small></p>
          </div>
          <div className="py-2 px-lg-5">
            Already have an account?
            <span>
              <Link to="/auth/login" className="signup__card--link text-decoration-underline fw-bold"> Login</Link>
            </span>
          </div>
          <div className="py-3 py-lg-4 px-0 mx-0 px-lg-5">
            {loading ? (
              <button type="button" className="link btn fw-bold py-3 px-5 me-0 signup__card--button " disabled>
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </button>
            )
              : (
                <button type="submit" className="link btn fw-bold py-3 px-5 me-0 signup__card--button">
                  Create your Account
                </button>
              )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupCard;
