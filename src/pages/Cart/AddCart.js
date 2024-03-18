// import { useDispatch } from 'react-redux'

// import React from 'react';
// import { removeProduct } from "./cartSlice";

// import { useSelector } from 'react-redux';
// // import CartItems from './CartItems'; // Import CartItems component

// function Cart() {
//     // Fetch product items from Redux store
//     const productItems = useSelector((state) => state.productItem.localStorageItems);

//     const dispatch=useDispatch()

//     const handleRemove = (item) => {
//         // Dispatch the removeProduct action with the index of the item to remove
//         dispatch(removeProduct(item));
//     };
//     return (
//         <div>
//             {/* Render CartItems components */}
//             {/* {items} */}
//             <div>
//             {productItems.map((item, index) => (
//                 <div className="cart-item" key={index}>
//                     <img src={item.image} alt={item.name} />
//                     <div>
//                         <h3>Name : {item.name}</h3>
//                         <p>Price: ₹{item.price}</p>
//                         <p>Quantity: {item.quantity}</p>
//                         <p>Total Price: ₹{item.totalPrice}</p>
//                         <p>Total category: ₹{item.category}</p>
//                     </div><button>+</button>

//                     <button>-</button>
//                   <button onClick={() => handleRemove(item)}>Remove</button>
//                 </div>
//             ))}
//         </div>
//         </div>
//     );
// }

// export default Cart;

// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { removeProduct, increaseQuantity, decreaseQuantity } from "./cartSlice";
// import { useSelector } from 'react-redux';

// function Cart() {
//     // Fetch product items from Redux store
//     const productItems = useSelector((state) => state.productItem.localStorageItems);

//     const dispatch = useDispatch();

//     const handleRemove = (item) => {
//         // Dispatch the removeProduct action with the item to remove
//         dispatch(removeProduct(item));
//     };

//     const handleIncreaseQuantity = (item) => {
//         // Dispatch the increaseQuantity action with the item to increase quantity
//         dispatch(increaseQuantity(item.id));
//     };

//     const handleDecreaseQuantity = (item) => {
//         // Dispatch the decreaseQuantity action with the item to decrease quantity
//         dispatch(decreaseQuantity(item.id));
//     };

//     return (
//         <div>
//             <div>
//                 {productItems.map((item, index) => (
//                     <div className="cart-item" key={index}>
//                         <img src={item.image} alt={item.name} />
//                         <div>
//                             <h3>Name : {item.name}</h3>
//                             <p>Price: ₹{item.price}</p>
//                             <p>Quantity: {item.quantity}</p>
//                             <p>Total Price: ₹{item.totalPrice}</p>
//                             {/* <p>Total category: ₹{item.category}</p> */}
//                         </div>
//                         <button onClick={() => handleIncreaseQuantity(item)}>+</button>
//                         <button onClick={() => handleDecreaseQuantity(item)}>-</button>
//                         <button onClick={() => handleRemove(item)}>Remove</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Cart;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { removeProduct, increaseQuantity, decreaseQuantity } from "./cartSlice";
// import { useSelector } from 'react-redux';

// function Cart() {
//     // Fetch product items from Redux store
//     const productItems = useSelector((state) => state.productItem.localStorageItems);
//     const [showGrandTotal, setShowGrandTotal] = useState(false);
//     const dispatch = useDispatch();

//     const handleRemove = (item) => {
//         // Dispatch the removeProduct action with the item to remove
//         dispatch(removeProduct(item));
//     };

//     const handleIncreaseQuantity = (item) => {
//         // Dispatch the increaseQuantity action with the item to increase quantity
//         dispatch(increaseQuantity(item.id));
//     };

//     const handleDecreaseQuantity = (item) => {
//         // Dispatch the decreaseQuantity action with the item to decrease quantity
//         dispatch(decreaseQuantity(item.id));
//     };

//     const calculateGrandTotal = () => {
//         return productItems.reduce((total, item) => total + item.totalPrice, 0);
//     };

//     return (
//         <div>
//             <div>
//                 {productItems.map((item, index) => (
//                     <div className="cart-item" key={index}>
//                         <img src={item.image} alt={item.name} />
//                         <div>
//                             <h3>Name : {item.name}</h3>
//                             <p>Price: ₹{item.price}</p>
//                             <p>Quantity: {item.quantity}</p>
//                             <p>Total Price: ₹{item.totalPrice}</p>
//                             {/* <p>Total category: ₹{item.category}</p> */}
//                         </div>
//                         <button onClick={() => handleIncreaseQuantity(item)}>+</button>
//                         <button onClick={() => handleDecreaseQuantity(item)}>-</button>
//                         <button onClick={() => handleRemove(item)}>Remove</button>
//                     </div>
//                 ))}
//             </div>
//             <button onClick={() => setShowGrandTotal(true)}>Show Grand Total</button>
//             {showGrandTotal && (
//                 <div>
//                     <p>Grand Total: ₹{calculateGrandTotal()}</p>
//                     <button onClick={() => setShowGrandTotal(false)}>Hide Grand Total</button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Cart;

import React from "react";
import { useDispatch } from "react-redux";
import { removeProduct, increaseQuantity, decreaseQuantity } from "./cartSlice";
import { useSelector } from "react-redux";
import "./Cart.css";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

function Cart() {
    // Fetch product items from Redux store
    const productItems = useSelector(
        (state) => state.productItem.localStorageItems
    );
    const totalQuantity = useSelector(
        (state) => state.productItem.totalQuantity
    ); // Corrected to use totalQuantity

    const dispatch = useDispatch();

    const handleRemove = (item) => {
        // Dispatch the removeProduct action with the item to remove
        dispatch(removeProduct(item));
    };

    const handleIncreaseQuantity = (item) => {
        // Dispatch the increaseQuantity action with the item to increase quantity
        dispatch(increaseQuantity(item.id));
    };

    const handleDecreaseQuantity = (item) => {
        // Dispatch the decreaseQuantity action with the item to decrease quantity
        dispatch(decreaseQuantity(item.id));
    };

    const calculateGrandTotal = () => {
        return productItems.reduce((total, item) => total + item.totalPrice, 0);
    };

    const goingpur = () => {
        alert("You are going to purchase..");
    };

    return (
        <div>
            <br></br>
            <div className="placeordertext">Placing an Order..</div>
            {productItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <div className="total">
                        <p className="grandtotal">
                            Total Quantity: {totalQuantity}
                        </p>{" "}
                        {/* Corrected */}
                    </div>

                    <div className="total">
                        <p className="grandtotal">
                            Grand Total: ₹{calculateGrandTotal().toFixed(2)}
                        </p>
                    </div>
                    <button className="buy" onClick={goingpur}>
                        Buy Now
                    </button>
                    <div className="cart-main">
                        {productItems.map((item, index) => (
                            <div className="cartitem" key={index}>
                                <Link to={`/details/${item.id}`}>
                                    <div className="image">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            height={"150px"}
                                        />
                                    </div>
                                </Link>
                                <div className="cart-btn-add-rem-main">
                                    <button
                                        clas
                                        
                                        sName="cart-btn-rem-add"
                                        onClick={() =>
                                            handleIncreaseQuantity(item)
                                        }
                                    >
                                        <GoPlus />
                                    </button>
                                </div>
                                <Link
                                    className="details"
                                    to={`/details/${item.id}`}
                                >
                                    <h3 className="item-heading">
                                        {item.name}
                                    </h3>
                                    <p className="pqt">Price: ₹{item.price}</p>
                                    <p className="pqt">
                                        Quantity: {item.quantity}
                                    </p>
                                    <p className="pqt">
                                        Total Price: ₹{item.totalPrice}
                                    </p>
                                </Link>
                                {/* </Link> */}
                                <div className="cart-btn-add-rem-main">
                                    <button
                                        className="cart-btn-rem-add"
                                        onClick={() =>
                                            handleDecreaseQuantity(item)
                                        }
                                    >
                                        <HiOutlineMinusSmall />
                                    </button>
                                </div>

                                <div className="remove">
                                    <RxCross2 className="cross-icon" />
                                    <button
                                        className="butback"
                                        onClick={() => handleRemove(item)}
                                    >
                                        &nbsp;&nbsp;Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
