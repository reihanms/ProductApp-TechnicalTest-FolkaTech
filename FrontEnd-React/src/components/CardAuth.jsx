import * as React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { GrFormPreviousLink } from "react-icons/gr";
const CardAuth = ({
  headerText,
  cardBody,
  buttonText,
  handleButton,
  isLogin,
  isSecondStep,
  disableButton,
  handlePrev,
}) => {
  const navigate = useNavigate();
  const handleToLogin = () => {
    navigate("/login");
  };
  const handleToRegister = () => {
    navigate("/register");
  };
  return (
    <div className="x-card-auth">
      <Card style={{ width: "28rem" }}>
        <Card.Body>
          <Card.Title className={isSecondStep ? "x-header x-prev" : "x-header"} onClick={isSecondStep && handlePrev}>
            {isSecondStep ? (
              <div className="d-flex gap-3">
                <GrFormPreviousLink />
                Kembali
              </div>
            ) : (
              headerText
            )}
          </Card.Title>
          {cardBody}
          <Button
            type="submit"
            onClick={(e) => handleButton(e)}
            variant="danger"
            className="w-100"
            disabled={disableButton}
          >
            {buttonText}
          </Button>
          <div className="mt-3">
            <div className="x-line mb-3" />
            {isLogin ? (
              <div>
                <p>
                  Belum punya akun?{" "}
                  <span onClick={handleToRegister} className="x-red-text">
                    {" "}
                    Daftar Sekarang{" "}
                  </span>
                </p>
              </div>
            ) : (
              <p>
                Sudah punya akun?{" "}
                <span onClick={handleToLogin} className="x-red-text">
                  {" "}
                  Masuk{" "}
                </span>
              </p>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardAuth;
