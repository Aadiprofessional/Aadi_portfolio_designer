import React from "react";
import BlogCommentForm from "./BlogCommentForm";
import BlogComments from "./BlogComments";

const BlogDetails = () => {
  return (
    <section className="blog-details-area pt-175 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="blog-details-wrap">
              <div className="bd-content-top text-center">
                <div className="blog-meta-two">
                  <ul className="list-wrap">
                    <li className="tag">
                      <a href="#">Technology</a>
                    </li>
                    <li>
                      <i className="fal fa-clock"></i>5 Min Read
                    </li>
                  </ul>
                </div>
                
                <h2 className="title">
                  How to Optimize Your Website for Better Performance
                </h2>

                <p>
                  Optimizing your website is crucial for better user experience and higher search engine rankings. By implementing effective strategies, you can enhance loading speed, improve navigation, and boost conversion rates.
                </p>

                <div className="blog-meta-two bottom">
                  <ul className="list-wrap">
                    <li className="avatar">
                      <a href="blog-details.html">
                        <img src="/img/blog/blog_avatar01.png" alt="" />
                        Shreya
                      </a>
                    </li>
                    <li>
                      <i className="fal fa-calendar"></i>April 23, 2023
                    </li>
                  </ul>
                </div>
              </div>

              <div className="blog-details-img">
                <img src="/img/blog/blog_details_img.jpg" alt="" />
              </div>

              <div className="bd-content-bottom">
                <h2 className="title">
                  The Importance of Performance Management in Business
                </h2>
                <p>
                  Performance management is essential for achieving organizational goals and improving overall efficiency. By setting clear objectives, providing regular feedback, and measuring progress, businesses can optimize their resources and drive success.
                </p>
                <p>
                  Effective performance management enables better decision-making, enhances employee engagement, and fosters a culture of continuous improvement. It allows businesses to identify strengths, address weaknesses, and adapt to changing market dynamics.
                </p>
                <p>
                  With the right performance management system in place, businesses can align individual goals with organizational objectives, promote accountability, and drive innovation. By focusing on performance metrics and fostering a results-driven culture, companies can achieve sustainable growth and competitive advantage.
                </p>
              </div>
            </div>

            {/* comments */}
            <BlogComments />

            {/* comment form */}
            <BlogCommentForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
