import React, { useContext, useState } from "react";
import Card from "./Dashboard/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import {UserContext} from '../App';
import { Action } from "./utils/Action";

function AddUser() {
  let {data, dispatch} = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [batch, setBatch] = useState("");
  let navigate = useNavigate()

  const handleSubmit = () => {
    let newUser = {
      id: data.length ? data[data.length - 1].id + 1 : 1,
      name,
      email,
      mobile,
      batch
    }

    dispatch({type:Action.ADD_USER, payload:newUser})

    //const newArray = [...data];
    // newArray.push(newUser);
    // console.log(newArray);
    // setData(newArray)
    navigate('/')







  };
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Add User </h1>
            </div>

            <div className="row">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="batch">
                  <Form.Label>Batch</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Batch"
                    onChange={(e) => setBatch(e.target.value)}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;
