import React, {useState, useEffect} from "react";
import FlowerExperts from "../../../Components/FlowerExperts/FlowerExperts";
import FlowerExpertsPhotos from "../../../Components/FlowerExpertsPhotos/FlowerExpertsPhotos";
import Surprise from "../../../Components/Surprise/Surprise";
import Cards from "../../../Components/Cards/Cards";
import FlowerCategories from "../../../Components/FlowerCategories/FlowerCategories";
import Slide from "../../../Components/Slide/Slide";
import Axios from "../../../Helpers/Axios";
import {handleError} from "../../../Helpers/Helpers";
import Loading from "../../../Components/Loading/Loading";
import {useParams} from "react-router";
import FirstSlide from "../../../Components/FirstSlide/FirstSlide";
import SlideText from "../../../Components/FirstSlide/SlideText";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({
        sortBy: 'default',
        priceRange: 'all',
        categoryId: null
    })

    const {slug} = useParams();

    useEffect(() => {
        setLoading(true);
        Axios.get("categories")
            .then((res) => {
                if (res.data.success) {
                    setCategories(res.data.data.categories);
                }
            })
            .catch((err) => handleError(err))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setCategory(slug)
    }, [categories])

    useEffect(() => {
        setCategory(slug)
    }, [slug])

    useEffect(() => {
        setLoading(true)
        Axios.post("products/filter", filter)
            .then((res) => {
                if (res.data.success) {
                    setProducts(res.data.data.products);
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))
    }, [filter])

    const setCategory = (slug) => {
        const category = categories.find((cat) => cat.slug == slug);
        if (category) {
            setFilter({...filter, categoryId: category._id})
        }
    };

    return (
        <div>
            <div className="slide-container">
                <SlideText/>
                <FirstSlide/>
            </div>
            {loading && <Loading/>}
            <div className="container">
                <FlowerCategories currentRoute={slug} categories={categories} filter={filter} setFilter={setFilter}/>
                {products && products.length > 0 && <Cards products={products}/>}
            </div>
            <Surprise/>
            <FlowerExperts/>
            <FlowerExpertsPhotos/>
            <Slide/>
        </div>
    );
};

export default Categories;
