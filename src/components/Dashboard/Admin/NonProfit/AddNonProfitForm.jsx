import React, { useState } from 'react';

// WYSIWYG
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from "html-to-draftjs";
import { EditorState, convertToRaw } from 'draft-js';

import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddNonProfitForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [link, setLink] = useState('');
  const [brochure, setBrochure] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // WYSIWYG STATE
  const [description, setDescription] = useState(EditorState.createEmpty());

  const descriptionState = convertToRaw(description.getCurrentContent());

  const onDescriptionStateChange = (editorState) => {
    setDescription(editorState);
  };

  // WYSIWYG STATE CONVERTION VARIABLE TO BE CONVERTED IN THE SUBMIT FUNCTION
  let descriptionConvert;

  // const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const uploadImageCallBack = (file) => new Promise((resolve, reject) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve({ data: { link: e.target.result } });
      };
      reader.readAsDataURL(file);
    } else {
      reject();
    }
  });

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    descriptionConvert = descriptionState.blocks.map((item) => item.text);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('link', link);
    formData.append('image', image, image.name);
    formData.append('description', descriptionConvert);
    formData.append('brochure', brochure, brochure.name);

    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/non-profits`,
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
          navigate('/dashboard/admin/non-profit');
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
          <h4 className="m-0">Add a Non-profit</h4>
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
              Non-profit title
            </label>
            <input type="text" className="name p-3 my-2 content__form--input" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="description">
              Non-profit description
            </label>
            <Editor
              editorState={description}
              toolbarClassName="content__wysiwyg--toobar"
              wrapperClassName="content__wysiwyg--wrapper my-2"
              editorClassName="content__wysiwyg--editor p-3"
              onEditorStateChange={onDescriptionStateChange}
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: {
                  uploadCallback: uploadImageCallBack,
                  alt: { present: true, mandatory: false },
                  defaultSize: {
                    height: '300px',
                    width: '100%',
                  },
                },
              }}
            />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="brochure">
              Non-profit brochure
            </label>
            <input type="file" className="name p-3 my-2 content__form--input" id="brochure" onChange={(e) => setBrochure(e.target.files[0])} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="image">
              Non-profit image
            </label>
            <input type="file" className="name p-3 my-2 content__form--input" id="image" onChange={(e) => setImage(e.target.files[0])} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="link">
              Non-profit website link
            </label>
            <input type="text" className="name p-3 my-2 content__form--input" id="link" value={link} onChange={(e) => setLink(e.target.value)} required />
          </div>
          <div className="py-3 py-lg-4">
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
                    Save non-profit
                  </button>
                )
          }
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNonProfitForm;
