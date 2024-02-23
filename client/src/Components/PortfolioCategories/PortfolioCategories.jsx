import React from "react";

const PortfolioCategories = ({categories, categorySlug, setCategorySlug}) => {

    const setSlug = (e, slug) => {
        e.preventDefault()
        setCategorySlug(slug)
    }

    const toggleMenu = (e) => {
        e.preventDefault()
        const el = document.getElementById('mobile-categories')
        el.classList.toggle("mobile-show")
    }

    return (
        <div className="flower-categories">
            <div id="mobile-categories" className="">
                <a href="#" onClick={e => toggleMenu(e)} className="dropdown-toggle">Categories</a>
                <div className="links">
                    <a href="#"
                       onClick={e => setSlug(e, 'all')}
                       className={categorySlug == "all" ? "active" : ""}>
                        ALL
                    </a>
                    {categories.map((category, index) => (
                        <a href="#"
                           onClick={e => setSlug(e, category.slug)}
                           key={`categoryIndex-${index}`}
                           className={categorySlug == category.slug ? "active" : ""}
                        >
                            {category.title}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PortfolioCategories;
