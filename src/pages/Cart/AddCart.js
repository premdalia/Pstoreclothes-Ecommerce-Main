
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

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProduct, increaseQuantity, decreaseQuantity } from "./cartSlice";
import { useSelector } from 'react-redux';
import './Cart.css';
import { Link } from 'react-router-dom';
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSmall } from "react-icons/hi2";




function Cart() {
    // Fetch product items from Redux store
    const productItems = useSelector((state) => state.productItem.localStorageItems);
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

    return (
        // <div>
        //     <div>
        //         {productItems.map((item, index) => (
        //             <div className="cart-item" key={index}>
        //                 <img src={item.image} alt={item.name} />
        //                 <div>
        //                     <h3>Name : {item.name}</h3>
        //                     <p>Price: ₹{item.price}</p>
        //                     <p>Quantity: {item.quantity}</p>
        //                     <p>Total Price: ₹{item.totalPrice}</p>
        //                     {/* <p>Total category: ₹{item.category}</p> */}
        //                 </div>
        //                 <button onClick={() => handleIncreaseQuantity(item)}>+</button>
        //                 <button onClick={() => handleDecreaseQuantity(item)}>-</button>
        //                 <button onClick={() => handleRemove(item)}>Remove</button>
        //             </div>
        //         ))}
        //     </div>
        //     <div>
        //         <p>Grand Total: ₹{calculateGrandTotal()}</p>
        //     </div>
        // </div>

        <div>
            <br></br>
            <div className='placeordertext'>Placing an Order..</div>
            {productItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (

                <div >
                    <div className="total">
                        <p className='grandtotal'>Grand Total: ₹{calculateGrandTotal().toFixed(2)}</p>
                    </div>

                    <div className='cart-main'>
                        {productItems.map((item, index) => (

                            <div className="cartitem" key={index}>
                                <Link to={`/details/${item.id}`}>
                                    <div className="image">
                                        <img src={item.image} alt={item.name} height={"150px"} />
                                    </div>
                                </Link>
                                <div className='cart-btn-add-rem-main'>
                                    <button className='cart-btn-rem-add' onClick={() => handleIncreaseQuantity(item)}>
                                        <GoPlus />
                                    </button>
                                </div>
                                <Link className="details" to={`/details/${item.id}`} >
                                    <h3 className="item-heading">{item.name}</h3>
                                    <p className="pqt">Price: ₹{item.price}</p>
                                    <p className="pqt">Quantity: {item.quantity}</p>
                                    <p className="pqt">Total Price: ₹{item.totalPrice}</p>
                                </Link>
                                {/* </Link> */}
                                <div className='cart-btn-add-rem-main'>
                                    <button className='cart-btn-rem-add' onClick={() => handleDecreaseQuantity(item)}><HiOutlineMinusSmall /></button>
                                </div>

                                <div className="remove">
                                    <button className="butback" onClick={() => handleRemove(item)}>
                                        <svg version="1.1" width="20px" height="23px" viewBox="2.54312999459216E-06 -0.194655999541283 113.526997884116 113.527656182647" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <linearGradient id="def0" x1="0.499995" x2="0.499995" y1="1.73779E-06" y2="1.00001">
                                                    <stop offset="0" stopColor="#F27E5E" />
                                                    <stop offset="0.5" stopColor="#EB1C24" />
                                                    <stop offset="1" stopColor="#CE2229" />
                                                </linearGradient>
                                            </defs>
                                            <g>
                                                <path d="M2.54313E-06,87.5347L30.964,56.564 2.54313E-06,25.6013 25.7973,-0.194656 56.7627,30.7707 87.7267,-0.194656 113.527,25.6013 82.5627,56.5693 113.527,87.5347 87.7267,113.329 56.7667,82.364 25.7973,113.333 2.54313E-06,87.5347z" fill="#990000" />
                                                <path d="M111.641,87.5341L80.6768,56.5701 111.641,25.6021 87.7261,1.69014 56.7635,32.6555 25.7968,1.69014 1.8848,25.6021 32.8501,56.5648 1.8848,87.5341 25.7968,111.447 56.7675,80.4781 87.7261,111.443 111.641,87.5341z" fill="url(#def0)" />
                                                <path d="M53.5507,42.1597C69.9773,36.9184,86.2987,35.0784,101.036,36.2077L111.64,25.6024 87.7267,1.6904 56.7627,32.6557 25.7973,1.6904 1.88534,25.6024 29.0347,52.7491C36.5187,48.5651,44.7387,44.9717,53.5507,42.1597z" fill="#FFFFFF" style={{ fillOpacity: 0.101960784313725 }} />
                                            </g>
                                        </svg> &nbsp;&nbsp;Remove
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

