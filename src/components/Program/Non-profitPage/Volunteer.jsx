import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    axios.get('https://elab-api.herokuapp.com/api/v1/projects/current-projects').then(
      (response) => {
        // console.log(response);
        const { data } = response.data;
        setOptions([...options, data]);
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
    axios.get('https://elab-api.herokuapp.com/api/v1/projects/future-projects').then(
      (response) => {
        // console.log(response);
        const { data } = response.data;
        setOptions([...options, data]);
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
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.post('https://elab-api.herokuapp.com/api/v1/volunteers', {
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
  // console.log(skills);
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
                    <option className="benefits__form--option" value="Design">Design</option>
                    <option className="benefits__form--option" value="Software Development">Software Development</option>
                    <option className="benefits__form--option" value="Marketing">Marketing</option>
                    <option className="benefits__form--option" value="Publicity">Publicity</option>
                    <option className="benefits__form--option" value="Marketing">Marketing</option>
                    <option className="benefits__form--option" value="Support staff">Support staff</option>
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
      <div className="volunteer__hero--btn text-center pb-5 pb-lg-5 mb-lg-5">
        <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#volunteerModal">
          Volunteer
          {' '}
        </button>
      </div>
    </>
  );
}

export default Volunteer;
