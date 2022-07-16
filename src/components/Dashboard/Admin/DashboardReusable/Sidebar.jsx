import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__sidebar-container">
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/blog" className={(window.location.pathname === '/dashboard/admin' || window.location.pathname.includes('blog')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-house fa-fw" />
            Blog
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/consultation" className={(window.location.pathname.includes('consultation')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-phone-volume fa-fw" />
            Consultation
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/events" className={(window.location.pathname.includes('events')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-calendar fa-fw" />
            Event
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/media" className={(window.location.pathname.includes('media')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-newspaper fa-fw" />
            Media Mention
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/non-profit" className={(window.location.pathname.includes('non-profit')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-sun-plant-wilt fa-fw" />
            Non-profit
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/payments" className={(window.location.pathname.includes('payments')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-clipboard-question fa-fw" />
            Payments
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/projects" className={(window.location.pathname.includes('projects')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-diagram-project fa-fw" />
            Projects
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/resources" className={(window.location.pathname.includes('resources')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-file fa-fw" />
            Resources
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/services" className={(window.location.pathname.includes('services')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-clipboard-list fa-fw" />
            Services
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/startup" className={(window.location.pathname.includes('startup')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-rocket fa-fw" />
            Startup Foundry
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/training" className={(window.location.pathname.includes('training')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-ranking-star fa-fw" />
            Training
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/volunteers" className={(window.location.pathname.includes('volunteers')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-users fa-fw" />
            Volunteers
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/workspace-bookings" className={(window.location.pathname.includes('cowork')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-user fa-fw" />
            Workspace Bookings
          </NavLink>
        </div>
        <div className="sidebar__link my-1">
          <NavLink to="/dashboard/admin/workspace-plans" className={(window.location.pathname.includes('workspace-plans')) && 'active'}>
            <i className="fa-solid sidebar__link--icon fa-clipboard-question fa-fw" />
            Workspace Plans
          </NavLink>
        </div>

      </div>
    </aside>
  );
}

export default Sidebar;
