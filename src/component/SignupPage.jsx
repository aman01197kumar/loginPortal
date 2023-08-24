import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCustomerDetails } from "../store/loginStore";

function SignupPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState(null);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contnueBtnHandler = () => {
    if (userName && password && contactNumber) {
      if (contactNumber.split("").length !== 10) {
        console.log("contactNumber");
      }
      if (password.split("").length < 6) {
        console.log("password");
      } else {
        const details = {
          userName: userName,
          contactNumber: contactNumber,
          password: password,
          email: email,
        };
        dispatch(getCustomerDetails(details));
        navigate("/");
      }
    } else {
      console.log("fill the details");
    }
  };
  return (
    <div className="signup__wrapper">
      <div
        className="signup__container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "25%",
          margin: "5rem auto",
          padding: "1rem",
          border: "1px solid",
        }}
      >
        <div
          className="signup__heading"
          style={{ textAlign: "center", fontWeight: "500", padding: "1rem" }}
        >
          Create an Account
        </div>
        <label>Your Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <label>Your Contact Number</label>
        <input
          type="text"
          placeholder="Your Contact Number"
          value={contactNumber}
          onChange={(e) => {
            setContactNumber(e.target.value);
          }}
        />
        <label>Your Email Id</label>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Create Password</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button style={{ marginTop: "1rem" }} onClick={contnueBtnHandler}>
          continue
        </button>
        <div>
          <div>
            already have an account{" "}
            <span
              onClick={() => navigate("/")}
              style={{ fontSize: "14px", color: "blue", fontWeight: "500" }}
            >
              Sign in
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
