import React, { useContext } from "react";
import CartText from "../../../Components/CartText/CartText";
import dataContext from "../../../Context/Context";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


const Cart = () => {
  const { basket, decreaseBtn, increase, removeFrombasket } =
    useContext(dataContext);

  const totalOrderAmount = basket.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div className="basket">
      <div className="baskett">
        <div className="bas">
          <CartText />
          {basket.map((item, index) => (
            <div className="left-basket" key={index}>
              <div className="sk">
                <img src={item.product.images[0].url} alt="" />
              </div>
              <div className="logo">
                <p className="saam">Yeni</p>
              </div>
              <div className="bosduz"></div>
              <div className="altalt">
                <div className="writeone">
                  <p>{item.product.name}</p>
                  <span
                    className="l"
                    onClick={() => {
                      removeFrombasket(item);
                    }}
                  ></span>
                </div>
                <div className="twobtn">
                  <div className="count">
                    <span>
                      <MdArrowBackIos
                        onClick={() => {
                          decreaseBtn(item);
                        }}
                      />
                    </span>
                    <p>{item.count}</p>
                    <span>
                      <MdArrowForwardIos
                        onClick={() => {
                          increase(item);
                        }}
                      />
                    </span>
                  </div>
                  <p className="total">{item.totalPrice}₼</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
