import axios from "axios";
import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
function ALL() {
    const [shoesdata, setShoesdata] = useState([]);
    const [uniqueCompanies, setUniqueCompanies] = useState([]);
    const [searchtext, setSearchtext] = useState("");


    useEffect(() => {
        axios
            .get("https://fluffy-bear-veil.cyclic.app/?sub=clothes")
            .then((response) => {
                setShoesdata(response.data);

                const companies = [
                  ...new Set(response.data.map((item) => item.company_name)),
              ];
              setUniqueCompanies(companies);
            });
    }, []);
    function onChange(e) {
      setSearchtext(e.target.value);
  }


    useEffect(() => {
      let url = "https://fluffy-bear-veil.cyclic.app/?sub=clothes";

      if (searchtext && searchtext !== " ") {
          url += `&cn=${searchtext}`;
      }

      axios.get(url).then((response) => {
          setShoesdata(response.data);
      });
  }, [searchtext]);
    if (!shoesdata) {
        return <h1>Loading....</h1>;
    }

    return (
        <>   <div className="drop">
        <div className="drop-sub">
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
    </div>
            {/* <Carousel 

interval={1500}
pause="hover"
wrap={true}
onSlide={(slideIndex) => console.log(`Active Slide: ${slideIndex}`)}
>
{shoesdata.map((items) => (
  <Carousel.Item key={items.product_id}>
    <Link to={`/Details/${items.product_id}`}>
      <img
        className="d-block w-100"
        src={items.product_images}
        alt={items.product_name}  height="500px" width="500px"
      />
    </Link>
     <Carousel.Caption className="d-none d-md-block">
      <h3 style={{color:"red"}}>{items.product_name}</h3>
    </Carousel.Caption> 
  </Carousel.Item>
))}
</Carousel><br></br> */}

            <div className="App2">
                {shoesdata.map((shoes) => (
                    <div className="card" key={shoes.product_id}>
                        {/* <Link to={"/Details/${shoes.}"}> */}
                        <Link
                            to={`/Details/${shoes.product_id}`}
                            className="btn"
                        >
                            <img
                                className="card-item-img"
                                src={shoes.product_images}
                                alt={shoes.product_name}
                            />
                            <div className="product-name">
                                {shoes.product_name}
                            </div>
                            <div className="card-item-price">
                                ₹{shoes.price}
                            </div>
                            {/* <div className="btn"><Link to={`Details/${shoes.product_id}`}><button type="submit">More details</button></Link></div> */}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
export default ALL;
