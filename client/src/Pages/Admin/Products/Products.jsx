import React, {useEffect, useState} from "react";
import "./Products.css";
import {IoIosAdd} from "react-icons/io";
import AddModal from '../../../Components/Products/AddModal'
import Axios from "../../../Helpers/Axios";
import Loading from "../../../Components/Loading/Loading";
import ProductItem from "../../../Components/Products/ProductItem"
import UpdateModal from "../../../Components/Products/UpdateModal"
import {handleError} from "../../../Helpers/Helpers";

const Products = () => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState({
        category_id: '',
        name: '',
        slug: '',
        description: '',
        price: '',
        quantity: '',
        tags: [],
        images: [{url: ''}]
    })
    useEffect(() => {
        setLoading(true)
        Promise.all([getCategories(), getProducts()])
            .catch(err => handleError(err))
            .finally(() => setLoading(false))
    }, []);

    const getCategories = () => {
        return Axios.get('categories')
            .then(res => {
                if (res.data.success) {
                    setCategories(res.data.data.categories);
                }
            });
    }

    const getProducts = () => {
        return Axios.get('products')
            .then(res => {
                if (res.data.success) {
                    setProducts(res.data.data.products);
                }
            });
    }

    const pushProduct = (newProduct) => {
        setProducts([...products, newProduct])
    }

    const removeProduct = (productId) => {
        setProducts(products.filter(product => product._id != productId))
    }

    const updateProduct = (updatedProduct) => {
        const productIndex = products.findIndex(prod => prod._id == updatedProduct._id)
        if (productIndex > -1) {
            const newProducts = [...products]
            newProducts.splice(productIndex, 1)
            newProducts.splice(productIndex, 0, updatedProduct)
            setProducts(newProducts)
        }
    }

    return (
        <div className="products">
            <div className="container">
                <AddModal categories={categories} pushProduct={pushProduct}/>
                <UpdateModal categories={categories} updateProduct={updateProduct} selectedProduct={selectedProduct}/>

                <div className="add">

                    <button className='btn btn-sm addBtn text-white d-flex align-items-center'
                            data-bs-toggle="modal" data-bs-target="#addModal"
                    >
                        <IoIosAdd style={{"fontSize": "20px", "color": "white", "fontWeight": "bold"}}/>
                        Əlavə et
                    </button>
                </div>
                <hr/>
                {
                    loading && <Loading/>
                }
                <div className="table-responsive">
                    <table className="table table-bordered table-striped product-list">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Kateqoriya</th>
                            <th scope="col">Şəkil</th>
                            <th scope="col">Məhsul</th>
                            <th scope="col">Qiymət</th>
                            <th scope="col">Miqdar</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            products.map((product, index) => <ProductItem
                                key={`product_index_${index}`} index={index} product={product}
                                selectProduct={setSelectedProduct}
                                setLoading={setLoading}
                                removeProduct={removeProduct}
                            />)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Products;
