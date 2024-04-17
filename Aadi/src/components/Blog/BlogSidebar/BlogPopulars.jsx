import React from "react";
import { Link } from "react-router-dom";

const BlogPopulars = () => {
  const popular_items = [
    {
      url: "/blog-details",
      src: "/img/blog/pu_post_img01.jpg",
      created_at: "March 17, 2023",
      title: (
        <>
          Five Quick Tips to Boost Your <br />
          Online Vehicle Sales
        </>
      ),
    },
    {
      url: "/blog-details",
      src: "/img/blog/pu_post_img02.jpg",
      created_at: "March 17, 2023",
      title: "Maximizing Your Advertising Budget",
    },
    {
      url: "/blog-details",
      src: "/img/blog/pu_post_img03.jpg",
      created_at: "March 17, 2023",
      title: "The Art of Effective Marketing",
    },
    {
      url: "/blog-details",
      src: "/img/blog/pu_post_img04.jpg",
      created_at: "March 17, 2023",
      title: "Navigating the Digital Advertising Landscape",
    },
    {
      url: "/blog-details",
      src: "/img/blog/pu_post_img05.jpg",
      created_at: "March 17, 2023",
      title: "Unlocking the Power of Social Media Marketing",
    },
  ];

  return (
    <div className="popular-post-list">
      <ul className="list-wrap">
        {popular_items.map((x, index) => {
          if (index === 0) {
            return (
              <li key={index}>
                <div className="popular-post-item big-post mb-40">
                  <div className="thumb">
                    <Link to={x.url}>
                      <img src={x.src} alt="" />
                    </Link>
                  </div>

                  <div className="content">
                    <h5 className="title">
                      <Link to={x.url}>{x.title}</Link>
                    </h5>
                    <span>{x.created_at}</span>
                  </div>
                </div>
              </li>
            );
          } else {
            return (
              <li key={index}>
                <div className="popular-post-item mb-40">
                  <div className="thumb">
                    <Link to={x.url}>
                      <img src={x.src} alt="" />
                    </Link>
                  </div>

                  <div className="content">
                    <h5 className="title">
                      <Link to={x.url}>{x.title}...</Link>
                    </h5>
                    <span>{x.created_at}</span>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default BlogPopulars;
