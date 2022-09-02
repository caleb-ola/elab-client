import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// WYSIWYG
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {
  EditorState, convertToRaw, convertFromHTML, ContentState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import TagsInput from '../../../ResuableComponents/TagsInput';

function EditEventForm() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState(EditorState.createEmpty());
  const [link, setLink] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState([]);

  const navigate = useNavigate();
  const params = useParams();
  // const selectedTags = (tags) => setTag(tags);

  // WYSIWYG CONVERSION
  const descState = draftToHtml(convertToRaw(desc.getCurrentContent()));
  const onPostStateChange = (editorState) => {
    setDesc(editorState);
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
    axios.get(`${process.env.REACT_APP_BASE_URL}/api/v1/programs/${params.id}`).then((response) => {
      // console.log(response);
      const { data } = response.data;
      setTitle(data.title);
      setLink(data.link);
      setTag(data.tags);
      setDate(data.date.substring(0, 10));
      setPrice(data.price);
      setTag(data.tag);
      // selectedTags = () => setTag(data.tags);
      setDesc(
        EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(`<p>${data.description}</p>`),
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
    formData.append('description', descState);
    formData.append('link', link);
    formData.append('date', date);
    formData.append('price', price);
    formData.append('tag', tag);
    // tag.map((item) => formData.append('tags', item));

    axios({
      method: 'patch',
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/programs/${params.id}`,
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
          navigate('/dashboard/admin/events');
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
          <h4 className="m-0">Edit an Event</h4>
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
            <label className="p-0 fw-bold" htmlFor="title">
              Event Title
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="desc">
              Event Description
            </label>
            <div className="editor-container">
              <Editor
                editorState={desc}
                toolbarClassName="content__wysiwyg--toolbar"
                wrapperClassName="content__wysiwyg--wrapper my-2"
                editorClassName="content__wysiwyg--editor p-3"
                onEditorStateChange={onPostStateChange}
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
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="link">
              Event Link
            </label>
            <input type="text" className=" p-3 my-2 content__form--input" id="link" value={link} onChange={(e) => setLink(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="image">
              Event Image
            </label>
            <input type="file" className=" p-3 my-2 content__form--input " id="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>

          <div className="row py-2 content__form--row">
            <div className="col-lg-6">
              <label className="p-0 fw-bold" htmlFor="date">
                Commencement Date
              </label>
              <input type="date" className="p-3 my-2 content__form--inputr w-100" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div className="col-lg-6">
              <label className="p-0 fw-bold" htmlFor="price">
                Event Price(&#x20A6;)
              </label>
              <input type="number" className=" p-3 my-2 content__form--inputr w-100" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="tag">
              Tag
            </label>
            <br />
            <input type="text" className=" p-3 my-2 content__form--input" id="tag" value={tag} onChange={(e) => setTag(e.target.value)} required />

            {/* <TagsInput value={tag} selectedTags={selectedTags} /> */}
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
                <button type="button" onClick={Submit} className=" link btn fw-bold py-3 px-5 me-0 content__form--button ">
                  Save Event
                </button>

              )
        }
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEventForm;
