import React from "react";
import "./Products.css";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import AddModal from '../../../Components/Products/AddModal'

const Products = () => {
  return (
    <div className="products">
      <AddModal />
      <div className="add">

        <button className='addBtn'
         data-bs-toggle="modal" data-bs-target="#addModal"
        >
          <IoIosAdd style={{"fontSize":"20px","color":"white","fontWeight":"bold"}}/>
          Add</button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>100</td>
            <td className="iconss">
              <FaEdit
                style={{
                  color: "rgb(255, 217, 3)",
                  fontSize: "24px",
                  cursor: "pointer",
                }}
              />
              <RiDeleteBin6Fill
                style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Products;
