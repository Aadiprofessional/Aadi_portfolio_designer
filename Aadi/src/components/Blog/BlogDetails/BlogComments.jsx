import React from "react";
import BlogCommentItem from "./BlogCommentItem";

const BlogComments = () => {
  return (
    <div className="comment-wrap">
      <h2 className="title">
        281 <span>Comments</span>
      </h2>

      <div className="latest-comments">
        <ul className="list-wrap">
          <li>
            <BlogCommentItem
              item={{
                src: "/img/blog/comment_avatar01.png",
                author: "Sara Ahmed",
                created_at: "March 17, 2023",
                comment: `Working with Aadi was an absolute pleasure! Their creativity knows no bounds, and their attention to detail is impeccable. Aadi took my vision and brought it to life in ways I couldn't have imagined. Not only did they exceed my expectations, but they also delivered the project ahead of schedule. I highly recommend Aadi for any design project.`,
              }}
            />
          </li>
          <li>
            <BlogCommentItem
              item={{
                src: "/img/blog/comment_avatar02.png",
                author: "Neha Patel",
                created_at: "April 5, 2023",
                comment: `Aadi is a true professional and a master of their craft. Their design solutions are not only visually stunning but also highly functional. I was impressed by their ability to understand my brand's identity and translate it into a cohesive design language. Working with Aadi was seamless, and I'm thrilled with the results.`,
              }}
            />
          </li>
          <li>
            <BlogCommentItem
              item={{
                src: "/img/blog/comment_avatar03.png",
                author: "Rahul Kapoor",
                created_at: "May 12, 2023",
                comment: `I couldn't be happier with the design work Aadi did for my website. They have a keen eye for aesthetics and a knack for creating user-friendly interfaces. Throughout the project, Aadi was responsive, attentive to feedback, and committed to delivering a top-notch product. Their expertise and professionalism truly shine through in their work.`,
              }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogComments;
