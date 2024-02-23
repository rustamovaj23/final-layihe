import React, {useState} from 'react'
import Axios from "../../Helpers/Axios";
import slugify from 'react-slugify'
import Loading from '../../Components/Loading/Loading'
import {handleError, handleSuccess} from "../../Helpers/Helpers";


const Add = ({pushCategory}) => {
    const freshCategory = {title: '', slug: ''}
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState(freshCategory)


    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        Axios.post('categories', category)
            .then(res => {
                if (res.data.success) {
                    handleSuccess(res.data.message)
                    pushCategory(res.data.data.category)
                    setCategory(freshCategory)
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
                            Kateqoriya əlavə et
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
                                <label htmlFor="title">Kateqoriya adı</label>
                                <input type="text" id="title" name="title" placeholder="Kateqoriya adı"
                                       className="form-control"
                                       onChange={e => setCategory({
                                           title: e.target.value,
                                           slug: slugify(e.target.value)
                                       })}
                                       value={category.title}
                                       required={true}/>
                            </div>
                            <div className="mt-3">
                                <label htmlFor="slug">Slug</label>
                                <input type="text" id="slug" name="slug" placeholder="Slug" className="form-control"
                                       onChange={e => setCategory({...category, slug: e.target.value})}
                                       value={category.slug}
                                       required={true}/>
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
        </div>)
}

export default Add