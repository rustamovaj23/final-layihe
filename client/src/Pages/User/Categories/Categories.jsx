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
import { useParams } from "react-router";

const Categories = () => {
  const [category, setCategory] = useState({});
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { slug } = useParams();

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
    setCurrentCategory();
    getProducts();
  }, [slug, categories]);

  const findCategory = (slug) => {
    return categories.find((cat) => cat.slug == slug);
  };

  const getProducts = () => {
    const category = findCategory(slug);
    if (category) {
      setLoading(true);

      Axios.post("products/get_by_category", {
        category_id: category._id,
      })
        .then((res) => {
          if (res.data.success) {
            setProducts(res.data.data.products);
          }
        })
        .catch((err) => handleError(err))
        .finally(() => setLoading(false));
    }
  };

  const setCurrentCategory = () => {
    const cat = categories.find((c) => c.slug == slug);

    if (cat) {
      console.log("current cat", cat);
      setCategory(cat);
    }
  };

  return (
    <div>
      {loading && <Loading />}
      <FlowerCategories currentRoute={slug} categories={categories} />
      {products && products.length > 0 && <Cards products={products} />}
      <Surprise />
      <FlowerExperts />
      <FlowerExpertsPhotos />
      <Slide />
    </div>
  );
};

export default Categories;
