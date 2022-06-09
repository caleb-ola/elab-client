import React, { useState } from 'react';

function InnovationContent() {
  const [category, setCategory] = useState({
    hourly: true,
    daily: false,
    weekly: false,
    monthly: false,
  });
  const [body, setBody] = useState(
    <form>
      <div className="">
        <p className="m-0">No. of hours</p>
        <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div className="row">
        <div className="py-2 col-md-6">
          <p className="m-0">Date:</p>
          <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
        </div>
        <div className="py-2 col-md-6">
          <p className="m-0">No. of persons</p>
          <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input ">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
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
      <div className="my-3">
        <button type="submit" className="link px-5 py-3 fw-bold">Make payment </button>
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
        <div className="">
          <p className="m-0">No. of days</p>
          <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">No. of person</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input ">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
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
        <div className="my-3">
          <button type="submit" className="link px-5 py-3 fw-bold">Make payment </button>
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
        <div className="">
          <p className="m-0">No. of hours</p>
          <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>
        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">No. of person</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input ">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
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
        <div className="my-3">
          <button type="submit" className="link px-5 py-3 fw-bold">Make payment </button>
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
        <div className="">
          <p className="m-0">No. of weeks</p>
          <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">No. of person</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input ">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
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
        <div className="my-3">
          <button type="submit" className="link px-5 py-3 fw-bold">Make payment </button>
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
        <div className="">
          <p className="m-0">No. of months</p>
          <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>
        </div>
        <div className="row">
          <div className="py-2 col-md-6">
            <p className="m-0">Date:</p>
            <input type="date" className="px-3 py-2 my-1 w-100 innovation__input " />
          </div>
          <div className="py-2 col-md-6">
            <p className="m-0">No. of person</p>
            <select id="innovation__input" name="innovation__input" className="px-3 py-2 my-1 innovation__input ">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
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
        <div className="my-3">
          <button type="submit" className="link px-5 py-3 fw-bold">Make payment </button>
        </div>
      </form>,
    );
  };

  return (
    <div className="innovation__content py-5">
      <div className="container py-lg-5">
        <div className="row py-5 align-items-center ">
          <div className="col-lg-6">
            <img src="/images/cowork/cowork1.png" alt="" className="img-fluid rounded-3" />
          </div>
          <div className="col-lg-6">
            <h5 className="py-2">
              Private Team Workspace
            </h5>
            <div className="">
              <h6 className="">
                <span className="innovation__content--discount pe-3">
                  NGN 45,000
                </span>
                <span className="innovation__content--price">
                  NGN 55,000
                </span>
              </h6>
            </div>

            <div className="">
              <p className="m-0">Duration</p>
              <nav className="nav innovation__nav pb-2">
                <button type="button" className={category.hourly ? 'px-4 py-2 btn innovation__content--btn my-1 me-2 active' : 'px-4 py-2 btn innovation__content--btn my-1 me-2'} onClick={Hourly}>Hourly</button>
                <button type="button" className={category.daily ? 'px-4 py-2 btn innovation__content--btn my-1 me-2 active' : 'px-4 py-2 btn innovation__content--btn my-1 me-2'} onClick={Daily}>Daily</button>
                <button type="button" className={category.weekly ? 'px-4 py-2 btn innovation__content--btn my-1 me-2 active' : 'px-4 py-2 btn innovation__content--btn my-1 me-2'} onClick={Weekly}>Weekly</button>
                <button type="button" className={category.monthly ? 'px-4 py-2 btn innovation__content--btn my-1 me-2 active' : 'px-4 py-2 btn innovation__content--btn my-1 me-2'} onClick={Monthly}>Monthly</button>
              </nav>
            </div>
            {body}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h5 className="">Description of the space</h5>
            <p className="">
              Et eu ipsum, leo fringilla nunc. Congue lectus mauris eu enim.
              Ut diam, nec nec quam id suspendisse dapibus eget porta. Ut sed
              porta interdum vitae sit arcu scelerisque. Mauris, amet, elit enim
              fermentum, augue amet. Erat imperdiet pulvinar augue volutpat,
              tincidunt donec. Vel sit nibh tristique et, donec. Tellus pharetra
              eget dui egestas pellentesque faucibus. Ligula dolor, pretium tortor
              elementum non. Lorem sit vel lorem pulvinar at facilisi tortor.
              Ipsum non tincidunt ornare tortor porta pulvinar morbi fermentum arcu.
            </p>
          </div>
          <div className="col-md-6" />
        </div>
      </div>
    </div>
  );
}

export default InnovationContent;
