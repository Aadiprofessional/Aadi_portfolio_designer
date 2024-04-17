import React from "react";
import BlogAreaThreeItem from "./BlogAreaThreeItem";
import { Link } from "react-router-dom";

const BlogAreaThree = () => {
  const blog_items = [
    {
      src: "/img/blog/h2_blog_img01.jpg",
      url: "/blog-details",
      author: "Rajesh Kumar",
      date: "April 5, 2022",
      title: "Demystifying Blockchain Technology: A Comprehensive Guide",
      desc: `Discover the inner workings of blockchain technology, its applications across various industries, and the potential it holds for transforming businesses.`,
    },
    {
      src: "/img/blog/h2_blog_img02.jpg",
      url: "/blog-details",
      author: "Priya Patel",
      date: "April 10, 2022",
      title: "Unleashing the Power of Web3: An Overview",
      desc: `Explore the concept of Web3 and its implications for the future of the internet, including decentralized applications, cryptocurrencies, and digital sovereignty.`,
    },
    {
      src: "/img/blog/h2_blog_img03.jpg",
      url: "/blog-details",
      author: "Rahul Sharma",
      date: "April 15, 2022",
      title: "Mastering Animation Techniques: From Basics to Advanced",
      desc: `Learn the fundamentals of animation and discover advanced techniques for creating captivating animations that enhance user experiences and bring designs to life.`,
    },
  ];

  return (
    <section className="blog-area-two blog-area-three pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two text-center mb-60">
              <span className="sub-title">Latest Insights</span>
              <h2 className="title">Exploring Emerging Technologies</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blog_items.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <BlogAreaThreeItem item={x} />
            </div>
          ))}
        </div>

        <div className="read-more-btn text-center mt-30">
          <Link to="/blog" className="btn">
            Discover More <span></span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogAreaThree;
