import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [customer_id, setUsername] = useState("");
  const [passwords, setPassword] = useState("");
  const [cust_first_name, setFirstName] = useState("");
  const [cust_last_name, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone_number, setNumber] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const customer_id = e.target.value;
    setUsername(customer_id);
  };

  const onChangePassword = (e) => {
    const passwords = e.target.value;
    setPassword(passwords);
  };

  const onChangeFirstName = (e) => {
    const cust_first_name = e.target.value;
    setFirstName(cust_first_name);
  };

  const onChangeLastName = (e) => {
    const cust_last_name = e.target.value;
    setLastName(cust_last_name);
  };

  const onChangeNumber = (e) => {
    const phone_number = e.target.value;
    setNumber(phone_number);
  };

  const onChangeNickname = (e) => {
    const nickname = e.target.value;
    setNickname(nickname);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful();

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(customer_id, passwords, cust_first_name, cust_last_name, nickname, phone_number).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="customer_id">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="customer_id"
                  value={customer_id}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="passwords">Password</label>
                <Input
                  type="passwords"
                  className="form-control"
                  name="passwords"
                  value={passwords}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cust_first_name">First Name</label>
                <Input
                  type="cust_first_name"
                  className="form-control"
                  name="cust_first_name"
                  value={cust_first_name}
                  onChange={onChangeFirstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cust_last_name">Last Name</label>
                <Input
                  type="cust_last_name"
                  className="form-control"
                  name="cust_last_name"
                  value={cust_last_name}
                  onChange={onChangeLastName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="nickname">Nickname</label>
                <Input
                  type="nickname"
                  className="form-control"
                  name="nickname"
                  value={nickname}
                  onChange={onChangeNickname}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <Input
                  type="phone_number"
                  className="form-control"
                  name="phone_number"
                  value={phone_number}
                  onChange={onChangeNumber}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;