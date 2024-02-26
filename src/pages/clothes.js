import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
function Clothes() {
    const [clothesdata, setCothesdata] = useState([]);
    const [uniqueCompanies, setUniqueCompanies] = useState([]);
    const [searchtext, setSearchtext] = useState("");

    useEffect(() => {
        axios
            .get("https://fluffy-bear-veil.cyclic.app/?sub=clothes&g=man")
            .then((response) => {
                setCothesdata(response.data);

                const companies = [
                    ...new Set(response.data.map((item) => item.company_name)),
                ];
                setUniqueCompanies(companies);
            });
    }, []);

    useEffect(() => {
        let url = "https://fluffy-bear-veil.cyclic.app/?sub=clothes&g=man";

        if (searchtext && searchtext !== " ") {
            url += `&cn=${searchtext}`;
        }

        axios.get(url).then((response) => {
            setCothesdata(response.data);
        });
    }, [searchtext]);

    if (!clothesdata) {
        return <h1>Loading....</h1>;
    }

    function onChange(e) {
        setSearchtext(e.target.value);
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
                    <option value=" ">All</option>
                    {uniqueCompanies.map((company) => (
                        <option key={company} value={company}>
                            {company}
                        </option>
                    ))}
                </select>
            </div>
            <div className="App2">
                {clothesdata.map((clothes) => (
                    <div className="card" key={clothes.product_id}>
                        <Link
                            to={`/Details/${clothes.product_id}`}
                            className="btn"
                        >
                            <img
                                src={clothes.product_images}
                                alt={clothes.product_name}
                                height="300px"
                                width="300px"
                            />
                            <h3 style={{ textAlign: "left" }}>
                                {clothes.product_name}
                            </h3>
                            <h3 style={{ textAlign: "left" }}>
                                ₹{clothes.price}
                            </h3>
                        </Link>
                        {/* <div className="btn"><Link to={`/Details/${clothes.product_id}`}><button type="submit">More details</button></Link></div> */}
                    </div>
                ))}
            </div>
        </>
    );
}
export default Clothes;

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
