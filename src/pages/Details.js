import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import '../App.css';
import './Details.css'
import { useDispatch } from 'react-redux'
import { addProduct } from "./Cart/cartSlice";

function Details() {

    const { productid } = useParams();
    const [details, setDetails] = useState([]);
    const dispatch=useDispatch()


    useEffect(()=>{
        axios
        .get(`https://fluffy-bear-veil.cyclic.app/?id=${productid}`)
        .then((response)=>{
            setDetails(response.data);
        })
    }, [productid] );
const goingpur=()=>{

    alert("You are going to purchase..");
}

//     const addToCart = () => {
//         // Logic to add the current product to the cart
//         // You can use local storage or state management library for this
//         // For simplicity, let's assume you're using local storage
//         const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         cartItems.push(details);
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//         alert("Product add successfully in cart");
// }

const addToCart = () => {
    if (!details) return; // Ensure details are available before adding to cart
    dispatch(addProduct(details)); // Dispatch the addProduct action with the product details
    // console.log(`triggered addtocart`,details)
    // alert("Prod added successfully to cart");
};


    if (!details) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <div className="detailcard">
            <div className="dproductimage">
                    <img src={details.product_images} alt={details.product_name}  /></div>
                    {/* height="300px" width="400px" */}
               <div className="dproductdetails">
               <h3 >{details.product_name}</h3>
               <p>{details.description}</p>
                <h3 >₹{details.price}</h3>
                <button onClick={addToCart}>Add to Cart</button>
                <button className="buy"onClick={goingpur}>Buy Now</button>



                </div>
               </div>
            
        </>

    );
}
export default Details;





// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import './Details.css';

// function Details() {
//     const { productid } = useParams();
//     const [details, setDetails] = useState(null);
//     const [quantity, setQuantity] = useState(1); // Initialize quantity state with 1

//     useEffect(() => {
//         axios
//             .get(`https://fluffy-bear-veil.cyclic.app/?id=${productid}`)
//             .then((response) => {
//                 setDetails(response.data);
//             })
//     }, [productid]);

//     const addToCart = () => {
//         const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//         // Add the specified quantity of the product to the cart
//         for (let i = 0; i < quantity; i++) {
//             cartItems.push(details);
//         }
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//         alert("Product added successfully to the cart");
//     }

//     const incrementQuantity = () => {
//         setQuantity(quantity + 1);
//     }

//     const decrementQuantity = () => {
//         if (quantity > 1) {
//             setQuantity(quantity - 1);
//         }
//     }

//     if (!details) {
//         return <h1>Loading...</h1>
//     }

//     return (
//         <div className="detailcard">
//             <div className="dproductimage">
//                 <img src={details.product_images} alt={details.product_name} />
//             </div>
//             <div className="dproductdetails">
//                 <h3>{details.product_name}</h3>
//                 <p>{details.description}</p>
//                 <h3>₹{details.price}</h3>
//                 <div className="quantity-controls">
//                     <button onClick={decrementQuantity}>-</button>
//                     <span>{quantity}</span>
//                     <button onClick={incrementQuantity}>+</button>
//                 </div>
//                 <button onClick={addToCart}>Add to Cart</button>
//                 <button className="buy" onClick={() => alert("You are going to purchase..")}>Buy Now</button>
//             </div>
//         </div>
//     );
// }

// export default Details;
