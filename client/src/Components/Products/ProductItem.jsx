import React from 'react'
import {FaEdit} from "react-icons/fa";
import {RiDeleteBin6Fill} from "react-icons/ri";
import Swal from 'sweetalert2'
import Axios from "../../Helpers/Axios";
import {handleError} from "../../Helpers/Helpers";


const ProductItem = ({product, index, selectProduct, setLoading, removeProduct}) => {
    const askRemove = () => {
        Swal.fire({
            title: "Məhsul silinsin ?",
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
        Axios.delete('products/' + product._id)
            .then(res => {
                if (res.data.success) {
                    Swal.fire(res.data.message, "", "success");
                    removeProduct(product._id)
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
            <td>{product.category.title}</td>
            <td>
                <img src={product.images[0].url} alt=""/>
            </td>
            <td>{product.name}</td>
            <td>{product.price} AZN</td>
            <td>{product.quantity} ədəd</td>
            <td className="iconss">
                <FaEdit
                    data-bs-toggle="modal" data-bs-target="#updateModal"
                    onClick={() => selectProduct(product)}
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

export default ProductItem