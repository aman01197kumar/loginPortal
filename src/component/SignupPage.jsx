import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCustomerDetails } from "../store/loginStore";

function SignupPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [contactNumber, setContactNumber] = useState(null);
  const[userNameAlert,setUserNameAlert] = useState("")
  const [passwordAlert, setPasswordAlert] = useState('')
  const [contactNumberAlert, setContactNumberAlert] = useState('')
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const contnueBtnHandler = () => {
    if (userName && password && contactNumber) {
      if (contactNumber.split("").length !== 10) {
        setContactNumberAlert('Contact number must be of 10 digis')
      }
      if (password.split("").length < 6) {
        setPasswordAlert('password length must be of alteast 6 digits')
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
      alert("fill the details");
    }
  };
  return (
    <div className="signup__wrapper">
      <div
        className="signup__container"
      >
        <div
          className="signup__heading"
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
        <div className="alert__container">{contactNumberAlert}</div>
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
        <div className="alert__container">{passwordAlert}</div>
        <button style={{ marginTop: "1rem" }} onClick={contnueBtnHandler}>
          continue
        </button>
        <div>
          <div>
            already have an account{" "}
            <span className="sign_in_span"
              onClick={() => navigate("/")}
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
