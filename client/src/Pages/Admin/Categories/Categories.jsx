import React, {useEffect, useState} from 'react'
import CategoryItem from "../../../Components/Categories/CategoryItem";
import {IoIosAdd} from "react-icons/io";
import Add from '../../../Components/Categories/AddModal';
import Update from '../../../Components/Categories/Update'
import Axios from "../../../Helpers/Axios";
import {handleError} from "../../../Helpers/Helpers";
import Loading from "../../../Components/Loading/Loading";
import 'sweetalert2/src/sweetalert2.scss'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({title: '', slug: ''})
    useEffect(() => {
        getCategories()
    }, [])
    const getCategories = () => {
        setLoading(true)
        Axios.get('categories')
            .then(res => {
                if (res.data.success) {
                    setCategories(res.data.data.categories)
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))
    }

    const pushCategory = (newCategory) => {
        setCategories([...categories, newCategory])
    }


    const updateCategory = (updatedCategory) => {
        const categoryIndex = categories.findIndex(cat => cat._id == updatedCategory._id)
        if (categoryIndex > -1) {
            const newCategories = [...categories]
            newCategories.splice(categoryIndex, 1)
            newCategories.splice(categoryIndex, 0, updatedCategory)
            setCategories(newCategories)
        }
    }

    const removeCategory = (categoryId) => {
        setCategories(categories.filter(cat => cat._id != categoryId))
    }

    return (
        <div className="categories">
            <div className="container">
                <Add pushCategory={pushCategory}/>
                <Update updateCategory={updateCategory} selectedCategory={selectedCategory}/>
                <div className="add">
                    <button type="button" className="btn btn-sm addBtn text-white d-flex align-items-center"
                            data-bs-toggle="modal" data-bs-target="#addModal">
                        <IoIosAdd style={{"fontSize": "20px", "color": "white", "fontWeight": "bold"}}/>
                        Əlavə et
                    </button>
                </div>
                <hr/>
                {
                    loading && <Loading/>
                }

                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Kateqoriya adı</th>
                            <th scope="col">Məhsul sayı</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            categories.map((cat, index) => <CategoryItem
                                key={cat._id} index={index} category={cat}
                                selectCategory={setSelectedCategory}
                                setLoading={setLoading}
                                removeCategory={removeCategory}
                            />)
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Categories