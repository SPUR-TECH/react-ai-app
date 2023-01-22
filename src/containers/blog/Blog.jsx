import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="The future is here! Lets get involved." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Artificial intelligence will make our lives easier." />
        <Article imgUrl={blog03} date="Jan 20, 2022" text="AI is going to change the world." />
        <Article imgUrl={blog04} date="Feb 16, 2022" text="The possibilities are endless." />
        <Article imgUrl={blog05} date="May 14, 2022" text="Lets embrace our imaginations." />
      </div>
    </div>
  </div>
);

export default Blog;