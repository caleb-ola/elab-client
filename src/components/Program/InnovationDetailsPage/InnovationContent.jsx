import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function InnovationContent() {
  const [res, setRes] = useState();
  const [loading, setLoading] = useState(true);
  const [skeleton, setSkeleton] = useState(
    <p>
      <Skeleton count={4} height={20} />
      <Skeleton count={1} height={20} width="60%" />
    </p>,
  );
  // const [planSlug, setplanSlug] = useState();
  const params = useParams();
  const [category, setCategory] = useState({
    hourly: true,
    daily: false,
    weekly: false,
    monthly: false,
  });
  useEffect(() => {
    axios.get(`https://elab-api.herokuapp.com/api/v1/workspaces/${params.slug}`).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        setSkeleton();
        setRes(response.data.data);
        // setplanSlug(response.data.data.slug);
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
  // eslint-disable-next-line

  const [body, setBody] = useState(
    <form>
      <div className="row">
        <div className="col-md-6">
          <p className="m-0">No. of hours</p>
          <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
            <option className="innovation__input--option" value="1">1 Hour</option>
            <option className="innovation__input--option" value="2">2 Hours</option>
            <option className="innovation__input--option" value="3">3 Hours</option>
            <option className="innovation__input--option" value="4">4 Hours</option>
            <option className="innovation__input--option" value="1">5 Hours</option>
            <option className="innovation__input--option" value="2">6 Hours</option>
            <option className="innovation__input--option" value="3">7 Hours</option>
            <option className="innovation__input--option" value="4">8 Hours</option>
          </select>
        </div>
        <div className="col-md-6">
          <p className="m-0">No. of persons</p>
          <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="py-2 col-md-6">
          <p className="m-0">Start date:</p>
          <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
        </div>
        <div className="py-2 col-md-6">
          <p className="m-0">End date:</p>
          <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
        </div>
      </div>
      <div className="row">
        <div className="py-2 col-md-6">
          <p className="m-0">Internet:</p>
          <div className="form-check form-switch">
            <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          </div>
        </div>
        <div className="py-2 col-md-6">
          <p className="m-0">Office address usage:</p>
          <div className="form-check form-switch">
            <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefaul" />
          </div>
        </div>
      </div>
      <div className="my-2">
        <button type="submit" className="link px-4 py-2 fw-bold">Make payment </button>
      </div>
    </form>,
  );

  const Daily = () => {
    setCategory({
      hourly: false,
      daily: true,
      weekly: false,
      monthly: false,
    });
    setBody(
      <form>
        <div className="row">
          <div className="col-md-6">
            <p className="m-0">No. of days</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
              <option className="innovation__input--option" value="1">1 Day</option>
              <option className="innovation__input--option" value="2">2 Days</option>
              <option className="innovation__input--option" value="3">3 Days</option>
              <option className="innovation__input--option" value="4">4 Days</option>
            </select>
          </div>
          <div className="col-md-6">
            <p className="m-0">No. of persons</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Start date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">End date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
        </div>
        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Internet:</p>
            <div className="form-check form-switch">
              <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">Office address usage:</p>
            <div className="form-check form-switch">
              <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefaul" />
            </div>
          </div>
        </div>
        <div className="my-2">
          <button type="submit" className="link px-4 py-2 fw-bold">Make payment </button>
        </div>
      </form>,
    );
  };

  const Hourly = () => {
    setCategory({
      hourly: true,
      daily: false,
      weekly: false,
      monthly: false,
    });
    setBody(
      <form>
        <div className="row">
          <div className="col-md-6">
            <p className="m-0">No. of hours</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
              <option className="innovation__input--option" value="1">1 Hour</option>
              <option className="innovation__input--option" value="2">2 Hours</option>
              <option className="innovation__input--option" value="3">3 Hours</option>
              <option className="innovation__input--option" value="4">4 Hours</option>
              <option className="innovation__input--option" value="1">5 Hour</option>
              <option className="innovation__input--option" value="2">6 Hours</option>
              <option className="innovation__input--option" value="3">7 Hours</option>
              <option className="innovation__input--option" value="4">8 Hours</option>
            </select>
          </div>
          <div className="col-md-6">
            <p className="m-0">No. of persons</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Start date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">End date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
        </div>
        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Internet:</p>
            <div className="form-check form-switch">
              <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">Office address usage:</p>
            <div className="form-check form-switch">
              <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefaul" />
            </div>
          </div>
        </div>
        <div className="my-2">
          <button type="submit" className="link px-4 py-2 fw-bold">Make payment </button>
        </div>
      </form>,
    );
  };

  const Weekly = () => {
    setCategory({
      hourly: false,
      daily: false,
      weekly: true,
      monthly: false,
    });
    setBody(
      <form>
        <div className="row">
          <div className="col-md-6">
            <p className="m-0">No. of weeks</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
              <option className="innovation__input--option" value="1">1 Week </option>
              <option className="innovation__input--option" value="2">2 Weeks</option>
              <option className="innovation__input--option" value="3">3 Weeks</option>
            </select>
          </div>
          <div className="col-md-6">
            <p className="m-0">No. of persons</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Start date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">End date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
        </div>
        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Internet:</p>
            <div className="form-check form-switch">
              <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">Office address usage:</p>
            <div className="form-check form-switch">
              <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefaul" />
            </div>
          </div>
        </div>
        <div className="my-2">
          <button type="submit" className="link px-4 py-2 fw-bold">Make payment </button>
        </div>
      </form>,
    );
  };

  const Monthly = () => {
    setCategory({
      hourly: false,
      daily: false,
      weekly: false,
      monthly: true,
    });
    setBody(
      <form>
        <div className="row">
          <div className="col-md-6">
            <p className="m-0">No. of months</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
              <option className="innovation__input--option" value="1">1 Month </option>
              <option className="innovation__input--option" value="2">2 Months</option>
              <option className="innovation__input--option" value="3">3 Months</option>
              <option className="innovation__input--option" value="1">4 Months </option>
              <option className="innovation__input--option" value="2">5 Months</option>
              <option className="innovation__input--option" value="3">6 Months</option>
              <option className="innovation__input--option" value="1">7 Months </option>
              <option className="innovation__input--option" value="2">8 Months</option>
            </select>
          </div>
          <div className="col-md-6">
            <p className="m-0">No. of persons</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input form-select shadow-none">
              <option value="1">1 Person</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4 People</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Start date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">End date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
        </div>
        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Internet:</p>
            <div className="form-check form-switch">
              <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">Office address usage:</p>
            <div className="form-check form-switch">
              <input className="form-check-input shadow-none" type="checkbox" role="switch" id="flexSwitchCheckDefaul" />
            </div>
          </div>
        </div>
        <div className="my-2">
          <button type="submit" className="link px-4 py-2 fw-bold">Make payment </button>
        </div>
      </form>,
    );
  };

  return (
    <div className="innovation__content py-5">
      <ToastContainer />
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
            {body}
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

export default InnovationContent;
