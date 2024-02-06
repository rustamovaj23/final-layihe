import React from "react";
import "./FAQPage.css";
import { CiSearch } from "react-icons/ci";


const FAQPage = () => {
  return (
    <div className="faq-page">
      <div className="faqpage-top">
        <div className="faqpage-img">
          <img
            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/p1-title-img.jpg"
            alt=""
          />
        </div>
        <div className="top-text">
          <p style={{ color: "black", fontSize: "55px" }}>FAQ Page</p>
          <p style={{ color: "#6d6a6a", fontSize: "20px" }}>
            Where flowers are our inspiration
          </p>
        </div>
      </div>
      <div className="faqpage-middle">
        <div className="middle-left">
          <div className="left-top">
            <p style={{"fontWeight":"bold"}}>FREQUENTLY ASKED QUESTIONS</p>
          </div>
          <div className="left-mid">
            <div className="left-mid-p">
              <a href="#01" style={{ color: "#6d6a6a", fontSize: "15px" }}>
                Creating messages of magnificence.
              </a>
              <a href="#02" style={{ color: "#6d6a6a", fontSize: "15px" }}>
                Always making beautiful flowers.
              </a>
              <a href="#03" style={{ color: "#6d6a6a", fontSize: "15px" }}>
                Made for all of life’s celebrations.
              </a>
              <a href="#04" style={{ color: "#6d6a6a", fontSize: "15px" }}>
                Shouldn’t your flowers be unique too?
              </a>
              <a href="#05" style={{ color: "#6d6a6a", fontSize: "15px" }}>
                We create emotions.
              </a>
              <a href="#06" style={{ color: "#6d6a6a", fontSize: "15px" }}>
                With your thoughts in hand.
              </a>
              <a href="#07" style={{ color: "#6d6a6a", fontSize: "15px" }}>
                Creative solutions.
              </a>
            </div>
            <div className="search-inp">
              {/* <div className="input-container">
              <input type="Search" name="" id="" placeholder="Search" style={{"fontSize":"15px"}}/>
              <CiSearch style={{"fontSize":"20px", "marginRight":"15px"}} />
              </div> */}
            </div>
          </div>
        </div>
        <div className="middle-right">
          <div className="mid-right-text">
            <div className="spans">
            <span id="01" style={{ color: "#f34f3f", fontWeight: "bold", "fontSize":"25px" }}>0.1</span>
            <span style={{"fontSize":"30px"}}>Creating messages of magnificence.</span>
            </div>
            <div className="mid-right-p">
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos imenaeos. Mauris in erat{" "}
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non neque elit. Sed ut imperdiet
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              nisi. Proin condimentum fermentum nunc. Etiam haretra, erat sed.
            </p>
            </div>
          </div>
          <div className="mid-right-text">
            <div className="spans">
            <span id="02" style={{ color: "#f34f3f", fontWeight: "bold", "fontSize":"25px" }}>0.2</span>
            <span style={{"fontSize":"30px"}}>Always making beautiful flowers.</span>
            </div>
           <div className="mid-right-p">
           <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos imenaeos. Mauris in erat
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non neque elit. Sed ut imperdiet
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              nisi. Proin condimentum fermentum nunc. Etiam aretra, erat sed
              fermentum feugiat, velit mauris egestas
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              quam, ut aliquam massa nisl quis eque. Suspendisse in orci enim.
              This is Photoshop's version of Lorem
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor, nisi elit
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit.
            </p>
           </div>
          </div>
          <div className="mid-right-text">
            <div className="spans">
            <span id="03" style={{ color: "#f34f3f", fontWeight: "bold", "fontSize":"25px" }}>0.3</span>{" "}
            <span style={{ "fontSize":"30px"}}>Made for all of life’s celebrations.</span>
            </div>
            <div className="mid-right-p">
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos imenaeos. Mauris in erat{" "}
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non neque elit. Sed ut imperdiet
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              nisi. Proin condimentum fermentum nunc. Etiam haretra, erat sed.
            </p>
            </div>
          </div>
          <div className="mid-right-text">
            <div className="spans">
            <span id="04" style={{ color: "#f34f3f", fontWeight: "bold", "fontSize":"25px" }}>0.4</span>
            <span style={{"fontSize":"30px"}}>Shouldn’t your flowers be unique too?</span>
            </div>
           <div className="mid-right-p">
           <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos imenaeos. Mauris in erat{" "}
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non neque elit. Sed ut imperdiet
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              nisi. Proin condimentum fermentum nunc. Etiam aretra, erat sed
              fermentum feugiat, velit mauris egestas
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              quam, ut aliquam assa nisl quis neque. Suspendisse in orci enim.
              This is
            </p>
           </div>
          </div>
          <div className="mid-right-text">
            <div className="spans">
            <span id="05" style={{ color: "#f34f3f", fontWeight: "bold", "fontSize":"25px" }}>0.5</span>
            <span style={{ "fontSize":"30px"}}>We
            create emotions.</span>
            </div>
            <div className="mid-right-p">
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos imenaeos. Mauris in erat{" "}
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non neque elit. Sed ut imperdiet
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              nisi. Proin condimentum fermentum nunc. Etiam aretra, erat sed
              fermentum feugiat, velit mauris egestas
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              quam, ut aliquam massa nisl quis eque. Suspendisse in orci enim.
              This is Photoshop's version of Lorem{" "}
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor, nisi elit
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
              amet nibh vulputate cursus a sit.
            </p>
            </div>
          </div>
          <div className="mid-right-text">
            <div className="spans">
            <span id="06" style={{ color: "#f34f3f", fontWeight: "bold", "fontSize":"25px" }}>0.6</span>
           <span style={{ "fontSize":"30px"}}> With your thoughts in hand.</span>
            </div>
            <div className="mid-right-p">
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos imenaeos. Mauris in erat{" "}
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non neque elit. Sed ut imperdiet
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              nisi. Proin condimentum fermentum nunc. Etiam haretra, erat sed.
            </p>
            </div>
          </div>
          <div className="mid-right-text">
            <div className="spans">
            <span id="07" style={{ color: "#f34f3f", fontWeight: "bold", "fontSize":"25px" }}>0.7</span>
            <span style={{"fontSize":"30px"}}>Creative solutions.</span>
            </div>
            <div className="mid-right-p">
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos imenaeos. Mauris in erat{" "}
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              justo. Nullam ac urna eu felis dapibus condimentum sit amet a
              augue. Sed non neque elit. Sed ut imperdiet
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              nisi. Proin condimentum fermentum nunc. Etiam aretra, erat sed
              fermentum feugiat, velit mauris egestas
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              quam, ut aliquam massa nisl quis eque. Suspendisse in orci enim.
              This is Photoshop's version of Lorem
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor, nisi elit
            </p>
            <p style={{ color: "#6d6a6a", fontSize: "18px" }}>
              consequat ipsum, nec sagittis sem nibh.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
