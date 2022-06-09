import React, { useState } from 'react';

// WYSIWYG
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';

function AddBlogsForm() {
  const [post, setPost] = useState(EditorState.createEmpty());
  // WYSIWYG CONVERSION
  const postState = convertToRaw(post.getCurrentContent());
  const onPostStateChange = (editorState) => {
    setPost(editorState);
  };

  let aboutConvert;
  const Submit = (e) => {
    e.preventDefault();
    postState.blocks.map((item) => {
      aboutConvert = item.text;
      return aboutConvert;
    });
    // console.log({ questionConvert, answerConvert });
  };
  return (
    <div className="content px-4">
      <div className="row content__header align-items-center mb-5">
        <div className="col-md-6 p-0 text-center text-md-start">
          <h4 className="m-0">Add a Blog</h4>
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
              Blog title
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="name" required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Blog image
            </label>
            <input type="file" className="name p-3 my-2 content__form--input " id="name" required />
          </div>
          <div className="row py-2 content__form--row">
            <div className="col-md-6 pe-md-3 ps-0 py-2">
              <label className="p-0 fw-bold" htmlFor="email">
                Category
              </label>
              <br />
              <select id="volunteer__project" name="volunteer__project" className="p-3 my-2 content__form--inputr w-100 ">
                <option value="">CTCTW</option>
                <option value="">Cogneasy</option>
                <option value="">Trifold</option>
                <option value="">Gradeplus</option>
              </select>
            </div>
            <div className="col-md-6 p-0 text-start ps-md-3 py-2">
              <label className="p-0 fw-bold" htmlFor="email">
                Author
              </label>
              <br />
              <input type="text" className="name p-3 my-2 content__form--inputr w-100 " id="name" required />
            </div>
          </div>
          <div className="row py-3">
            <label htmlFor="question" className="fw-bold mb-2 p-0">
              Blog post
            </label>
            <div className="editor-container">
              <Editor
                editorState={post}
                toolbarClassName="toolbarClassName"
                wrapperClassName="content__form--wysiwyg"
                editorClassName="content__form--editor"
                onEditorStateChange={onPostStateChange}
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

          <div className="py-3 py-lg-4 px-0 mx-0 ">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0 m-3 ms-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Save
            </button>
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0 m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBlogsForm;
