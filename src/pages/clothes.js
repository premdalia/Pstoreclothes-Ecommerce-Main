



import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Clothes() {
    const [clothesdata, setClothesdata] = useState([]);
    const [uniqueCompanies, setUniqueCompanies] = useState([]);
    const [searchtext, setSearchtext] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    useEffect(() => {
        axios
            .get("https://fluffy-bear-veil.cyclic.app/ ?sub=clothes&g=man")
            .then((response) => {
                setClothesdata(response.data);

                const companies = [
                    ...new Set(response.data.map((item) => item.company_name)),
                ];
                setUniqueCompanies(companies);
            });
    }, []);

    useEffect(() => {
        fetchData();
    }, [searchtext, minPrice, maxPrice]); // Trigger useEffect whenever searchtext, minPrice, or maxPrice changes

    const fetchData = () => {
        let url = "https://fluffy-bear-veil.cyclic.app/?sub=clothes&g=man";
        // let url = "http://localhost:5000/?sub=clothes&g=man";

        if (searchtext && searchtext.trim() !== "") {
            url += `&cn=${searchtext}`;
        }

        if (minPrice && maxPrice && minPrice.trim() !== "" && maxPrice.trim() !== "") {
            url += `&min=${minPrice}&max=${maxPrice}`;
        }

        axios.get(url)
            .then((response) => {
                setClothesdata(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            fetchData();
        }
    };

    function onChange(e) {
        setSearchtext(e.target.value);
    }

    function handleMinPriceChange(e) {
        setMinPrice(e.target.value);
    }

    function handleMaxPriceChange(e) {
        setMaxPrice(e.target.value);
    }

    if (!clothesdata) {
        return <h1>Loading....</h1>;
    }

    return (
        <>
            <div className="drop">
                <select
                    className="dropdown"
                    value={searchtext}
                    onChange={onChange}
                >
                    <option>Select Brand</option>
                    <option value="">All</option>
                    {uniqueCompanies.map((company) => (
                        <option key={company} value={company}>
                            {company}
                        </option>
                    ))}
                </select>
                <input style={{ border: "solid 1px" }}
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    onKeyPress={handleKeyPress}
                />
                <input style={{ border: "solid 1px" }}
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div className="App2">
                {clothesdata.map((clothes) => (
                    <div className="card" key={clothes.product_id}>
                        <Link
                            to={`/Details/${clothes.product_id}`}
                            className="btn"
                        >
                            <img
                            className="card-item-img"
                                src={clothes.product_images}
                                alt={clothes.product_name}
                            />
                            <div className="product-name">
                                {clothes.product_name}
                            </div>
                            <div className="card-item-price">
                                ₹{clothes.price}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Clothes;


























// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "../App.css";
// import { Link } from "react-router-dom";
// function Clothes() {
//     const [clothesdata, setCothesdata] = useState([]);
//     const [uniqueCompanies, setUniqueCompanies] = useState([]);
//     const [searchtext, setSearchtext] = useState("");

//     useEffect(() => {
//         axios
//             .get("https://fluffy-bear-veil.cyclic.app/?sub=clothes&g=man")
//             .then((response) => {
//                 setCothesdata(response.data);

//                 const companies = [
//                     ...new Set(response.data.map((item) => item.company_name)),
//                 ];
//                 setUniqueCompanies(companies);
//             });
//     }, []);

//     useEffect(() => {
//         let url = "https://fluffy-bear-veil.cyclic.app/?sub=clothes&g=man";

//         if (searchtext && searchtext !== " ") {
//             url += `&cn=${searchtext}`;
//         }

//         axios.get(url).then((response) => {
//             setCothesdata(response.data);
//         });
//     }, [searchtext]);

//     if (!clothesdata) {
//         return <h1>Loading....</h1>;
//     }

//     function onChange(e) {
//         setSearchtext(e.target.value);
//     }

//     return (
//         <>
//             <div className="drop">
//                 <select
//                     className="dropdown"
//                     value={searchtext}
//                     onChange={onChange}
//                 >
//                     <option>Select Brand</option>
//                     <option value=" ">All</option>
//                     {uniqueCompanies.map((company) => (
//                         <option key={company} value={company}>
//                             {company}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//             <div className="App2">
//                 {clothesdata.map((clothes) => (
//                     <div className="card" key={clothes.product_id}>
//                         <Link
//                             to={`/Details/${clothes.product_id}`}
//                             className="btn"
//                         >
//                             <img
//                                 src={clothes.product_images}
//                                 alt={clothes.product_name}
//                                 height="300px"
//                                 width="300px"
//                             />
//                             <h3 style={{ textAlign: "left" }}>
//                                 {clothes.product_name}
//                             </h3>
//                             <h3 style={{ textAlign: "left" }}>
//                                 ₹{clothes.price}
//                             </h3>
//                         </Link>
                      
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }
// export default Clothes;



















// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "../App.css";
// import { Link } from "react-router-dom";

// function Clothes() {
//     const [clothesdata, setClothesdata] = useState([]);
//     const [uniqueCompanies, setUniqueCompanies] = useState([]);
//     const [searchtext, setSearchtext] = useState("");
//     const [minPrice, setMinPrice] = useState("");
//     const [maxPrice, setMaxPrice] = useState("");

//     useEffect(() => {
//         axios
//             // .get("https://fluffy-bear-veil.cyclic.app/?sub=clothes&g=man")

//             .get("http://localhost:5000/?sub=clothes&g=man")
//             .then((response) => {
//                 setClothesdata(response.data);

//                 const companies = [
//                     ...new Set(response.data.map((item) => item.company_name)),
//                 ];
//                 setUniqueCompanies(companies);
//             });
//     }, []);

//     // useEffect(() => {
//     //     let url = "http://localhost:5000/?sub=clothes&g=man";

//     //     if (searchtext && searchtext !== " ") {
//     //         url += `&cn=${searchtext}`;
//     //     }

//     //     if (minPrice && maxPrice) {
//     //         url += `&min=${minPrice}&max=${maxPrice}`;
//     //     }

//     //     axios.get(url).then((response) => {
//     //         setClothesdata(response.data);
//     //     });
//     // }, [searchtext, minPrice, maxPrice]);

//     useEffect(() => {
//         let url = "http://localhost:5000/?sub=clothes&g=man";
    
//         if (searchtext && searchtext !== " ") {
//             url += `&cn=${searchtext}`;
//         }
    
//         if (minPrice !== "") {
//             url += `&min=${minPrice}`;
//         }
    
//         if (maxPrice !== "") {
//             url += `&max=${maxPrice}`;
//         }
    
//         axios.get(url).then((response) => {
//             setClothesdata(response.data);
//         });
//     }, [searchtext, minPrice, maxPrice]);
    
//     if (!clothesdata) {
//         return <h1>Loading....</h1>;
//     }

//     function onChange(e) {
//         setSearchtext(e.target.value);
//     }

//     function handleMinPriceChange(e) {
//         setMinPrice(e.target.value);
//     }

//     function handleMaxPriceChange(e) {
//         setMaxPrice(e.target.value);
//     }
//     const handleKeyPress = (event) => {
//         if (event.key === "Enter") {
//             fetchData();
//         }
//     };
//     return (
//         <>
//             <div className="drop">
//                 <select
//                     className="dropdown"
//                     value={searchtext}
//                     onChange={onChange}
//                 >
//                     <option>Select Brand</option>
//                     <option value=" ">All</option>
//                     {uniqueCompanies.map((company) => (
//                         <option key={company} value={company}>
//                             {company}
//                         </option>
//                     ))}
//                 </select>
//                 <input
//                     type="number"
//                     placeholder="Min Price"
//                     value={minPrice}
//                     onChange={handleMinPriceChange}
//                     onKeyPress={handleKeyPress}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Max Price"
//                     value={maxPrice}
//                     onChange={handleMaxPriceChange}
//                     onKeyPress={handleKeyPress}
//                 />
//             </div>
//             <div className="App2">
//                 {clothesdata.map((clothes) => (
//                     <div className="card" key={clothes.product_id}>
//                         <Link
//                             to={`/Details/${clothes.product_id}`}
//                             className="btn"
//                         >
//                             <img
//                                 src={clothes.product_images}
//                                 alt={clothes.product_name}
//                                 height="300px"
//                                 width="300px"
//                             />
//                             <h3 style={{ textAlign: "left" }}>
//                                 {clothes.product_name}
//                             </h3>
//                             <h3 style={{ textAlign: "left" }}>
//                                 ₹{clothes.price}
//                             </h3>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// }

// export default Clothes;




















// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import '../App.css';
// import { Link } from "react-router-dom";
// function Clothes() {
//     const [clothesdata,setCothesdata]=useState([]);

//     useEffect(()=>{
//         axios
//         .get("http://localhost:3000/api/data?sub=clothes&g=man")
//         .then((response)=>{
//             setCothesdata(response.data);
//         })
//     },[])
//     if(!clothesdata){
//         return <h1>Loading....</h1>
//     }

//     return(
//         <div className="App2">
//         {clothesdata.map((clothes)=>(
//             <div className="card" key={clothes.product_id}>
//                 <img src={clothes.product_images} alt={clothes.product_name} height="300px" width="300px"/>
//                 <h3 style={{textAlign:"left"}}>{clothes.product_name}</h3>
//                 <h3 style={{textAlign:"left"}}>₹{clothes.price}</h3>
//                 <div className="btn"><Link to={`/Details/${clothes.product_id}`}><button type="submit">More details</button></Link></div>
//             </div>
//         ))}

//         </div>
//     );

// }
// export default Clothes;
