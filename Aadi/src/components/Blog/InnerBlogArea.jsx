import React from "react";
import BlogItem from "./BlogItem";
import BlogPagination from "./BlogPagination";
import BlogSidebar from "./BlogSidebar/BlogSidebar";

const InnerBlogArea = () => {
  const blog_items = [
    {
      url: "/blog-details",
      src: "/img/blog/inner_blog_img01.jpg",
      tag: "Web3",
      reading_time: "5 Min",
      created_at: "March 17, 2022",
      author: "Ravi Kumar",
      title: "Exploring the Decentralized Web: A Journey into Web3",
      desc: `Embark on a journey into the decentralized web, exploring the principles of Web3 and its potential to reshape the digital landscape.`,
    },
    {
      url: "/blog-details",
      src: "/img/blog/inner_blog_img02.jpg",
      tag: "Blockchain",
      reading_time: "5 Min",
      created_at: "March 17, 2022",
      author: "Neha Sharma",
      title: "Unraveling the Blockchain Revolution: Insights and Innovations",
      desc: `Unravel the mysteries of blockchain technology and discover its revolutionary impact on industries, economies, and societies worldwide.`,
    },
    {
      url: "/blog-details",
      src: "/img/blog/inner_blog_img03.jpg",
      tag: "Animation",
      reading_time: "5 Min",
      created_at: "March 17, 2022",
      author: "Amit Patel",
      title: "Crafting Digital Delights: The Art and Science of Animation",
      desc: `Journey into the realm of digital animation, where artistry meets technology, and explore the diverse techniques and tools used to create captivating visual experiences.`,
    },
  ];

  return (
    <section className="inner-blog-area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-70">
            {blog_items.map((x, index) => (
              <BlogItem key={index} item={x} />
            ))}

            {/* pagination */}
            <BlogPagination />
          </div>

          <div className="col-30">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBlogArea;
