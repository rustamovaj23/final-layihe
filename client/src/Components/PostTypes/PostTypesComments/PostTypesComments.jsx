import React from "react";

const PostTypesComments = () => {
    return (
        <div className="all-comment">
            <h4>Comments</h4>
            <div className="comments">
                <div className="comment">
                    <div className="comment-image">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-subscriber-img.png"
                            alt=""/>
                    </div>
                    <div className="comment-content">
                        <div className="comment-content-top">
                            <div className="username">PATRICIA HOPKINS</div>
                            <div className="date">03.05.2018</div>
                        </div>
                        <div className="comment-text">
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
                                dapibus condimentum sit amet a augue.</p>
                        </div>
                        <a href="#">REPLY</a>
                    </div>
                </div>
                <div className="comment comment-reply">
                    <div className="comment-image">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/blog-subscriber-img-2.png"
                            alt=""/>
                    </div>
                    <div className="comment-content">
                        <div className="comment-content-top">
                            <div className="username">CHRIS JENKIN</div>
                            <div className="date">03.05.2018</div>
                        </div>
                        <div className="comment-text">
                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis
                                dapibus condimentum sit amet a augue.</p>
                        </div>
                        <a href="#">REPLY</a>
                    </div>
                </div>
            </div>
            <div className="post-a-comment">
                <p>Post a comment</p>
                <div className="textarea">
                    <textarea placeholder="Your comment"></textarea>
                </div>
                <div className="input-bttn">
                    <div className="inputlar">
                        <input type="text" placeholder="Your Name" className="inputlarrr"/>
                        <input type="text" placeholder="Your Email" className="inputlarrr"/>
                        <input type="text" placeholder="Website" className="inputlarrr"/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value=""
                               id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Save my name, email, and website in this browser for the next time I
                            comment.
                        </label>
                    </div>
                    <div className="submittt">
                        <button className="submittt">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default PostTypesComments