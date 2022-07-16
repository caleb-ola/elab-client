import React from 'react';
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

function UserHero({ title, text, icon }) {
  return (
    <div className="userhero pt-5">
      <div className="container pt-5 mt-5">
        <div className="herothree__header start">
          <h1 className="herothree__header--title">
            <i className={`${icon}`} />
            {title}
          </h1>
          <p className="py-2 py-lg-3">{text}</p>
        </div>
        <ul className="nav pb-0">
          <NavLink to="/dashboard/user/cowork" className={window.location.pathname === '/dashboard/user' || window.location.pathname.includes('/dashboard/user/cowork') ? 'link mx-2 text-decoration-none fw-bold userhero--btn px-5 py-4 mb-0 active' : 'link mx-2 text-decoration-none fw-bold userhero--btn px-5 py-4 mb-0'}>
            <i className="fa-solid fa-user pe-4 fa-fw" />
            Cowork
          </NavLink>
          <NavLink to="/dashboard/user/resources" className="link mx-2 text-decoration-none fw-bold userhero--btn px-5 py-4">
            <i className="fa-solid fa-book pe-4 fa-fw" />
            Resources
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
UserHero.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
};

UserHero.defaultProps = {
  title: '',
  text: '',
  icon: '',
};

export default UserHero;
