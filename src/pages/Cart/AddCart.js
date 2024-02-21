
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
            <h1>Your Cart</h1>
            {productItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (

                <div >
                    <div className="Total">
                        <div>
                            <p>Grand Total: ₹{calculateGrandTotal().toFixed(2)}</p>
                        </div>

                    </div>
                    <div className='cart-main'>
                        {productItems.map((item, index) => (
                            <div className="cartitem" key={index}>
                                <div className="image"><img src={item.image} alt={item.name} height={"150px"} /></div>
                                <div className="details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ₹{item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Total Price: ₹{item.totalPrice}</p>
                                </div>
                                <div className="remove">
                                    <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                                    <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                                    <button onClick={() => handleRemove(item)}>Remove</button>
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

