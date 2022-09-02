import React, { useState } from 'react';

// WYSIWYG
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

function AddStartupForm() {
  const [name, setName] = useState('');
  // const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [year, setYear] = useState('');
  const [link, setLink] = useState('');
  const [brochure, setBrochure] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [desc, setDesc] = useState(EditorState.createEmpty());
  // WYSIWYG CONVERSION
  const descState = draftToHtml(convertToRaw(desc.getCurrentContent()));
  const onAboutStateChange = (editorState) => {
    setDesc(editorState);
  };

  let descConvert;
  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    descConvert = descState;
    // console.log({ questionConvert, answerConvert });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image, image.name);
    formData.append('description', descConvert);
    formData.append('yearFounded', year);
    formData.append('link', link);
    formData.append('brochure', brochure, brochure.name);

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/startups`,
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
          navigate('/dashboard/admin/startup');
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
      <ToastContainer />
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Add a Startup</h4>
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
            <label className="p-0 fw-bold" htmlFor="name">
              Name of Startup
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="logo">
              Upload Startup logo
            </label>
            <input type="file" className="name p-3 my-2 content__form--input" id="logo" onChange={(e) => setImage(e.target.files[0])} required />
          </div>
          <div className="row py-3">
            <label htmlFor="question" className="fw-bold mb-2 p-0">
              About the Startup
            </label>
            <div className="editor-container">
              <Editor
                editorState={desc}
                toolbarClassName="toolbarClassName"
                wrapperClassName="content__form--wysiwyg"
                editorClassName="content__form--editor"
                onEditorStateChange={onAboutStateChange}
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                  image: {
                    // uploadCallback: uploadImageCallBack,
                    alt: { present: true, mandatory: false },
                    defaultSize: {
                      height: '300px',
                      width: '100%',
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="link">
              Year founded
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="link" value={year} onChange={(e) => setYear(e.target.value)} required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="link">
              Website link
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="link" value={link} onChange={(e) => setLink(e.target.value)} required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="logo">
              Brochure
            </label>
            <input type="file" className="name p-3 my-2 content__form--input" id="logo" onChange={(e) => setBrochure(e.target.files[0])} required />
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
                  <button type="submit" className=" link btn fw-bold py-3 px-5 me-0 content__form--button">
                    Save Startup
                  </button>
                )
          }
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStartupForm;
