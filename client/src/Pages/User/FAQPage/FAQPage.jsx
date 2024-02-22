import React from "react";
import "./FAQPage.css";
import PageHeader from "../../../Components/PageHeader/PageHeader";


const FAQPage = () => {
    const pageHeaderTitle = 'FAQ Page'
    const pageHeaderText = 'Where flowers are our inspiration'
    return (
        <div className="faq-page">
            <PageHeader title={pageHeaderTitle} text={pageHeaderText}/>
            <div className="container">
                <div className="faqpage-middle">
                    <div className="middle-left">
                        <div className="left-top">
                            <p>FREQUENTLY ASKED QUESTIONS</p>
                        </div>
                        <div className="left-mid">
                            <div className="left-mid-p">
                                <a href="#01">
                                    Creating messages of magnificence.
                                </a>
                                <a href="#02">
                                    Always making beautiful flowers.
                                </a>
                                <a href="#03">
                                    Made for all of life’s celebrations.
                                </a>
                                <a href="#04">
                                    Shouldn’t your flowers be unique too?
                                </a>
                                <a href="#05">
                                    We create emotions.
                                </a>
                                <a href="#06">
                                    With your thoughts in hand.
                                </a>
                                <a href="#07">
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
                                <span id="01">01. </span>
                                <span>Creating messages of magnificence.</span>
                            </div>
                            <div className="mid-right-p">
                                <p>
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos imenaeos. Mauris in erat
                                </p>
                                <p>
                                    justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                                    augue. Sed non neque elit. Sed ut imperdiet
                                </p>
                                <p>
                                    nisi. Proin condimentum fermentum nunc. Etiam haretra, erat sed.
                                </p>
                            </div>
                        </div>
                        <div className="mid-right-text">
                            <div className="spans">
                                <span>02. </span>
                                <span>Always making beautiful flowers.</span>
                            </div>
                            <div className="mid-right-p">
                                <p>
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos imenaeos. Mauris in erat
                                </p>
                                <p>
                                    justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                                    augue. Sed non neque elit. Sed ut imperdiet
                                </p>
                                <p>
                                    nisi. Proin condimentum fermentum nunc. Etiam aretra, erat sed
                                    fermentum feugiat, velit mauris egestas
                                </p>
                                <p>
                                    quam, ut aliquam massa nisl quis eque. Suspendisse in orci enim.
                                    This is Photoshop's version of Lorem
                                </p>
                                <p>
                                    Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                    sollicitudin, lorem quis bibendum auctor, nisi elit
                                </p>
                                <p>
                                    consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
                                    amet nibh vulputate cursus a sit.
                                </p>
                            </div>
                        </div>
                        <div className="mid-right-text">
                            <div className="spans">
                                <span id="03">03. </span>
                                <span>Made for all of life’s celebrations.</span>
                            </div>
                            <div className="mid-right-p">
                                <p>
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos imenaeos. Mauris in erat
                                </p>
                                <p>
                                    justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                                    augue. Sed non neque elit. Sed ut imperdiet
                                </p>
                                <p>
                                    nisi. Proin condimentum fermentum nunc. Etiam haretra, erat sed.
                                </p>
                            </div>
                        </div>
                        <div className="mid-right-text">
                            <div className="spans">
                                <span id="04">04. </span>
                                <span>Shouldn’t your flowers be unique too?</span>
                            </div>
                            <div className="mid-right-p">
                                <p>
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos imenaeos. Mauris in erat
                                </p>
                                <p>
                                    justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                                    augue. Sed non neque elit. Sed ut imperdiet
                                </p>
                                <p>
                                    nisi. Proin condimentum fermentum nunc. Etiam aretra, erat sed
                                    fermentum feugiat, velit mauris egestas
                                </p>
                                <p>
                                    quam, ut aliquam assa nisl quis neque. Suspendisse in orci enim.
                                    This is
                                </p>
                            </div>
                        </div>
                        <div className="mid-right-text">
                            <div className="spans">
                                <span id="05">05. </span>
                                <span>We create emotions.</span>
                            </div>
                            <div className="mid-right-p">
                                <p>
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos imenaeos. Mauris in erat
                                </p>
                                <p>
                                    justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                                    augue. Sed non neque elit. Sed ut imperdiet
                                </p>
                                <p>
                                    nisi. Proin condimentum fermentum nunc. Etiam aretra, erat sed
                                    fermentum feugiat, velit mauris egestas
                                </p>
                                <p>
                                    quam, ut aliquam massa nisl quis eque. Suspendisse in orci enim.
                                    This is Photoshop's version of Lorem
                                </p>
                                <p>
                                    Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                    sollicitudin, lorem quis bibendum auctor, nisi elit
                                </p>
                                <p>
                                    consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
                                    amet nibh vulputate cursus a sit.
                                </p>
                            </div>
                        </div>
                        <div className="mid-right-text">
                            <div className="spans">
                                <span id="06">06. </span>
                                <span> With your thoughts in hand.</span>
                            </div>
                            <div className="mid-right-p">
                                <p>
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos imenaeos. Mauris in erat
                                </p>
                                <p>
                                    justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                                    augue. Sed non neque elit. Sed ut imperdiet
                                </p>
                                <p>
                                    nisi. Proin condimentum fermentum nunc. Etiam haretra, erat sed.
                                </p>
                            </div>
                        </div>
                        <div className="mid-right-text">
                            <div className="spans">
                                <span id="07">07. </span>
                                <span>Creative solutions.</span>
                            </div>
                            <div className="mid-right-p">
                                <p>
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos imenaeos. Mauris in erat
                                </p>
                                <p>
                                    justo. Nullam ac urna eu felis dapibus condimentum sit amet a
                                    augue. Sed non neque elit. Sed ut imperdiet
                                </p>
                                <p>
                                    nisi. Proin condimentum fermentum nunc. Etiam aretra, erat sed
                                    fermentum feugiat, velit mauris egestas
                                </p>
                                <p>
                                    quam, ut aliquam massa nisl quis eque. Suspendisse in orci enim.
                                    This is Photoshop's version of Lorem
                                </p>
                                <p>
                                    Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                    sollicitudin, lorem quis bibendum auctor, nisi elit
                                </p>
                                <p>
                                    consequat ipsum, nec sagittis sem nibh.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
