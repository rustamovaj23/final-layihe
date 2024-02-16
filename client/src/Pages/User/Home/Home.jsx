import React, { useState, useEffect } from "react";
import FlowerExperts from "../../../Components/FlowerExperts/FlowerExperts";
import FlowerExpertsPhotos from "../../../Components/FlowerExpertsPhotos/FlowerExpertsPhotos";
import Surprise from "../../../Components/Surprise/Surprise";
import Cards from "../../../Components/Cards/Cards";
import FlowerCategories from "../../../Components/FlowerCategories/FlowerCategories";
import Slide from "../../../Components/Slide/Slide";
import { Parallax } from "swiper/modules";
import Axios from "../../../Helpers/Axios";
import { handleError } from "../../../Helpers/Helpers";
import Loading from "../../../Components/Loading/Loading";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    Promise.all([getCategories(), getProducts()])
      .catch((err) => handleError(err))
      .finally(() => setLoading(false));
  }, []);

  const getCategories = () => {
    return Axios.get("categories").then((res) => {
      if (res.data.success) {
        setCategories(res.data.data.categories);
      }
    });
  };

  const getProducts = () => {
    return Axios.get("products").then((res) => {
      if (res.data.success) {
        setProducts(res.data.data.products);
      }
    });
  };

  return (
    <div>
      {loading && <Loading />}

      <FlowerCategories currentRoute="all" categories={categories} />
      {products && products.length > 0 && <Cards products={products} />}
      <Surprise />
      <FlowerExperts />
      <FlowerExpertsPhotos />
      <Slide />
    </div>
  );
};

export default Home;
