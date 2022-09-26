import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// import Moment from 'react-moment';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import { usePaystackPayment } from 'react-paystack';

function PaddedCard({
  title, image, button, name, date, path, price, brochure, user, id,
}) {
  // console.log(new Date().getTime().toString());
  // alert("ready to pay for course");
  // console.log({ user, id });
  const navigate = useNavigate();
  const config = {
    reference: new Date().getTime().toString(),
    email: user,
    amount: price * +100,
    publicKey: 'pk_test_90b0b4f27e85d2ddca3e39f86e14bee4cbe36694',
  };
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // console.log(reference);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/v1/payments/verify-resource-payment`, {
        email: user,
        reference: reference.reference,
        amount: price * +100,
        resourceID: id,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('elUsrT')}`,
        },
      })
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            toast.success(
              'You successfully purchased this resource, this resource has been forwarded to your mail box.',
              {
                position: 'top-right',
                autoClose: 15000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                // progress: undefined,
              },
            );
            toast.info(
              'You can check your dashboard, to access this resource anytime.',
              {
                position: 'top-right',
                autoClose: 30000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                // progress: undefined,
              },
            );
          }
        },
        (error) => {
          // console.log(error);

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
        },
      );
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    // console.log("closed");
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function UserPay() {
    const initializePayment = usePaystackPayment(config);
    return (
      <div>
        <div>
          <button
            type="button"
            className="link py-2 px-3 text-decoration-none fw-bold"
            to="/coursedetails"
            onClick={localStorage.getItem('elUsrT') ? () => {
              initializePayment(onSuccess, onClose);
            }
              : () => navigate('/auth/login', { state: { from: location.pathname } })}
          >
            {button}
          </button>
        </div>
      </div>
    );
  }

  return (
    path
      ? (
        <a href={path} className="text-decoration-none paddedcard__link h-100">
          <div className="card border-0 paddedcard p-4 px-lg-5 py-lg-5 pb-lg-5 pb-2 h-100">
            <div className="card-header bg-white border-0 m-0 p-0 h-100">
              <p className="paddedcard__title fw-bold lh-sm">
                {title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
              </p>
            </div>
            <div className="card-body m-0 p-0 h-100">
              <img
                src={image}
                alt=""
                className="img-fluid w-100 "
                style={{

                  borderRadius: '10px',
                }}
              />
            </div>
            <div className="card-footer bg-white border-0 p-0">
              {button ? (
                <div className="mt-4">
                  <Link to="/" className="link py-2 px-3 text-decoration-none fw-bold">
                    {button}
                  </Link>
                </div>

              )
                : (
                  <div className="row mt-3">
                    <div className=" text-center text-md-start">
                      <i className="fa-solid fa-user blog--icon pe-2" />
                      {name}
                    </div>
                    {/* <div className="col-md-6 text-center text-md-end">
                    {' '}
                    <i className="fa-solid fa-calendar blog--icon pe-2" />
                    <Moment format="Do MMMM, YYYY">
                      {date}
                    </Moment>
                  </div> */}
                  </div>
                )}
            </div>
          </div>
        </a>
      )
      : (
        <div className="card border-0 paddedcard p-4 px-lg-5 py-lg-5 pb-lg-5 pb-2  h-100">
          <ToastContainer />
          <div className="card-header bg-white border-0 m-0 p-0 h-100">
            <p className="paddedcard__title fw-bold lh-sm">
              {title.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())}
            </p>
          </div>
          <img src={image} alt="" className="img-fluid" />
          {/* <div className="card-body m-0 p-0 h-100">
            <div
              className="div"
              style={{
                background: `url(${image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height: '320px',
                borderRadius: '10px',
              }}
            />
          </div> */}
          <div className="card-footer bg-white border-0 p-0">
            {button ? (
              <div className="row mt-4 align-items-center">
                <div className="col-7">
                  {button !== 'Make payment'
                    ? (
                      <a type="button" href={brochure} className="link py-2 px-3 text-decoration-none fw-bold" download>
                        {button}
                      </a>
                    )
                    : (
                      <UserPay />
                    )}
                </div>
                <div className="col-5 text-end">
                  {price !== 0 && price ? (
                    <>
                      {/* <span className="fw-bold text-start pe-2">{discount}</span> */}
                      <span className="text-end ps-2 m-0 fw-bold">
                        &#x20A6;
                        {price.toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      </span>
                    </>
                  )
                    : <span className="fw-bold text-start pe-2">Free</span>}
                </div>
              </div>
            )
              : (
                <div className="row mt-4">
                  <div className="col-6 col-md-12 text-center text-start">{name}</div>
                  <div className="col-6 col-md-12 text-center text-end">{date}</div>
                </div>
              )}
          </div>
        </div>
      )
  );
}

PaddedCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  button: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
  path: PropTypes.string,
  // discount: PropTypes.string,
  price: PropTypes.number,
  brochure: PropTypes.string,
  user: PropTypes.string,
  id: PropTypes.string,
};

PaddedCard.defaultProps = {
  title: '',
  image: '',
  button: '',
  name: '',
  date: '',
  path: '',
  // discount: '',
  price: 0,
  brochure: '',
  user: '',
  id: '',
};
export default PaddedCard;
