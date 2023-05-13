import React, { useState } from 'react'
import MainScreen from '../../components/MainScreen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Error from "../../components/Error.js";
import axios from "axios";
import Loading from "../../components/Loading";


const RegisterScreen = () => {
 
 
 
 const[name,setName]=useState("")
 const[email,setEmail]=useState("")
 const[password,setPassword]=useState("") 
 const[confirmPassword,setConfirmPassword]=useState("") 
//  const[pic,setPic]=useState("")
 const[error,setError]=useState("")
 const[loading,setLoading]=useState("")
 const[message,setMessage]=useState("")
//  const[picMessage,setPicMessage]=useState("")

 const submitHandler = async(e) => {
  e.preventDefault()
     if(password !== confirmPassword){
      setMessage("Passwords Do not Match")
     }else{
        setMessage(null)
        try {   
          const config = {
          headers: {
            "Content-type": "application/json",
          }};

          setLoading(true);

          const { data } = await axios.post(
            "/users",
            {name,email,password},
            config
          );
          
          setLoading(false);
          localStorage.setItem("userInfo", JSON.stringify(data));

        } catch (error) {
           setError(error.response.data.message);
     
        }
     }
 }




 
 
 
  return (
    <div>
    <MainScreen title="REGISTER">
    {error && <Error>{error}</Error>}
    {message && <Error variant='danger'>{message}</Error>}
    {loading && <Loading/>}
      <Form onSubmit={submitHandler}>

      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
       </Form.Group>
       

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Enter Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Enter Password" 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      {/* <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control 
        type="file" 
        placeholder="Upload Profile Picture" 
        onChange={(e) => setPic(e.target.files[0])}
        />
      </Form.Group>
       */}
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    </MainScreen>
    </div>
  )
}

export default RegisterScreen
