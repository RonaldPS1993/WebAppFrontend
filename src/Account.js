import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import axios from "axios";

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

const Account = (props) => {
    const form = useRef();
    const checkBtn = useRef();
  
    const [customer_id, setUsername] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const account = (customer_id, address, city, state, zip) => {
        return axios.post('http://localhost:3001/api/users/account', {
          customer_id,
          address, 
          city, 
          state, 
          zip
        });
      };

    const onChangeUsername = (e) => {
        const customer_id = e.target.value;
        setUsername(customer_id);
      };

    const onChangeAddress = (e) => {
        const address = e.target.value;
        setAddress(address);
      };

      const onChangeCity = (e) => {
        const city = e.target.value;
        setCity(city);
      };

      const onChangeState = (e) => {
        const state = e.target.value;
        setState(state);
      };

      const onChangeZip = (e) => {
        const zip = e.target.value;
        setZip(zip);
      };

      const handleRegister = (e) => {
        e.preventDefault();
    
        setMessage("");
        setSuccessful();

      if (checkBtn.current.context._errors.length === 0) {
       account(customer_id, address, city, state, zip).then(
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
                  <label htmlFor="address">Address</label>
                  <Input
                    type="address"
                    className="form-control"
                    name="address"
                    value={address}
                    onChange={onChangeAddress}
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="city">City </label>
                  <Input
                    type="city"
                    className="form-control"
                    name="city"
                    value={city}
                    onChange={onChangeCity}
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <Input
                    type="state"
                    className="form-control"
                    name="state"
                    value={state}
                    onChange={onChangeState}
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="zip">Zip</label>
                  <Input
                    type="zip"
                    className="form-control"
                    name="zip"
                    value={zip}
                    onChange={onChangeZip}
                  />
                </div>
  
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Save Address</button>
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

    export default Account;