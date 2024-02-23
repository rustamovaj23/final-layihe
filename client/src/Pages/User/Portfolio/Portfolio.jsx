import React, {useEffect, useState} from 'react'
import "./Portfolio.css"
import LoadMoreBtn from '../../../Components/LoadMoreBtn/LoadMoreBtn'
import Axios from "../../../Helpers/Axios";
import {handleError} from "../../../Helpers/Helpers";
import Loading from "../../../Components/Loading/Loading";
import Cards from "../../../Components/Cards/Cards";
import PortfolioCategories from "../../../Components/PortfolioCategories/PortfolioCategories";
import PageTitle from "../../../Components/pageTitle/pageTitle";

const Portfolio = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [categorySlug, setCategorySlug] = useState('all')
    const [totalProduct, setTotalProduct] = useState(0)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(false)
    const perPage = 2

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
        setPage(1)
        getProducts(false, 1)
    }, [categorySlug])

    const getProducts = (appendOldProducts, nextPage) => {
        setLoading(true)
        let category_id = null
        if (categorySlug != 'all') {
            const category = categories.find(cat => cat.slug == categorySlug)
            category_id = category._id
        }

        const requestData = {
            page: nextPage,
            perPage,
            category_id
        }

        Axios.post("products/get_by_category", requestData)
            .then((res) => {
                if (res.data.success) {
                    if (appendOldProducts) {
                        const newProducts = products.concat(res.data.data.products)
                        setProducts(newProducts);
                    } else {
                        setProducts(res.data.data.products);
                    }
                    setTotalProduct(res.data.data.total)
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))
    }

    useEffect(() => {
        const skip = page * perPage; // Kaç ürünü atlayacağımızı hesapla
        // 50, 60, 70, ... < totalProduct
        if (skip < totalProduct) {
            setHasMore(true)
        } else {
            setHasMore(false)
        }
    }, [page, totalProduct])


    const loadMore = () => {
        setPage(page + 1)
        getProducts(true, page + 1)
    }


    return (
        <div>
            <PageTitle title='Portfolio Standart'/>
            {loading && <Loading/>}
            <div className="container category-products-container">
                <PortfolioCategories categories={categories} categorySlug={categorySlug}
                                     setCategorySlug={setCategorySlug}/>
                {products && products.length > 0 && <Cards products={products}/>}
            </div>
            {
                hasMore && <LoadMoreBtn loadMore={loadMore}/>
            }
        </div>
    )
}

export default Portfolio