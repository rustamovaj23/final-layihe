import React, {useState} from "react";
import Loading from "../Loading/Loading";
import {TagsInput} from "react-tag-input-component";
import slugify from 'react-slugify'
import Axios from "../../Helpers/Axios";
import {handleError, handleSuccess} from "../../Helpers/Helpers";

const AddModal = ({categories, pushProduct}) => {
    const freshProduct = {
        category_id: '',
        name: '',
        slug: '',
        description: '',
        price: '',
        quantity: '',
        tags: [],
        images: [{url: ''}]
    }

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(freshProduct)


    const addImage = () => {
        let newImages = [...product.images]
        newImages.push({
            url: ''
        })
        setProduct({...product, images: newImages})
    }

    const removeImage = () => {
        const images = product.images
        if (images.length > 1) {
            images.pop()
        }
        setProduct({...product, images: images})
    }

    const setTags = (tags) => {
        const newTags = []
        tags.map(tag => newTags.push({
            key: slugify(tag),
            value: tag
        }))
        setProduct({...product, tags: newTags})
    }

    const handleImage = (image, index) => {
        const images = product.images
        images[index].url = image
        setProduct({...product, images: images})
    }


    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        Axios.post('products', product)
            .then(res => {
                if (res.data.success) {
                    handleSuccess(res.data.message)
                    pushProduct(res.data.data.product)
                    setProduct(freshProduct)
                } else if (res.data.error) {
                    handleError(res.data.message)
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))

    }

    return (
        <div
            className="modal fade"
            id="addModal"
            tabIndex="-1"
            aria-labelledby="addModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addModalLabel">
                            Məhsul əlavə et
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        {
                            loading && <Loading/>
                        }
                        <form onSubmit={onSubmit}>
                            <div className="mt-3">
                                <label htmlFor="category_id">Kateqoriya seçin</label>
                                <select name="category_id" className="form-select"
                                        value={product.category_id}
                                        id="category_id"
                                        onChange={e => setProduct({...product, category_id: e.target.value})}
                                        required={true}>
                                    <option>Seçin</option>
                                    {
                                        categories.map((category, index) => <option key={`category_index_${index}`}
                                                                                    value={category._id}>{category.title}</option>)
                                    }
                                </select>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="name">Məhsul adı</label>
                                <input type="text" id="name" className="form-control" placeholder="Məhsul adı"
                                       value={product.name}
                                       name="name"
                                       onChange={e => setProduct({
                                           ...product,
                                           name: e.target.value,
                                           slug: slugify(e.target.value)
                                       })}
                                       required={true}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="slug">Slug</label>
                                <input type="text" id="slug" className="form-control" placeholder="Slug"
                                       value={product.slug}
                                       name="slug"
                                       onChange={e => setProduct({
                                           ...product,
                                           slug: slugify(e.target.value)
                                       })}
                                       required={true}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="price">Qiymət</label>
                                <input type="number" id="price" className="form-control" placeholder="Qiymət"
                                       name="price"
                                       value={product.price}
                                       onChange={e => setProduct({...product, price: e.target.value})}
                                       required={true}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="quantity">Say (stok)</label>
                                <input type="number" id="quantity" className="form-control" placeholder="Say"
                                       onChange={e => setProduct({...product, quantity: e.target.value})}
                                       name="quantity"
                                       value={product.quantity}
                                       required={true}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="description">Açıqlama</label>
                                <textarea name="description" id="description" className="form-control"
                                          value={product.description}
                                          onChange={e => setProduct({...product, description: e.target.value})}
                                ></textarea>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="tag">Tag əlavə et</label>
                                <TagsInput
                                    value={product.tags.map(tag => tag.value)}
                                    onChange={tags => setTags(tags)}
                                    name="tags"
                                    placeHolder="Tags əlavə edin"
                                />
                            </div>
                            <div className="mt-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <label htmlFor="tag">Şəkil seçin</label>
                                    <div className="buttons d-flex">
                                        <button type="button" onClick={() => addImage()}
                                                className="btn btn-sm btn-success mx-2">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                        <button type="button" onClick={() => removeImage()}
                                                className="btn btn-sm btn-danger">
                                            <i className="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                {
                                    product.images.map((image, index) => <input type="url" id={`image_index_${index}`}
                                                                                placeholder="Şəkil"
                                                                                key={`image_index_${index}`}
                                                                                value={product.images[index].url}
                                                                                onChange={e => handleImage(e.target.value, index)}
                                                                                className="form-control mt-2"
                                                                                required={true}/>)
                                }
                            </div>
                            <div className="mt-3 d-flex flex-row-reverse">
                                <button className="btn btn-sm btn-primary" type="submit">Əlavə et</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Bağla
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddModal;
