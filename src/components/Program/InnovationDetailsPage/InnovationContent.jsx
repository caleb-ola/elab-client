import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import {
  useLocation, useNavigate, useParams,
} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import { PropTypes } from 'prop-types';
import Moment from 'react-moment';
import { usePaystackPayment } from 'react-paystack';

function MyVerticallyCenteredModal({ onHide, show, modal }) {
  const navigate = useNavigate();
  const config = {
    reference: new Date().getTime().toString(),
    email: modal.email,
    amount: modal.amount * +100,
    publicKey: 'pk_test_90b0b4f27e85d2ddca3e39f86e14bee4cbe36694',
  };
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    // console.log(reference);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/v1/payments/verify-workspace-payment`, {
        email: modal.email,
        reference: reference.reference,
        amount: modal.amount * +100,
        bookingID: modal.id,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('elUsrT')}`,
        },
      })
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            // navigate('/dashboard/user/cowork');
            toast.success(
              'You successfully subsribed to our workspace plan, we look forward to having you.  ',
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
            className="link px-5 py-3 text-decoration-none fw-bold"
            to="/coursedetails"
            onClick={localStorage.getItem('elUsrT') ? () => {
              initializePayment(onSuccess, onClose);
            }
              : () => navigate('/auth/login', { state: { from: location.pathname } })}
          >
            Make payment
          </button>
        </div>
      </div>
    );
  }
  // console.log(modal);
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="border-0 pe-md-3 pe-lg-5 pt-md-3 pt-lg-5 pb-0 me-md-3">
        <i className="fa-solid fa-circle-xmark fa-2x btn-close shadow-none benefits__close" role="button" data-bs-dismiss="modal" aria-label="Close" onClick={onHide} aria-hidden="true" />
      </Modal.Header>
      <Modal.Body className="pt-0">
        <div className="summary__card mx-md-5 p-lg-5 pt-0 pt-lg-0">
          <h4 className="fw-normal pb-2">Package Summary</h4>
          <h4 className="">
            NGN
            {' '}
            {modal.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </h4>
          <div className="py-3">
            <div className="row">
              <div className="col-sm-6 col-lg-5">
                <p className="mb-1 fw-bold">Duration:</p>
              </div>
              <div className="col-sm-6 col-lg-7">
                <p className="mb-1 ">{modal.duration}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-5">
                <p className="mb-1 fw-bold">Date:  </p>
              </div>
              <div className="col-sm-6 col-lg-7">
                <p className="mb-1 ">
                  <Moment format="Do MMMM, YYYY">
                    {modal.startDate}
                  </Moment>
                  {' '}
                  ---
                  {' '}
                  <Moment format="Do MMMM, YYYY">
                    {modal.endDate}
                  </Moment>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-5">
                <p className="mb-1 fw-bold">Number of People:  </p>
              </div>
              <div className="col-sm-6 col-lg-7">
                <p className="mb-1 ">
                  {modal.noOfPersons > 1 ? `${modal.noOfPersons} people` : `${modal.noOfPersons} person`}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-5">
                <p className="mb-1 fw-bold">Internet:  </p>
              </div>
              <div className="col-sm-6 col-lg-7">
                <p className="mb-1 ">{modal.internet ? 'Yes' : 'No'}</p>
                {' '}
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-5">
                <p className="mb-1 fw-bold">Office address usage:  </p>
              </div>
              <div className="col-sm-6 col-lg-7">
                <p className="mb-1 ">{modal.address ? 'Yes' : 'No'}</p>
              </div>
            </div>
            {/* <p className="mb-1">Date: 26th Oct; - 25th Nov; 2022</p>
            <p className="mb-1">Number of person: 2</p>
            <p className="mb-1">Internet: No</p>
            <p className="mb-1">Office address usage: Yes</p> */}
          </div>
          <div className="my-3 my-lg-4">
            {/* <button type="submit" className="link px-5 py-3 fw-bold">Make payment </button> */}
            <UserPay />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function InnovationContent() {
  const [res, setRes] = useState();
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [noOfPersons, setNoOfPersons] = useState('1');
  const [useInternet, setUseInternet] = useState(false);
  const [address, setAddress] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [occurence, setOccurence] = useState('hours');
  const [frequency, setFrequency] = useState('1');
  const [currentUserEmail, setCurrentUserEmail] = useState();
  const [skeleton, setSkeleton] = useState(
    <p>
      <Skeleton count={4} height={20} />
      <Skeleton count={1} height={20} width="60%" />
    </p>,
  );
  const [modal, setModal] = useState({
    email: '',
    plan: '',
    amount: 0,
    noOfPersons: 0,
    startDate: '',
    endDate: '',
    duration: '',
    internet: false,
    address: false,
  });
  // const [planSlug, setplanSlug] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const [modalShow, setModalShow] = React.useState(false);
  // const handleShow = () => setShow(true);

  const [category, setCategory] = useState({
    hourly: true,
    daily: false,
    weekly: false,
    monthly: false,
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/users/current-user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('elUsrT') ? localStorage.getItem('elUsrT') : localStorage.getItem('elAdmT')}`,
      },
    }).then((response) => {
      // console.log(response);
      setCurrentUserEmail(response.data.data.email);
    });
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/workspaces/${params.slug}`).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        setSkeleton();
        setRes(response.data.data);
        // setplanSlug(response.data.data.slug);
        // openModal();
      },
      (error) => {
        // console.log(error);
        if (error.response) {
          error.response.data.errors.map((err) => toast.error(`${err.message}`, {
            position: 'top-right',
            autoClose: 15000,
            hideProgressBar: true,
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
  }, []);
  const createMarkup = () => ({ __html: res && res.description });

  const Submit = (e) => {
    e.preventDefault();
    setBtnLoading(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/bookings/book-space`, {
      plan: params.slug,
      occurence,
      frequency,
      email: currentUserEmail,
      noOfPersons,
      useInternet,
      useOfficeAddress: address,
      startDate,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elUsrT')}`,
      },
    }).then((response) => {
      // console.log(response);
      if (response) {
        const { data } = response.data;
        setBtnLoading(false);
        // navigate(`/program/innovation-hub/${response.data.data.id}/summary`);
        // setShow('#coworkModal');
        setModal({
          id: data.id,
          email: data.email,
          plan: data.plan,
          amount: data.amount,
          noOfPersons: data.noOfPersons,
          startDate: data.startDate,
          endDate: data.expDate,
          duration: data.duration,
          internet: data.useInternet,
          address: data.useOfficeAddress,
        });
        setModalShow(true);
      }
    }, (error) => {
      setBtnLoading(false);
      error.response.data.errors.map((err) => (err.message.includes('not logged in') && navigate('/auth/login', { state: { from: location.pathname } })));

      if (error.response) {
        error.response.data.errors.map((err) => toast.error(`${err.message}`, {
          position: 'top-right',
          autoClose: 15000,
          hideProgressBar: true,
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
  };
  const [body, setBody] = useState(
    <div className="col-md-6">
      <p className="m-0">No. of hours</p>
      <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none" onChange={(e) => setFrequency(e.target.value)} required>
        <option className="innovation__input--option" value="1">1 Hour</option>
        <option className="innovation__input--option" value="2">2 Hours</option>
        <option className="innovation__input--option" value="3">3 Hours</option>
        <option className="innovation__input--option" value="4">4 Hours</option>
        <option className="innovation__input--option" value="1">5 Hours</option>
        <option className="innovation__input--option" value="2">6 Hours</option>
        <option className="innovation__input--option" value="3">7 Hours</option>
        <option className="innovation__input--option" value="4">8 Hours</option>
      </select>
    </div>,
  );

  const Daily = () => {
    setCategory({
      hourly: false,
      daily: true,
      weekly: false,
      monthly: false,
    });
    setOccurence('days');
    setBody(
      <div className="col-md-6">
        <p className="m-0">No. of days</p>
        <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none" onChange={(e) => setFrequency(e.target.value)} required>
          <option className="innovation__input--option" value="1">1 Day</option>
          <option className="innovation__input--option" value="2">2 Days</option>
          <option className="innovation__input--option" value="3">3 Days</option>
          <option className="innovation__input--option" value="4">4 Days</option>
        </select>
      </div>,
    );
  };

  const Hourly = () => {
    setCategory({
      hourly: true,
      daily: false,
      weekly: false,
      monthly: false,
    });
    setOccurence('hours');
    setBody(
      <div className="col-md-6">
        <p className="m-0">No. of hours</p>
        <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none" onChange={(e) => setFrequency(e.target.value)} required>
          <option className="innovation__input--option" value="1">1 Hour</option>
          <option className="innovation__input--option" value="2">2 Hours</option>
          <option className="innovation__input--option" value="3">3 Hours</option>
          <option className="innovation__input--option" value="4">4 Hours</option>
          <option className="innovation__input--option" value="1">5 Hours</option>
          <option className="innovation__input--option" value="2">6 Hours</option>
          <option className="innovation__input--option" value="3">7 Hours</option>
          <option className="innovation__input--option" value="4">8 Hours</option>
        </select>
      </div>,
    );
  };

  const Weekly = () => {
    setCategory({
      hourly: false,
      daily: false,
      weekly: true,
      monthly: false,
    });
    setOccurence('weeks');
    setBody(
      <div className="col-md-6">
        <p className="m-0">No. of weeks</p>
        <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none" onChange={(e) => setFrequency(e.target.value)} required>
          <option className="innovation__input--option" value="1">1 Week </option>
          <option className="innovation__input--option" value="2">2 Weeks</option>
          <option className="innovation__input--option" value="3">3 Weeks</option>
        </select>
      </div>,
    );
  };

  const Monthly = () => {
    setCategory({
      hourly: false,
      daily: false,
      weekly: false,
      monthly: true,
    });
    setOccurence('months');
    setBody(
      <div className="col-md-6">
        <p className="m-0">No. of months</p>
        <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none" onChange={(e) => setFrequency(e.target.value)} required>
          <option className="innovation__input--option" value="1">1 Month </option>
          <option className="innovation__input--option" value="2">2 Months</option>
          <option className="innovation__input--option" value="3">3 Months</option>
          <option className="innovation__input--option" value="1">4 Months </option>
          <option className="innovation__input--option" value="2">5 Months</option>
          <option className="innovation__input--option" value="3">6 Months</option>
          <option className="innovation__input--option" value="1">7 Months </option>
          <option className="innovation__input--option" value="2">8 Months</option>
        </select>
      </div>,
    );
  };

  // console.log({
  //   occurence, frequency, noOfPersons, useInternet, address, startDate, currentUserEmail,
  // });
  return (
    <div className="innovation__content py-5" id="innovation__content">
      <ToastContainer />
      <MyVerticallyCenteredModal
        modal={modal}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="container py-lg-5">
        <div className="row py-5 align-items-center ">
          <div className="col-lg-6 my-3">
            <img src={res?.image} alt="" className="img-fluid rounded-3 innovation__content--image w-100" />
          </div>
          <div className="col-lg-6 my-3 px-lg-5">
            <h4 className="py-2">
              {res?.title}
            </h4>
            <div className="py-0">
              <h6 className="">
                <span className="innovation__content--discount pe-3">
                  NGN
                  {' '}
                  {res && (res.pricePerHour - Math.ceil(res.pricePerHour * (res.discount / 100)))
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                <span className="innovation__content--price">
                  NGN
                  {res?.pricePerHour.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </h6>
            </div>

            <div className="">
              <p className="m-0">Duration</p>
              <nav className="nav innovation__nav pb-2">
                <button type="button" className={category.hourly ? 'px-3 py-1 btn innovation__content--btn my-1 me-2 active' : 'px-3 py-1 btn innovation__content--btn my-1 me-2'} onClick={Hourly}>Hourly</button>
                <button type="button" className={category.daily ? 'px-3 py-1 btn innovation__content--btn my-1 me-2 active' : 'px-3 py-1 btn innovation__content--btn my-1 me-2'} onClick={Daily}>Daily</button>
                <button type="button" className={category.weekly ? 'px-3 py-1 btn innovation__content--btn my-1 me-2 active' : 'px-3 py-1 btn innovation__content--btn my-1 me-2'} onClick={Weekly}>Weekly</button>
                <button type="button" className={category.monthly ? 'px-3 py-1 btn innovation__content--btn my-1 me-2 active' : 'px-3 py-1 btn innovation__content--btn my-1 me-2'} onClick={Monthly}>Monthly</button>
              </nav>
            </div>
            <form onSubmit={Submit}>
              <div className="row">
                {body}
                <div className="col-md-6">
                  <p className="m-0">No. of persons</p>
                  <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none" onChange={(e) => setNoOfPersons(e.target.value)} required>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="py-2 col-md-12">
                  <p className="m-0">Start date:</p>
                  <input type="date" className="px-3 py-2 my-1 w-100 innovation__input" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                {/* <div className="py-2 col-md-6">
                  <p className="m-0">End date:</p>
                  <input type="date" className="px-3 py-2 my-1 w-100 innovation__input"
                  value={endDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div> */}
              </div>
              <div className="row">
                <div className="py-2 col-6">
                  <p className="m-0">Internet:</p>
                  <div className="form-check form-switch">
                    <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={(e) => setUseInternet(e.target.checked)} />
                  </div>
                </div>
                <div className="py-2 col-6">
                  <p className="m-0">Office address usage:</p>
                  <div className="form-check form-switch">
                    <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefaul" onChange={(e) => setAddress(e.target.checked)} />
                  </div>
                </div>
              </div>
              <div className="my-2">
                {
              btnLoading
                ? (
                  <button type="button" className="link btn fw-bold py-3 px-5 me-0 innovation--button" disabled>
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                )
                : (
                  <button type="submit" className="link btn fw-bold py-3 px-5 me-0 innovation--button">
                    Proceed
                  </button>
                )
              }
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h5 className="">Description of the space</h5>
            {loading ? skeleton : res
              && (
              <>
                {/* eslint-disable-next-line react/no-danger */}
                <div className="markup" dangerouslySetInnerHTML={createMarkup()} />
              </>
              )}
          </div>
          <div className="col-md-6" />
        </div>
      </div>
    </div>
  );
}

MyVerticallyCenteredModal.propTypes = {
  onHide: PropTypes.func,
  show: PropTypes.bool,
  modal: PropTypes.shape({
    email: PropTypes.string,
    id: PropTypes.string,
    plan: PropTypes.string,
    amount: PropTypes.number,
    noOfPersons: PropTypes.number,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    duration: PropTypes.string,
    internet: PropTypes.bool,
    address: PropTypes.bool,
  }),
};
MyVerticallyCenteredModal.defaultProps = {
  onHide: '',
  show: '',
  modal: {},
};

export default InnovationContent;
