import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditTrainingsForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [brochure, setBrochure] = useState('');
  const [loading, setLoading] = useState(false);

  // console.log({
  //   title, desc, link, image, price, date, brochure,
  // });
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    axios.get(`https://elab-api.herokuapp.com/api/v1/trainings/${params.slug}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then((response) => {
      const res = response.data.data;
      setTitle(res.title);
      setDesc(res.description);
      setLink(res.link);
      setDate(res.date.toLocaleString().slice(0, 10));
      setPrice(res.price);
    });
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('title', title);
    if (image) {
      formData.append('image', image, image.name);
    }
    formData.append('description', desc);
    formData.append('link', link);
    formData.append('date', date);
    formData.append('price', price);
    if (brochure) {
      formData.append('brochure', brochure, brochure.name);
    }

    axios({
      method: 'patch',
      url: `https://elab-api.herokuapp.com/api/v1/trainings/${params.slug}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        if (response) {
          setLoading(false);
          // CLEAR INPUT FIELDS AFTER SUCCCESSFULLY ADDING A NEW TRAINING
          setTitle('');
          setLink('');
          setDesc('');
          setDate('');
          setPrice('');
          // toast.success(
          //   'You successfully added a new training session',
          //   {
          //     position: 'top-right',
          //     autoClose: 15000,
          //     hideProgressBar: true,
          //     closeOnClick: true,
          //     pauseOnHover: true,
          //     draggable: true,
          //     progress: undefined,
          //   },
          // );
          navigate('/dashboard/admin/training');
        }
      },
      (error) => {
        // console.log(error);
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
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Edit a Training</h4>
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
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="title">
              Training Title
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="desc">
              Training Description
            </label>
            <textarea name="" className="content__form--input my-2 p-3" id="desc" cols="30" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)} required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="date">
              Commencement Date
            </label>
            <input type="date" className=" p-3 my-2 content__form--input" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="link">
              Training Link
            </label>
            <input type="text" className=" p-3 my-2 content__form--input" id="link" value={link} onChange={(e) => setLink(e.target.value)} required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="brochure">
              Training Brochure
            </label>
            <input type="file" className=" p-3 my-2 content__form--input" id="brochure" onChange={(e) => setBrochure(e.target.files[0])} />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="price">
              Training Price(&#x20A6;)
            </label>
            <input type="number" className=" p-3 my-2 content__form--input" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="image">
              Training Image
            </label>
            <input type="file" className=" p-3 my-2 content__form--input " id="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="row py-3 py-lg-4 ">
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
                  <button type="submit" className=" link btn fw-bold py-3 px-5 me-0 content__form--button ">
                    Save Training
                  </button>

                )
          }
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTrainingsForm;
