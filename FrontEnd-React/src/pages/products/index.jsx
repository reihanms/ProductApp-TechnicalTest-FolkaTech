import React, { useEffect, useState } from "react";
import { CardProduct, Navbar } from "../../components";
import { Button, Col, Row } from "react-bootstrap";
import RangeSlider from "react-bootstrap-range-slider";
import { GrCheckbox } from "react-icons/gr";
import { FaChevronUp } from "react-icons/fa";
import { parseCookies } from "nookies";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const filterData = [
    {
      filter_name: "Origin",
      data: [
        "Aceh",
        "Semarang",
        "Bandung",
        "Jawa",
        "Amerika Selatan",
        "Lain - Lain",
      ],
    },
    {
      filter_name: "Species",
      data: ["Arabica", "Robusta", "Blend"],
    },
    {
      filter_name: "Roast Level",
      data: [
        "Light Roast",
        "Light Roast",
        "Medium Roast",
        "Dark Roast",
        "Light to Medium Roast",
      ],
    },
    {
      filter_name: "Tasted",
      data: ["Sweet", "Floral", "Fruity", "Nutty", "Cocoa"],
    },
  ];

  // parse cookie terlebih dahulu
  useEffect(() => {
    const timer = setTimeout(() => {
      const cookieData = parseCookies();
      const getUserData = JSON.parse(cookieData.userData);
      setUserData(getUserData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // fetching data dari API
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true)
      const _getAllProducts = async () => {
        
        const headers = {
          "Content-Type": "application/json",
          "x-access-token": userData.token,
        };
        await axios
          .get(`http://localhost:4000/api/v1/products/list-product`, {
            headers,
          })
          .then((response) => {
            setIsLoading(false)
            console.log(response);
            if (response.status == 200) {
              setData(response.data.data);
            }
          })
          .catch((error) => {
            setIsLoading(false)
            console.error(error);
          });
      };
      _getAllProducts();
    }, 2000);
    return () => clearTimeout(timer);
  }, [userData]);

  return (
    <div className="x-products">
      <Navbar />

      <div className="x-shop">
        <button className="x-button-nav">Belanja</button>
      </div>
      <div className="x-body-product">
        <div className="navigation">
          <p>Home -- Produk -- </p>
        </div>
        <Row>
          <Col md={3}>
            <div className="x-filter-shop">
              <h4>URUTKAN BERDASARKAN</h4>
              <h5>Harga</h5>
              <RangeSlider value={30} size="sm" />
              <p>Rp. 50.000 - Rp.2.250.000</p>
              {filterData.map((data, idx) => (
                <div className="x-filter-group" key={idx}>
                  <div className="x-head d-flex justify-content-between align-items-center">
                    <h5>{data.filter_name}</h5>
                    <FaChevronUp />
                  </div>
                  {data.data.map((record, idx) => (
                    <div
                      key={idx}
                      className="x-subhead d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center gap-2">
                        <GrCheckbox />
                        <span>{record}</span>
                      </div>
                      <p>(8)</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Col>
          <Col md={9}>
            <p>{isLoading ? "Sedang memuat..." : `Menampilkan ${data.length} Data`}</p>
            <div className="x-products-catalog">
              {data.map((product, idx) => (
                <CardProduct
                  key={idx}
                  title={product.product_name}
                  seller={product.product_owner}
                  price={product.price}
                  rater={product.rate_count}
                  image={product.product_image}
                  id={product.product_id}
                />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Products;
