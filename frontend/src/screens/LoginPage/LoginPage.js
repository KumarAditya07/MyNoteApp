import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Form, Button,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import  {useNavigate} from 'react-router-dom'
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MainScreen from "../../components/MainScreen";
import "../LoginPage/LoginPage.css";

function LoginPage ()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError] = useState(false);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

//  useEffect(()=>{
//  const userInfo = localStorage.getItem('userInfo');

//   if(userInfo){
//     history.push("/mynotes");
//   }
//  },[history]);
useEffect(() => {
  const auth = localStorage.getItem('userInfo');
  if (auth) {
      navigate('/mynotes')
  }
}, [])

 
  const submitHandler = async(e) => {
  
    try{
    const config = {
          headers:{
            "Content-type" : "application/json"
          },
    };  
   setLoading(true);

   const { data } = await axios.post('http://localhost:5000/api/users/login',
      {
        email,
        password,

      },
      config);
      console.log(data);
      localStorage.setItem('userInfo',JSON.stringify(data));
      setLoading(false);

    }catch(error){
      setError(error.response.data.message);
      setLoading(false);
    }
    
  };
  return (
   
      <MainScreen title="LOGIN">
        <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

          <Row className="py-3">
            <Col>
              New Customer ? <Link to="/register">Register Here</Link>
            </Col>
          </Row>
        </div>
      </MainScreen>

  );
};

export default LoginPage;
