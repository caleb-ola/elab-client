import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function AddMediaForm() {
  const [title, setTitle] = useState();
  const [link, setLink] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/mentions`, {
      title, link, date, image,
    }, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then(
      (response) => {
        // console.log(response);
        if (response) {
          setLoading(false);
          navigate('/dashboard/admin/media');
        }
      },
      (error) => {
        setLoading(false);
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
  };

  return (
    <div className="content px-4">
      <ToastContainer />
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Add a Media Mention</h4>
        </div>
        <div className="col-md-6 p-0 text-center text-md-end">
          <span
            className="content__back dashnav__logout "
            aria-hidden="true"
            onClick={() => history.back()}
          >
            <i className="fa-solid fa-arrow-left pe-2" />
            <span className="py-2 px-1 text-decoration-none fw-bold">
              Back
            </span>
          </span>
        </div>
      </div>
      <div className="content__card w-100 p-5">
        <form className="content__form mx-5" onSubmit={Submit}>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="title">
              Title
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " title={title} onChange={(e) => setTitle(e.target.value)} id="title" required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="link">
              Link
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="link" title={link} onChange={(e) => setLink(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="date">
              Date
            </label>
            <input type="date" className="name p-3 my-2 content__form--input " id="date" title={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="image">
              Image
            </label>
            <input type="file" className="name p-3 my-2 content__form--input " id="image" onChange={(e) => setImage(e.target.files[0])} required />
          </div>
          <div className="py-3 py-lg-4 ">
            {
              loading
                ? (
                  <button type="button" className="link btn fw-bold py-3 px-5 me-0 content__form--button" disabled>
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </button>
                )
                : (
                  <button type="submit" className=" link btn fw-bold py-3 px-5 me-0 content__form--button">
                    Save Media Mention
                  </button>
                )
          }
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMediaForm;
