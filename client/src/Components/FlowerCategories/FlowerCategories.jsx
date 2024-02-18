import React from "react";
import "./FlowerCategories.css";
import {Link} from "react-router-dom";

const FlowerCategories = ({currentRoute, categories, filter, setFilter}) => {

    const setSort = (e, sortBy) => {
        e.preventDefault()
        setFilter({...filter, sortBy: sortBy})
    }

    const setPriceRange = (e, priceRange) => {
        e.preventDefault()
        setFilter({...filter, priceRange: priceRange})
    }
    return (
        <div className="flower-categories">
            <div className="links">
                <Link className={currentRoute == "all" ? "active" : ""} to="/">
                    ALL
                </Link>
                {categories.map((category, index) => (
                    <Link
                        key={`categoryIndex-${index}`}
                        to={`/categories/${category.slug}`}
                        className={currentRoute == category.slug ? "active" : ""}
                    >
                        {category.title}
                    </Link>
                ))}
            </div>
            <div className="filter">
                <div className="dropdown">
                    <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        FILTER
                    </a>

                    <ul className="dropdown-menu">
                        <li className="sortBy">
                            <ul>
                                <li className="heading">Sort By</li>
                                <li>
                                    <a onClick={e => setSort(e, 'default')} href="#">
                                        Default
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setSort(e, 'newness')} href="#">
                                        Newness
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setSort(e, 'oldest')} href="#">
                                        Oldest
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setSort(e, 'low_to_high')} href="#">
                                        Price: Low To High
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setSort(e, 'high_to_low')} href="#">
                                        Price: High To Low
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="prices">
                            <ul>
                                <li className="heading">Price Range</li>
                                <li>
                                    <a onClick={e => setPriceRange(e, 'all')} href="#">
                                        All
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setPriceRange(e, [0, 10])} href="#">

                                        $0-$10
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setPriceRange(e, [10, 20])} href="#">
                                        $10-$20
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setPriceRange(e, [20, 30])} href="#">
                                        $20-$30
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setPriceRange(e, [30, 40])} href="#">
                                        $30-$40
                                    </a>
                                </li>
                                <li>
                                    <a onClick={e => setPriceRange(e, [40])} href="#">
                                        $40+
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FlowerCategories;
