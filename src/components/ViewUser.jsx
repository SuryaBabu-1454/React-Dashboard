import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import findIndexById from './utils/Helper';
import { UserContext } from '../App';
import { Action } from "./utils/Action";

function ViewUser() {
  const { data, dispatch } = useContext(UserContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [batch, setBatch] = useState("");
  let { id } = useParams();
  let navigate = useNavigate();

  const getData = (id) => {
    let index = findIndexById(Number(id), data);
    if (index !== -1) {
      setName(data[index].name);
      setEmail(data[index].email);
      setMobile(data[index].mobile);
      setBatch(data[index].batch);
    } else {
      console.error(`Invalid Id: ${id}`);
      navigate("/dashboard");
    }
  };

  const handleSubmit = () => {
    let index = findIndexById(Number(id), data);
    if(index !== -1){
    let editedData = { id: data[index].id, name, email, mobile, batch }; //forming the object

    // let newArray = [...data]; //deep copy
    // newArray.splice(index, 1, editedData); //replace the old data with edited data
    // setData(newArray);

    dispatch({type: Action.EDIT_USER,payload:editedData})  

    navigate("/");
    }else{
        console.error(`Invalid Id: ${id}`);
    }
  };

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">View User</h1>
            </div>

            <div className="row">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Batch</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Batch"
                    value={batch}
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

export default ViewUser;
