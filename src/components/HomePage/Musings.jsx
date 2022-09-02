import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Musings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/subscribers/add-subscriber`, {
      name,
      email,
      tags: [
        'general',
      ],
    }).then((response) => {
      // console.log(response);
      if (response) {
        setLoading(false);
        toast.success(
          'You have successfully subscribed to our mailing list',
          {
            position: 'top-right',
            autoClose: 10000,
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
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }));
      } else {
        toast.error('Ops, something went wrong, please try again', {
          position: 'top-right',
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };

  return (
    <div className="musings">
      <ToastContainer />
      <div className="container pb-3">
        <div
          className="musings__card position-relative p-4 p-lg-5"
          style={{
            backgroundImage: "url('images/home/musing.png')",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // height: '303px',
          }}
        >
          <div className="row position-relative ">
            <div className="musings__card--header ">
              <h2 className="musings__card--title ">eLab Musings</h2>
              <p>
                Let&apos;s share with you some information about the Lab as
                noteworthy business insights from lived-experiences as an organization.
              </p>
            </div>
            <div className="musings__card--form">
              <form className="py-3" onSubmit={Submit}>
                <div className="row g-2">
                  <div className="col-md-6 col-lg-5">
                    <input type="text" placeholder="Your name" className=" p-3 musings__card--input w-100" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="col-md-6 col-lg-5">
                    <input type="email" placeholder="Your email address" className="p-3 musings__card--input w-100" value={email} onChange={(e) => setEmail(e.target.value)} required />

                  </div>
                  <div className="col-md-6 col-lg-2">
                    {loading ? (
                      <button type="submit" className="musings__card--submit w-100 ms-lg-3 py-3 ">
                        <span
                          className="spinner-grow spinner-grow-sm mx-1"
                          role="status"
                          aria-hidden="true"
                        />
                        {' '}
                        <span
                          className="spinner-grow spinner-grow-sm mx-1"
                          role="status"
                          aria-hidden="true"
                        />
                        {' '}
                        <span
                          className="spinner-grow spinner-grow-sm mx-1"
                          role="status"
                          aria-hidden="true"
                        />
                      </button>
                    )
                      : <button type="submit" className="musings__card--submit w-100 ms-lg-3 py-3 ">Subscibe</button>}
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Musings;
