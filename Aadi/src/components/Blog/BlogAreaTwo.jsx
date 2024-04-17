import React from "react";
import BlogAreaTwoItem from "./BlogAreaTwoItem";

const BlogAreaTwo = () => {
  const blog_items = [
    {
      url: "/blog-details",
      date: {
        day: 27,
        month: "Nov",
      },
      src: "/img/blog/h2_blog_img01.jpg",
      tag: "Web3",
      title: "Unlocking the Potential of Decentralized Applications (DApps)",
      desc: `Explore the world of decentralized applications (DApps) built on the blockchain, and discover their potential to revolutionize various industries.`,
    },
    {
      url: "/blog-details",
      date: {
        day: 27,
        month: "Nov",
      },
      src: "/img/blog/h2_blog_img02.jpg",
      tag: "Blockchain",
      title: "Understanding Blockchain Technology: A Comprehensive Guide",
      desc: `Delve into the fundamentals of blockchain technology, its underlying principles, and its applications across diverse sectors.`,
    },
    {
      url: "/blog-details",
      date: {
        day: 27,
        month: "Nov",
      },
      src: "/img/blog/h2_blog_img03.jpg",
      tag: "Animation",
      title: "Mastering Animation Techniques: From Basics to Advanced",
      desc: `Learn the art of animation from basic principles to advanced techniques, and create stunning visual effects for web and mobile applications.`,
    },
  ];

  return (
    <section className="blog-area-two pt-110 pb-90">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title title-style-two white-title text-center mb-60">
              <span className="sub-title">Discover Insights</span>
              <h2 className="title">Exploring Emerging Technologies</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {blog_items.map((x, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-10">
              <BlogAreaTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogAreaTwo;
