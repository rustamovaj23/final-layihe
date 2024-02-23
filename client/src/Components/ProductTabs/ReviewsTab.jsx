import React from 'react'

const ReviewsTab = () => {
    return (
        <div className="tab-pane fade" id="product-reviews" role="tabpanel" aria-labelledby="product-reviews-tab"
             tabIndex="0">
            <h3>Reviews</h3>
            <div className="reviews">
                <div className="review">
                    <div className="user-image">
                        <img
                            src="https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/user-img-2-100x100.png"
                            alt=""/>
                    </div>
                    <div className="review-content">
                        <div className="top">
                            <div className="username">JOAN STANLEY</div>
                            <div className="created_at">30.04.2018</div>
                        </div>
                        <div className="bottom">
                            <div className="text">
                                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
                                sit
                                amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
                                hendrerit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="review-form">
                <h3>Add a review</h3>
                <form onSubmit={e => e.preventDefault()}>
                    <span>Your email address will not be published. Required fields are marked *</span>
                    <div className="mb-3">
                        <label htmlFor="review">Your review*</label>
                        <textarea name="review" id="review" className="form-control"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">Name *</label>
                        <input type="text" placeholder="Name" id="name" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email *</label>
                        <input type="email" placeholder="Email" id="email" className="form-control"/>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                    <div className="mt-3">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReviewsTab