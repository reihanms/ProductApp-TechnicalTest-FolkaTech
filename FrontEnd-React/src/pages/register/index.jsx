import React, { useState, useEffect } from "react";
import { CardAuth, Input } from "../../components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    number: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const headers = {
        "Content-Type": "application/json"
      };
      await axios
        .post(`http://localhost:4000/api/v1/users/register`, data, { headers })
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: response.data.message
            });
            navigate("/login")
          }
        });

      setData({
        first_name: "",
        last_name: "",
        email: "",
        number: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (data.password !== confirmPassword) {
      setErrorConfirmPassword(true);
    } else {
      setErrorConfirmPassword(false);
    }
  }, [data.password, confirmPassword]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleNextStep = () => {
    setStep(2);
  };
  const handlePrevStep = () => {
    setStep(1);
  };
  const firstStep = (
    <div className="d-block my-3">
      <Input
        placeholder="Nama Depan"
        name="first_name"
        value={data.first_name}
        onChangeText={handleChange}
      />
      <Input
        placeholder="Nama Belakang"
        name="last_name"
        value={data.last_name}
        onChangeText={handleChange}
      />
      <Input
        placeholder="Email"
        name="email"
        value={data.email}
        onChangeText={handleChange}
      />
    </div>
  );
  const secondStep = (
    <div className="d-block my-3">
      <Input
        placeholder="Nomor Telepon"
        name="number"
        value={data.number}
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
      <Input
        placeholder="Confirm Password"
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        value={confirmPassword}
        onChangeText={(e) => setConfirmPassword(e.target.value)}
        isPassword
        togglePassword={handleShowPassword}
      />
    </div>
  );
  return (
    <div className="x-register">
      <CardAuth
        headerText="Daftar Sekarang"
        buttonText={step === 1 ? "Selanjutnya" : "Daftar"}
        cardBody={step === 1 ? firstStep : secondStep}
        handleButton={step === 1 ? handleNextStep : handleSubmit}
        isSecondStep={step === 2}
        disableButton={step === 2 && errorConfirmPassword}
        handlePrev={handlePrevStep}
      />
      <p>{message}</p>
    </div>
  );
};

export default RegisterPage;
