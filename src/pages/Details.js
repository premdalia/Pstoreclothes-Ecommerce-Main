import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import '../App.css';
import "./Details.css";
import { useDispatch } from "react-redux";
import { addProduct } from "./Cart/cartSlice";

function Details() {
  const { productid } = useParams();
  const [details, setDetails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://fluffy-bear-veil.cyclic.app/?id=${productid}`)
      .then((response) => {
        setDetails(response.data);
      });
  }, [productid]);
  const goingpur = () => {
    alert("You are going to purchase..");
  };

  const addToCart = () => {
    if (!details) return; // Ensure details are available before adding to cart
    dispatch(addProduct(details)); // Dispatch the addProduct action with the product details

    alert("Added to Cart..");
  };

  if (!details) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="detailcard">
        <div className="dproductimage">
          <img src={details.product_images} alt={details.product_name} />
        </div>
        {/* height="300px" width="400px" */}
        <div className="dproductdetails">
          <h3>{details.product_name}</h3>
          <p>{details.description}</p>
          <h3>₹{details.price}</h3>
          <button onClick={addToCart}>Add to Cart</button>
          {/* <button className="buy"onClick={goingpur}>Buy Now</button> */}
        </div>
      </div>
    </>
  );
}
export default Details;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { useDispatch } from "react-redux";
// import { addProduct } from "./Cart/cartSlice";

// function Details() {
//   const { productid } = useParams();
//   const [details, setDetails] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null); // State to store selected size
//   const dispatch = useDispatch();

//   useEffect(() => {
//     axios.get(`https://fluffy-bear-veil.cyclic.app/?id=${productid}`).then((response) => {
//       setDetails(response.data);
//     });
//   }, [productid]);

//   const addToCart = () => {
//     if (!details || !selectedSize) return; // Ensure details and selected size are available before adding to cart
//     const productWithSize = { ...details, size: selectedSize }; // Include selected size in the product details
//     dispatch(addProduct(productWithSize)); // Dispatch the addProduct action with the product details including size
//     alert("Added to Cart..");
//   };

//   const handleSizeChange = (event) => {
//     setSelectedSize(event.target.value); // Update selected size when the user selects a size
//   };

//   if (!details) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div className="detailcard">
//       <div className="dproductimage">
//         <img src={details.product_images} alt={details.product_name} />
//       </div>
//       <div className="productdetails">
//         <h2>{details.product_name}</h2>
//         <p>{details.description}</p>
//         <div className="sizes">
//           <label htmlFor="size">Select Size:</label>
//           <select id="size" value={selectedSize} onChange={handleSizeChange}>
//             <option value="">Select Size</option>
//             <option value="S">S</option>
//             <option value="M">M</option>
//             <option value="L">L</option>
//             <option value="XL">XL</option>
//           </select>
//         </div>
//         <button onClick={addToCart} disabled={!selectedSize}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Details;
