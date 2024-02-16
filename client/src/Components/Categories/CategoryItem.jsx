import React from 'react'
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin6Fill} from "react-icons/ri";
import Swal from 'sweetalert2'
import Axios from "../../Helpers/Axios";
import {handleError} from "../../Helpers/Helpers";


const CategoryItem = ({category, index, selectCategory, setLoading, removeCategory}) => {

    const askRemove = () => {
        Swal.fire({
            title: "Kateqoriya silinsin ? Kateqoriya ilə birlikdə məhsullar da silinəcək",
            showCancelButton: true,
            confirmButtonText: "Hə",
            cancelButtonText: "Yox"
        }).then((result) => {
            if (result.isConfirmed) {
                remove()
            }
        });
    }

    const remove = () => {
        setLoading(true)
        Axios.delete('categories/' + category._id)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(res.data.message, "", "success");
                    removeCategory(category._id)
                } else if (res.data.error) {
                    handleError(res.data.message)
                }
            })
            .catch(err => handleError(err))
            .finally(() => setLoading(false))

    }

    return (
        <tr>
            <td>{parseInt(index) + 1}</td>
            <td>{category.title}</td>
            <td>{category.productCount}</td>
            <td className="iconss">
                <FaEdit
                    data-bs-toggle="modal" data-bs-target="#updateModal"
                    onClick={() => selectCategory(category)}
                    style={{
                        color: "rgb(255, 217, 3)",
                        fontSize: "24px",
                        cursor: "pointer",
                    }}
                />
                <RiDeleteBin6Fill
                    onClick={() => askRemove()}
                    style={{color: "red", fontSize: "24px", cursor: "pointer"}}
                />
            </td>
        </tr>
    )
}

export default CategoryItem