import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

function TagsInput({ selectedTags, value }) {
  const [tags, setTags] = useState(value || []);

  useEffect(() => {
    if (value) {
      setTags(value);
    }
  }, [value]);

  const addTags = (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
      e.preventDefault();
      setTags([...tags, e.target.value]);
      selectedTags([...tags, e.target.value]);
      e.target.value = '';
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  return (
    <div className="tags name p-3 my-2 content__form--input w-100">
      {tags.map((tag, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="tags__item px-3 py-1 mx-1 my-1">
          <span>{tag}</span>
          <i
            className="fa-solid fa-circle-xmark ms-1 tags__item--close"
            aria-hidden="true"
            onClick={() => removeTags(index)}
          />

        </div>
      ))}
      <input
        type="text"
        className="tags--input"
        onKeyUp={(e) => addTags(e)}
        placeholder="Type and press Enter ..."
      />
    </div>
  );
}

TagsInput.propTypes = {
  selectedTags: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

TagsInput.defaultProps = {
  selectedTags: [''],
  // value: [],
};
export default TagsInput;
