import React, { useEffect, useState } from 'react';
import axios from 'axios';

// WYSIWYG
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
import {
  EditorState, convertToRaw, ContentState, convertFromHTML,
} from 'draft-js';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import draftToHtml from 'draftjs-to-html';

function EditPlansForm() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState();
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [internet, setInternet] = useState('');
  const [address, setAddress] = useState('');
  const [count, setCount] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  // WYSIWYG STATE
  const [description, setDescription] = useState(EditorState.createEmpty());
  const [details, setDetails] = useState(EditorState.createEmpty());

  const descriptionState = draftToHtml(convertToRaw(description.getCurrentContent()));
  const detailsState = draftToHtml(convertToRaw(description.getCurrentContent()));

  const onDescriptionStateChange = (editorState) => {
    setDescription(editorState);
  };

  const onDetailsStateChange = (editorState) => {
    setDetails(editorState);
  };

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

  useEffect(() => {
    axios.get(`https://elab-api.herokuapp.com/api/v1/workspaces/${params.slug}`).then((response) => {
      // console.log(response);
      const { data } = response.data;
      setTitle(data.title);
      setDiscount(data.discount);
      setInternet(data.useInternet);
      setAddress(data.useOfficeAddress);
      setPrice(data.pricePerHour);
      setCount(data.availability.count);
      // selectedTags = () => setTag(data.tags);
      setDescription(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(`<p>${data.description}</p>`),
          ),
        ),
      );
      setDetails(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(`<p>${data.details}</p>`),
          ),
        ),
      );
    }, (error) => {
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
  }, []);

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('title', title);
    if (image) {
      formData.append('image', image, image.name);
    }
    formData.append('description', descriptionState);
    formData.append('details', detailsState);
    formData.append('pricePerHour', price);
    formData.append('discount', discount);
    formData.append('useInternet', internet);
    formData.append('useOfficeAddress', address);
    formData.append('spaceCount', count);

    axios({
      method: 'patch',
      url: `https://elab-api.herokuapp.com/api/v1/workspaces/${params.slug}`,
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
          navigate('/dashboard/admin/workspace-plans');
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
          <h4 className="m-0">Edit a Workspace plan</h4>
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
            <label className="p-0 fw-bold" htmlFor="name">
              Title
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="name" placeholder="Title for the cowork space" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="content__wysiwyg py-2">
            <label className="p-0 fw-bold" htmlFor="description">
              Description
            </label>
            {/* <textarea name="" className="content__form--input my-2 p-3" id="description"
          cols="30" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)}
          required /> */}
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
          <div className="content__wysiwyg py-2">
            <label className="p-0 fw-bold" htmlFor="description">
              Details
            </label>
            {/* <textarea name="" className="content__form--input my-2 p-3" id="description"
          cols="30" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)}
          required /> */}
            <Editor
              editorState={details}
              toolbarClassName="content__wysiwyg--toobar"
              wrapperClassName="content__wysiwyg--wrapper my-2"
              editorClassName="content__wysiwyg--editor p-3"
              onEditorStateChange={onDetailsStateChange}
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
            <label className="p-0 fw-bold" htmlFor="image">
              Image
            </label>
            <input type="file" className="name p-3 my-2 content__form--input " id="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="image">
              Price per Hour(&#x20A6;)
            </label>
            <input type="number" className="name p-3 my-2 content__form--input " placeholder="Price per hour for cowork plan" id="image" value={price} onChange={(e) => setPrice(e.target.value)} required />
          </div>
          <div className="row ps-2 py-2 content__form--row">
            <div className="col-md-6 p-0 text-start ps-md-1 py-2">
              <label className="p-0 fw-bold" htmlFor="discount">
                Discount(%)
              </label>
              <br />
              <input type="number" className="name p-3 my-2 content__form--inputr w-100 " placeholder="Discount in percentage" id="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
            </div>
            <div className="col-md-6 p-0 text-start ps-md-3 py-2">
              <label className="p-0 fw-bold" htmlFor="internet">
                Internet usage(&#x20A6;)
              </label>
              <br />
              <input type="number" className="name p-3 my-2 content__form--inputr w-100 " placeholder="Price for the usage of internet" id="internet" value={internet} onChange={(e) => setInternet(e.target.value)} required />
            </div>
          </div>
          <div className="row ps-2 py-2 content__form--row">
            <div className="col-md-6 p-0 text-start ps-md-1 py-2">
              <label className="p-0 fw-bold" htmlFor="address">
                Office address usage(&#x20A6;)
              </label>
              <br />
              <input type="number" className="name p-3 my-2 content__form--inputr w-100" placeholder="Price for the usage of our office address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="col-md-6 p-0 text-start ps-md-3 py-2">
              <label className="p-0 fw-bold" htmlFor="count">
                Space count
              </label>
              <br />
              <input type="number" className="name p-3 my-2 content__form--inputr w-100 " placeholder="Number of possible space for cowork plan" id="count" value={count} onChange={(e) => setCount(e.target.value)} required />
            </div>
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
                  Save Plan
                </button>
              )
        }
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPlansForm;
