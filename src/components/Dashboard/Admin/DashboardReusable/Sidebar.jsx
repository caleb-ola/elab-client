import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__sidebar-container">
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/impact" className={(window.location.pathname === '/dashboard/admin' || window.location.pathname.includes('impact')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-house fa-fw " />
            Impact
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/partners" className={(window.location.pathname.includes('partners')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-users fa-fw" />
            Partners
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/event" className={(window.location.pathname.includes('event')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-calendar fa-fw" />
            Event
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/media" className={(window.location.pathname.includes('media')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-newspaper fa-fw" />
            Media Mention
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/consultation" className={(window.location.pathname.includes('consultation')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-phone-volume fa-fw" />
            Consultation
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/cowork" className={(window.location.pathname.includes('cowork')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-user fa-fw" />
            Cowork
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/training" className={(window.location.pathname.includes('training')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-ranking-star fa-fw" />
            Training
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/blog" className={(window.location.pathname.includes('blog')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-clipboard-list fa-fw" />
            Blog
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/resources" className={(window.location.pathname.includes('resources')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-file fa-fw" />
            Resources
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/projects" className={(window.location.pathname.includes('projects')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-diagram-project fa-fw" />
            Projects
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/non-profit" className={(window.location.pathname.includes('non-profit')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-sun-plant-wilt fa-fw" />
            Non-profit
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/startup" className={(window.location.pathname.includes('startup')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-rocket fa-fw" />
            Startup Foundry
          </NavLink>
        </div>
        <div className="sidebar__link">
          <NavLink to="/dashboard/admin/faq" className={(window.location.pathname.includes('faq')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-clipboard-question fa-fw" />
            FAQ
          </NavLink>
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;
