import React from "react";

const Faq = () => {
  return (
    <section className="faq-area pt-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-img">
              <img src="/img/images/faq_img.png" alt="" />
              <img src="/img/images/faq_img02.png" alt="" />
            </div>
            <div className="faq-content">
              <div className="section-title title-style-two mb-20">
                <h2 className="title">
                  Get Answers <br />
                  to Your Queries
                </h2>
              </div>
              <h3 className="title-two">& Connect with Experts</h3>
              <p>
                Whether you're diving into web3 development, animation, or app development, we're here to help you navigate through your queries and provide expert guidance.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion faq-wrap" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What's the difference between Web3 and traditional web development?
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Web3 development involves integrating blockchain technology into web applications, enabling decentralized and trustless transactions. Traditional web development, on the other hand, focuses on creating centralized applications without blockchain integration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How can I enhance my animation skills?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Improving your animation skills requires practice, experimentation, and studying animation principles. Additionally, using animation software like Adobe After Effects or Blender can help you create stunning animations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What are the key components of a successful app development project?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      A successful app development project requires thorough planning, user research, intuitive design, robust development, rigorous testing, and effective marketing strategies. Collaboration and communication among team members are also crucial for success.
                    </p>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    How can I stay updated with the latest trends in web3 development?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      To stay updated with the latest trends in web3 development, you can follow reputable blogs, forums, and social media accounts dedicated to blockchain technology. Participating in webinars, conferences, and online courses can also provide valuable insights into emerging trends and technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-shape-wrap">
        <img src="/img/images/faq_shape.png" alt="" />
      </div>
    </section>
  );
};

export default Faq;
