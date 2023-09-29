import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardProduct, Input, Navbar } from "../../../components";
import { Col, Row } from "react-bootstrap";
import { parseCookies } from "nookies";
import axios from "axios";
import { TiStarFullOutline } from "react-icons/ti";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [imageThumbnail, setImageThumbnail] = useState("");
  const [qty, setQty] = useState(0);
  const [imageCollection, setImageCollection] = useState([
    {
      id: 1,
      url: "https://res.cloudinary.com/debldabws/image/upload/v1695936484/Test%20Product/image_62_ugqd6i.jpg",
    },
    {
      id: 2,
      url: "https://res.cloudinary.com/debldabws/image/upload/v1695936484/Test%20Product/image_62_ugqd6i.jpg",
    },
    {
      id: 3,
      url: "https://res.cloudinary.com/debldabws/image/upload/v1695936484/Test%20Product/image_62_ugqd6i.jpg",
    },
  ]);
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(true);
      const _getProduct = async () => {
        const headers = {
          "Content-Type": "application/json",
          "x-access-token": userData.token,
        };
        await axios
          .get(`http://localhost:4000/api/v1/products/${id}`, {
            headers,
          })
          .then((response) => {
            setIsLoading(false);
            console.log(response);
            if (response.status == 200) {
              const newCollection = {
                id: 4,
                url: response.data.data[0].product_image,
              };
              setData(response.data.data[0]);
              setImageThumbnail(response.data.data[0].product_image);
              setImageCollection([...imageCollection, newCollection]);
            }
          })
          .catch((error) => {
            setIsLoading(false);
            console.error(error);
          });
      };
      _getProduct();
    }, 2000);
    return () => clearTimeout(timer);
  }, [userData]);

  const stars = [1, 2, 3, 4, 5];

  const handleAdd = () => {
    setQty(qty + 1);
  };
  const handleSub = () => {
    setQty(qty - 1);
  };

  return (
    <div className="x-products">
      <Navbar />
      <div className="x-shop">
        <button className="x-button-nav" onClick={() => navigate('/products')}>Belanja</button>
      </div>
      <div className="x-body-product pt-3">
        <div className="navigation">
          <p>
            Home --{" "}
            <span style={{ color: "#EB3F36", fontWeight: "bold" }}>
              {data.product_name}
            </span>{" "}
          </p>
        </div>
        <div className="px-5">
          {isLoading && <p>Sedang Memuat ....</p>}
          <Row>
            <Col md={6}>
              <div style={{ textAlign: "center", border: "1px solid #e4e4e4" }}>
                <img width="400px" src={imageThumbnail} />
              </div>
              <div
                className="d-flex gap-2 align-items-center justify-content-between"
                style={{ overflowX: "scroll" }}
              >
                {imageCollection.map((img, idx) => (
                  <div
                    key={img.id}
                    style={{
                      textAlign: "center",
                      border: "1px solid #e4e4e4",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      width="260px"
                      onClick={() => {
                        setImageThumbnail(img.url);
                      }}
                      src={img.url}
                    />
                  </div>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <h3>{data.product_name}</h3>
              <p style={{ fontWeight: "bold" }}>{data.product_owner}</p>
              <div className="d-flex align-items-center gap-1 mb-1">
                {stars.map((data, idx) => (
                  <TiStarFullOutline size={15} color="#FFC107" key={idx} />
                ))}
                <span>({data.rate_count})</span>
              </div>
              <div className="mb-3">
                <h5 style={{ color: "#EB3F36" }}>Rp. {data.price}</h5>
              </div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="d-flex align-items-center gap-1">
                  <button className="x-btn-sub" onClick={() => handleSub()}>
                    -
                  </button>
                  <Input value={qty} readonly />
                  <button className="x-btn-add" onClick={() => handleAdd()}>
                    +
                  </button>
                </div>
                <button>TAMBAH KE KERANJANG</button>
                <AiOutlineHeart color="#EB3F36" size={40} />
              </div>
              <p>{data.description}</p>
            </Col>
          </Row>
          <div className="x-description-product">
            <div className="d-flex gap-5 align-items-center mb-5">
              <div style={{ cursor: "pointer" }}>
                <h5
                  style={{
                    color: "#EB3F36",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  DESKRIPSI
                </h5>
                <div style={{ height: "3px", backgroundColor: "#EB3F36" }} />
              </div>
              <div style={{ cursor: "pointer" }}>
                <h5
                  style={{
                    color: "#BEBEBE",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Informasi
                </h5>
              </div>
            </div>
          </div>
          <p style={{ fontSize: "large" }}>{data.description}</p>
          <div className="x-description-product mb-3">
            <div style={{ cursor: "pointer" }}>
              <h5
                style={{
                  color: "#696969",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                REKOMENDASI UNTUK ANDA
              </h5>
              <div style={{ height: "3px", backgroundColor: "#EB3F36" }} />
            </div>
          </div>
          <div className="x-products-catalog centered">
              {[1,2,3].map((product, idx) => (
                <CardProduct
                  key={idx}
                  title={data.product_name}
                  seller={data.product_owner}
                  price={data.price}
                  rater={data.rate_count}
                  image={data.product_image}
                />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
