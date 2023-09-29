import React, { useState } from "react";
import { CardAuth, Input } from "../../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { setCookie } from "nookies";
import { useAuth } from "../../helpers/AuthContext";

const LoginPage = ( props ) => {
  const {login} = useAuth()
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email: data.email,
        password: data.password,
      };
      const headers = {
        "Content-Type": "application/json", // You can set other headers as needed
      };
      const response = await axios
        .post(`http://localhost:4000/api/v1/users/login`, userData, { headers })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: response.data.message
            });
            const {token, id, first_name, last_name} = response.data.data
            const cookies = {
              token: token,
              id : id,
              first_name: first_name,
              last_name: last_name,
            };
            setCookie(null, "userData", JSON.stringify(cookies), {
              maxAge: 24 * 60 * 60, // 1 hari
              path: "/",
              sameSite: "lax",
              secure: true,
            });
            login()
            navigate("/products") 
          }
        });

      setData({
        email: "",
        password: "",
      });
    } catch (error) {
      if ((error.response.status = 400)) {
        setMessage(error.response.data.message);
      } else {
        setMessage("something went wrong");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const loginBody = (
    <div className="d-block my-3">
      <Input
        placeholder="Email"
        name="email"
        value={data.email}
        onChangeText={handleChange}
      />
      <Input
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        name="password"
        value={data.password}
        onChangeText={handleChange}
        isPassword
        togglePassword={handleShowPassword}
      />
    </div>
  );
  return (
    <div className="x-login">
      <CardAuth
        headerText="Masuk"
        buttonText="Masuk"
        cardBody={loginBody}
        isLogin
        handleButton={handleSubmit}
      />
      <p>{message}</p>
    </div>
  );
};

export default LoginPage;
