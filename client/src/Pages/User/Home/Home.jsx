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
import FirstSlide from "../../../Components/FirstSlide/FirstSlide";
import SlideText from "../../../Components/FirstSlide/SlideText";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState({
        sortBy: 'default',
        priceRange: 'all',
        categoryId: null
    })
    useEffect(() => {
        setLoading(true);
        Axios.get("categories")
            .then((res) => {
                if (res.data.success) {
                    setCategories(res.data.data.categories);
                }
            })
            .catch((err) => handleError(err))
            .finally(() => setLoading(false))
    }, []);

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


    return (
        <div>
            <div className="slide-container">
                <SlideText/>
                <FirstSlide/>
            </div>
            {loading && <Loading/>}
            <div className="container category-products-container">
                <FlowerCategories currentRoute="all" categories={categories} filter={filter} setFilter={setFilter}/>
                {products && products.length > 0 && <Cards products={products}/>}
            </div>
            <Surprise/>
            <FlowerExperts/>
            <FlowerExpertsPhotos/>
            <Slide/>
        </div>
    );
};

export default Home;
