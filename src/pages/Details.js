import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import '../App.css';
import "./Details.css";
import { useDispatch } from "react-redux";
import { addProduct } from "./Cart/cartSlice";

function Details() {
  const { productid } = useParams();
  const [details, setDetails] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(productid)

    // const apiUrl = `http://localhost:5000/?id=${productid}`;
    const apiUrl = `https://fluffy-bear-veil.cyclic.app/?id=${productid}`;
    console.log("API URL:", apiUrl);
    axios
    .get(apiUrl,{timeout:5000})
    // .get(`https://fluffy-bear-veil.cyclic.app/?id=${productid}`)
      .then((response) => {
        setDetails(response.data[0]);
      });
    }, [productid]);



//   useEffect(() => {
//     console.log(productid);
//     // const apiUrl = `https://fluffy-bear-veil.cyclic.app/?id=${productid}`;
//     const apiUrl = `http://localhost:5000/?id=${productid}`;
//     console.log("API URL:", apiUrl);
//     axios
//       .get(apiUrl, { timeout: 5000 })
//       .then((response) => {
//         // Check if the response data is an array and contains at least one object
//         if (Array.isArray(response.data) && response.data.length > 0) {
//           setDetails(response.data[0]); // Set the first object in the array as details
//         } else {
//           setDetails(null); // Set details to null if no data is available
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching product details:", error);
//         setDetails(null); // Reset details state on error
//       });
// }, [productid]);

    
   
useEffect(() => {
  console.log(details);
  // Check if product_name is available before logging
  if (details && details.product_name) {
    console.log(details.product_name);
  } else {
    console.log("Product name not available yet.");
  }
}, [details]);
//   useEffect(() => {
//     console.log(productid)

//     const apiUrl = `https://fluffy-bear-veil.cyclic.app/?id=${productid}`;
//     console.log("API URL:", apiUrl);
//     axios
//       // .get(`https://fluffy-bear-veil.cyclic.app/?id=${productid}`)
//       .get(apiUrl)
//       .then((response) => {
//         setDetails(response.data);
//       });
// }, [productid]);

// useEffect(() => {
//     console.log(details); // Log the updated state here
// }, [details]);





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
          <button className="buttonaddtocart" onClick={addToCart}>Add to Cart</button>
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
