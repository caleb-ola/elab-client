import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

function Main() {
  return (
    <div className="main py-5">
      <div className="container-fluid main__container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default Main;
