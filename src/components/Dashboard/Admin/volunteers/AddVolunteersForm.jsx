import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import TagsInput from '../../../ResuableComponents/TagsInput';

function AddVolunteerForm() {
  const [name, setName] = useState('');
  const [project, setProject] = useState('');
  const [email, setEmail] = useState('');
  const [tag, setTag] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const selectedTags = (tags) => setTag(tags);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/volunteers`, {
      name,
      email,
      project,
      skills: tag,
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('elAdmT')}`,
      },
    }).then(
      (response) => {
        // console.log(response);
        setLoading(false);
        if (response) {
          navigate('/dashboard/admin/volunteers');
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
  // console.log(name, email, project);

  return (
    <div className="content px-4">
      <ToastContainer />
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Add a Volunteer</h4>
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
        <form className="content__form mx-5">
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="name">
              Volunteer&apos;s name
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Volunteers&apos;s email
            </label>
            <input type="email" className="name p-3 my-2 content__form--input " id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="project">
              Project
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="project" value={project} onChange={(e) => setProject(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Skill
            </label>
            <br />
            <TagsInput selectedTags={selectedTags} />
          </div>
          <div className="py-3 py-lg-4 px-0 mx-0 ">
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
                  <button
                    type="button"
                    className=" link btn fw-bold py-3 px-5  content__form--button"
                    onClick={Submit}
                    // eslint-disable-next-line no-unused-expressions
                    onKeyUp={(e) => { e.key === 'Enter' && e.preventDefault(); }}
                  >
                    Submit
                  </button>
                )
          }
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddVolunteerForm;
