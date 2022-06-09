import React, { useState } from 'react';

// WYSIWYG
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';

function AddStartupForm() {
  const [about, setAbout] = useState(EditorState.createEmpty());
  // WYSIWYG CONVERSION
  const aboutState = convertToRaw(about.getCurrentContent());
  const onAboutStateChange = (editorState) => {
    setAbout(editorState);
  };

  let aboutConvert;
  const Submit = (e) => {
    e.preventDefault();
    aboutState.blocks.map((item) => {
      aboutConvert = item.text;
      return aboutConvert;
    });
    // console.log({ questionConvert, answerConvert });
  };

  return (
    <div className="content px-4">
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
            <input type="text" className="name p-3 my-2 content__form--input " id="name" required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Upload Startup logo
            </label>
            <input type="file" className="name p-3 my-2 content__form--input " id="name" required />
          </div>
          <div className="row py-2">
            <label className="p-0 fw-bold" htmlFor="email">
              Startup website link
            </label>
            <input type="text" className="name p-3 my-2 content__form--input " id="name" required />
          </div>
          <div className="row py-3">
            <label htmlFor="question" className="fw-bold mb-2 p-0">
              About the Startup
            </label>
            <div className="editor-container">
              <Editor
                editorState={about}
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
            <label className="p-0 fw-bold" htmlFor="email">
              Upload Startup Brochure
            </label>
            <input type="file" className="name p-3 my-2 content__form--input " id="name" required />
          </div>

          <div className="py-3 py-lg-4 px-0 mx-0 ">
            <button type="button" className=" link btn fw-bold py-3 px-5 me-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Save Startup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStartupForm;
