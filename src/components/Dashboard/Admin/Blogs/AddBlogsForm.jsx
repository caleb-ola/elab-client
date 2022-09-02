import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// WYSIWYG
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import TagsInput from '../../../ResuableComponents/TagsInput';

function AddBlogsForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [tag, setTag] = useState([]);
  const [post, setPost] = useState(EditorState.createEmpty());
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // WYSIWYG CONVERSION
  const postState = draftToHtml(convertToRaw(post.getCurrentContent()));
  const onPostStateChange = (editorState) => {
    setPost(editorState);
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

  let postConvert;

  const selectedTags = (tags) => setTag(tags);
  // console.log(tag);
  const Submit = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      e.preventDefault();
    } else {
      setLoading(true);
      postConvert = postState;
      // console.log({ questionConvert, answerConvert });
      const formData = new FormData();
      formData.append('title', title);
      formData.append('image', image, image.name);
      formData.append('content', postConvert);
      formData.append('author', author);
      tag.map((item) => formData.append('tags', item));

      axios({
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/api/v1/posts`,
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
            navigate('/dashboard/admin/blog');
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
    }
  };
  return (
    <div className="content px-4">
      <ToastContainer />
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Add a Blog Post</h4>
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
            <input type="text" className="name p-3 my-2 content__form--input " id="name" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Image
            </label>
            <input type="file" className="name p-3 my-2 content__form--input " id="name" onChange={(e) => setImage(e.target.files[0])} required />
          </div>
          <div className="py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Author
            </label>
            <br />
            <input type="text" className="name p-3 my-2 content__form--input w-100 " id="name" value={author} onChange={(e) => setAuthor(e.target.value)} required />
          </div>
          <div className="py-3">
            <label htmlFor="question" className="fw-bold mb-2 p-0">
              Content
            </label>
            <div className="editor-container">
              <Editor
                editorState={post}
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
            <div className="py-4">
              <label className="p-0 fw-bold" htmlFor="email">
                Tags
              </label>
              <br />
              <TagsInput selectedTags={selectedTags} />
            </div>
            {/* <div className="row pt-4 ps-3">
              <div className="form-check py-1">
                <input className="form-check-input shadow-none" type="checkbox"
                onChange={((e) => setCulture(e.target.checked))} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Culture
                </label>
              </div>
              <div className="form-check py-1">
                <input className="form-check-input shadow-none" type="checkbox"
                onChange={((e) => setEnterprise(e.target.checked))} id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Enterprise
                </label>
              </div>
            </div> */}
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
                    Publish
                  </button>
                )
          }
            {/* <button type="button" className=" link btn fw-bold py-3 px-5 me-0 m-3"
            data-bs-toggle="modal" data-bs-target="#exampleModal">
              Publish
            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBlogsForm;
