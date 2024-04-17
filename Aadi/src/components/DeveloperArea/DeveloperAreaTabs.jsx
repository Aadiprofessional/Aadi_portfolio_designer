import React from "react";

const DeveloperAreaTabs = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="details-tab"
            data-bs-toggle="tab"
            data-bs-target="#details-tab-pane"
            type="button"
            role="tab"
            aria-controls="details-tab-pane"
            aria-selected="true"
          >
            My Details
          </button>
        </li>

        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="awards-tab"
            data-bs-toggle="tab"
            data-bs-target="#awards-tab-pane"
            type="button"
            role="tab"
            aria-controls="awards-tab-pane"
            aria-selected="false"
          >
            My Awards
          </button>
        </li>
        
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="skills-tab"
            data-bs-toggle="tab"
            data-bs-target="#skills-tab-pane"
            type="button"
            role="tab"
            aria-controls="skills-tab-pane"
            aria-selected="false"
          >
            My Skills
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="details-tab-pane"
          role="tabpanel"
          aria-labelledby="details-tab"
          tabIndex="0"
        >
          <div className="developer-info-wrap">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Name:</span>
                      <p>Aadi Srivstava</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon02.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Email:</span>
                      <p>aadiprofessional8@gmail.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon03.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Language:</span>
                      <p>English/Hindi</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon04.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Phone No:</span>
                      <p>+91 9289881135</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon05.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Address:</span>
                      <p>46/IV NCERT CAMPUS ,New Delhi,INDIA</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon06.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Nationality:</span>
                      <p>Indian</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="awards-tab-pane"
          role="tabpanel"
          aria-labelledby="awards-tab"
          tabIndex="0"
        >
          <div className="developer-info-wrap">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon06.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Webby Awards</span>
                      <p>Top Three</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon06.png" alt="" />
                    </div>
                    <div className="content">
                      <span>CryptoChicks Hackathon Prize</span>
                      <p>1st Prize Winner</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon06.png" alt="" />
                    </div>
                    <div className="content">
                      <span>International Animation Festival Award</span>
                      <p>Selected for National Level</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon06.png" alt="" />
                    </div>
                    <div className="content">
                      <span>IIIT Design Award</span>
                      <p>Among Best Five</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon06.png" alt="" />
                    </div>
                    <div className="content">
                      <span>1Pixel Design Award</span>
                      <p>3rd Runner Up</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon06.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Academy Award for Best Animated Feature</span>
                      <p>2nd Prize Winner</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="skills-tab-pane"
          role="tabpanel"
          aria-labelledby="skills-tab"
          tabIndex="0"
        >
          <div className="developer-info-wrap">
            <div className="row">
              <div className="col-md-6">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Skill:</span>
                      <p>Product Design</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Skill:</span>
                      <p>React.js</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Skill:</span>
                      <p>Web3/Blockchain</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-wrap">
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Skill:</span>
                      <p>Animation(Blender,Unity)</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Skill:</span>
                      <p>Flutter</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <img src="/img/icon/developer_icon01.png" alt="" />
                    </div>
                    <div className="content">
                      <span>Skill:</span>
                      <p>UI/UX Design</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperAreaTabs;
