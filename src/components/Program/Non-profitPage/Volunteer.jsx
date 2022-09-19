import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import TagsInput from '../../ResuableComponents/TagsInput';

function Volunteer() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [skills, setSkills] = useState();
  const [options, setOptions] = useState([]);
  const [project, setProject] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/projects`).then(
      (response) => {
        // console.log(response);
        const { data } = response.data;
        setOptions(data);
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
    // axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/projects`).then(
    //   (response) => {
    //     // console.log(response);
    //     const { data } = response.data;
    //     setOptions(data);
    //   },
    //   (error) => {
    //     // console.log(error);
    //     setLoading(false);
    //     if (error.response) {
    //       error.response.data.errors.map((err) => toast.error(`${err.message}`, {
    //         position: 'top-right',
    //         autoClose: 15000,
    //         hideProgressBar: true,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       }));
    //     } else {
    //       toast.error('Ops, something went wrong, please try again', {
    //         position: 'top-right',
    //         autoClose: 8000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //     }
    //   },
    // );
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/volunteers`, {
      name, email, project, skills,
    }).then((response) => {
      // console.log(response);
      setLoading(false);
      setEmail('');
      setName('');
      if (response) {
        toast.success('You have successfully joined our volunteering team.', {
          position: 'top-right',
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }, (error) => {
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
    });
  };
  // console.log(options);
  return (
    <>
      {/* JOIN TRYBE FORM STARTS */}
      <div className="modal fade benefits__form mt-4" id="volunteerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered benefits__dialog">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <i className="fa-solid fa-circle-xmark fa-2x btn-close shadow-none benefits__close" type="button" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body benefits__content px-md-5 pt-0 pb-4">
              <h4 className="modal-title lh-sm mb-2" id="exampleModalLabel">
                Join our
                <br />
                volunteering team
              </h4>
              <p>Supply the details below to join the team</p>

              <form action="" className="benefits__form">
                <div className="row py-2">
                  <label className="" htmlFor="name">
                    Full Name
                  </label>
                  <input type="text" className="name p-3 my-2 benefits__form--input " id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="row py-2">
                  <label className="" htmlFor="email">
                    Email Address
                  </label>
                  <input type="email" className="email p-3 my-2 benefits__form--input " id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="row py-2">
                  <label className="" htmlFor="volunteer__project">
                    Select Name of project
                  </label>
                  <select id="volunteer__project" name="volunteer__project" className="p-3 my-2 form-select benefits__form--input shadow-none" onChange={(e) => setProject(e.target.value)} required>
                    {options
                      && options?.map((item) => (
                        <option className="benefits__form--option" value={item.title} key={item.id}>
                          {item.title}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="row py-2">
                  <label className="" htmlFor="volunteer__skills">
                    Skills
                  </label>
                  <br />
                  <select id="volunteer__skills" name="volunteer__project" className="p-3 my-2 form-select benefits__form--input shadow-none" onChange={(e) => setSkills([e.target.value])} required>
                    <option className="benefits__form--option" key="1" value="Design">Design</option>
                    <option className="benefits__form--option" key="2" value="Software Development">Software Development</option>
                    <option className="benefits__form--option" key="3" value="Marketing">Marketing</option>
                    <option className="benefits__form--option" key="4" value="Publicity">Publicity</option>
                    <option className="benefits__form--option" key="5" value="Marketing">Marketing</option>
                    <option className="benefits__form--option" key="6" value="Support staff">Support staff</option>
                  </select>
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
                  <button type="button" onClick={Submit} className=" link btn fw-bold py-3 px-5 me-0 ">
                    Submit
                  </button>
                )
                }
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* JOIN TRYBE FORM ENDS */}
      <div className="container">
        <div className="row">

          <div className=" volunteer__hero--btnTwo text-center  pt-lg-5  col-md-6 d-flex flex-column mx-auto">
            <p className="mb-5 mb-md-0">
              To us causes are projects and projects are causes because our hearts are
              fully involved in all that we do. Join our growing list of volunteers.
            </p>
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0 mt-auto  d-block d-md-none mb-5 text-center" data-bs-toggle="modal" data-bs-target="#volunteerModal">
              Volunteer
              {' '}
            </button>
          </div>
          <div className="volunteer__hero--btnTwo text-center  pt-lg-5    col-md-6 d-flex flex-column mx-auto">
            <p>
              <em>
                “Never doubt that a small group of thoughtful committed citizens can change the
                world: indeed, it’s the only thing that ever has.”
              </em>
              {' '}
              -
              {' '}
              <strong>Margaret Mead</strong>
              {' '}
              <br />
              Want to contribute to any of our causes?

            </p>
          </div>
        </div>
        <div className="row mb-5 pb-lg-5 text-center">
          <div className="col-md-6 my-2 text-center">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0 mt-auto d-none d-md-inline-block" data-bs-toggle="modal" data-bs-target="#volunteerModal">
              Volunteer
              {' '}
            </button>
          </div>
          <div className="col-md-6 my-2">
            <Link to="/" type="button" className="link btn fw-bold py-3 px-5 me-0 ">
              Donate here
              {' '}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Volunteer;
