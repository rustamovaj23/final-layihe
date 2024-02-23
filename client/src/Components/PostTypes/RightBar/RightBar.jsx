import React from "react";

const RightBar = () => {
    return (
        <div className="fiorello-right col-lg-3 col-12">
            <div className="right-search">
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="Search here"/>
                    <button type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                            <path
                                fill="none" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2" d="m5 27l7.5-7.5M28 13a9 9 0 1 1-18 0a9 9 0 0 1 18 0"/>
                        </svg>
                    </button>
                </form>
            </div>
            <div className="birinci-sag">
                <div className="fiorello-right-first">
                    <h5>CATEGORIES</h5>
                </div>
                <div className="fiorello-right-second">
                    <p>Bouquets</p>
                    <p>Cactuses</p>
                    <p>Exotic Blooms</p>
                    <p>Greens</p>
                    <p>Plants</p>
                    <p>Roses</p>
                </div>
            </div>
            <div className="recent-posts">
                <div className="recent-posts-first">
                    <h5>RECENT POSTS</h5>
                </div>
                <div>
                    <div className="recent-posts-bottom">
                        <div className="recent">
                            <div className="rcnt-img">
                                <img
                                    src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-8-150x100.jpg"
                                    alt=""/>
                            </div>
                            <div className="rcnt-content">
                                <div className="rcnt-username">
                                    <a href="#">
                                        SAY YOU CARE
                                    </a>
                                </div>
                                <div className="rcnt-date">
                                    04.05.2018
                                </div>
                            </div>
                        </div>
                        <div className="recent">
                            <div className="rcnt-img">
                                <img
                                    src="	https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-9-150x100.jpg"
                                    alt=""/>
                            </div>
                            <div className="rcnt-content">
                                <div className="rcnt-username">
                                    <a href="#">
                                        WITH IMPACT
                                    </a>
                                </div>
                                <div className="rcnt-date">
                                    04.05.2018
                                </div>
                            </div>
                        </div>
                        <div className="recent">
                            <div className="rcnt-img">
                                <img
                                    src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/blog-feature-img-10-150x100.jpg"
                                    alt=""/>
                            </div>
                            <div className="rcnt-content">
                                <div className="rcnt-username">
                                    <a href="#">
                                        BEAUTIFULL FLOWERS
                                    </a>
                                </div>
                                <div className="rcnt-date">
                                    04.05.2018
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightBar