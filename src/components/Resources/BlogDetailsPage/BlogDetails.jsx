import React from 'react';
import Footer from '../../ResuableComponents/Footer';
import NavBar from '../../ResuableComponents/NavBar';
import BlogDetailsHero from './BlogDetailsHero';
import RelatedBlogs from './RelatedBlogs';

function BlogDetails() {
  return (
    <div>
      <NavBar />
      <BlogDetailsHero />
      <RelatedBlogs />
      <Footer />
    </div>
  );
}

export default BlogDetails;
