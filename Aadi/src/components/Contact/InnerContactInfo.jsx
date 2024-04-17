import React from "react";

const InnerContactInfo = () => {
  const info_items = [
    {
      src: "/img/icon/loction_icon03.png",
      title: "Address",
      desc: (
        <>
          <p>46/IV NCERT CAMPUS New Delhi,110016</p>
        </>
      ),
    },
    {
      src: "/img/icon/mail_icon03.png",
      title: "Email",
      desc: (
        <>
          <a href="mailto:aadiprofessional8@gmail.com">aadiprofessional8@gmail.com</a>
        </>
      ),
    },
    {
      src: "/img/icon/phone_icon03.png",
      title: "Phone",
      desc: (
        <>
          <a href="tel:9289881135">+919289881135</a>
        </>
      ),
    },
  ];

  return (
    <ul className="list-wrap">
      {info_items.map((x, index) => (
        <li key={index}>
          <div className="contact-info-item">
            <div className="icon">
              <img src={x.src} alt="" />
            </div>
            <div className="content">
              <h6 className="title">{x.title}</h6>
              {x.desc}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default InnerContactInfo;
