import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import AllBlogs from './AllBlog';
import TopBlog from './TopBlog';

function Blog() {
  return (
    <div>
      <NavBar />
      <TopBlog />
      <AllBlogs />
      <Footer />
    </div>
  );
}

export default Blog;
