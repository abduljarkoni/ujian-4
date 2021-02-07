import Grb_resume from "../../cards/img/bg1.jpg";
import "./Resume.css";

const Resume = () => {
  return (
    <section className="resume">
      <div className="resume_box">
        <h1>RESUME</h1>
        <hr />
        <div box_down>
          <div className="box_download">
            <h6>
              <i class="fas fa-download"></i>
              DOWNLOAD MY RESUME
            </h6>
          </div>
          <div className="box_download">
            <h6>
              <i class="fas fa-download"></i>
              GET IN TOUCH
            </h6>
          </div>
        </div>
        <h2>
          <i class="fas fa-home"></i>Education
        </h2>
        <div className="box_resume">
          <div className="box_graphic">
            <h1>Graphic Design</h1>
            <p>
              St. Patrick University (2 Years Course) - Graduation May 2013
              <hr />
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="box_master">
            <h1>Master of Web Design</h1>
            <p>St. Patrick University (2 Years Course) - Graduation May 2013</p>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="box_work">
            <h1>Work Experience</h1>
            <p>DotRex Co. Lead Designer - June 2012 --</p>
            <hr />
            <p>
              Current Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="box_oasis">
            <h1>Oasis Ltda.</h1>
            <p>Front-end Developer - Jan 2010 - Apr 2012</p>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="box_dups">
            <h1>Dupstudio</h1>
            <p>Designer - Jan 2010 - Apr 2012</p>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="box_black">
            <h1>Black Tie Corp.</h1>
            <p>Web Designer - Jan 2010 - Apr 2012</p>
            <hr />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="resume_carousel">
          <h1>Testimonials</h1>
          <hr />
          <div className="carousel_">
            <div className="card_testimo">
              <p className="title_card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                maiores veritatis eaque tenetur voluptas impedit voluptate,
                totam quis corrupti quo officiis, hic consectetur minus rem!
                Eius facilis ipsam quo quasi.
              </p>
              <img src={Grb_resume} alt="" className="gbr_card1" />
              <h3>Melisa Alvares</h3>
            </div>
            <div className="card_testimo">
              <p className="title_card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                maiores veritatis eaque tenetur voluptas impedit voluptate,
                totam quis corrupti quo officiis, hic consectetur minus rem!
                Eius facilis ipsam quo quasi.
              </p>
              <img src={Grb_resume} alt="" className="gbr_card2" />
              <h3>Jhone Rex</h3>
            </div>
            <div className="card_testimo">
              <p className="title_card">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                maiores veritatis eaque tenetur voluptas impedit voluptate,
                totam quis corrupti quo officiis, hic consectetur minus rem!
                Eius facilis ipsam quo quasi.
              </p>
              <img src={Grb_resume} alt="" className="gbr_card3" />
              <h3>Jhonatan Smith</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
