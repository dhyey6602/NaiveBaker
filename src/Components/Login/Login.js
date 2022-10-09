import React, { useState, useContext, useHistory } from "react";
import Axios from "axios";
import "./Login.css";
import {withRouter} from 'react-router-dom';
import { AuthDispatchContext, UserDispatchContext } from '../../Contexts/context';

function Login(props) {

  const { setA } = useContext(AuthDispatchContext);
  const { setU } = useContext(UserDispatchContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://naivebakerr.herokuapp.com/user/login";

  const handleemail = (e) => {
    setEmail(e.target.value);
  }
  const handlepassword = (e) => {
    setPassword(e.target.value);
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    Axios.post(url, {
      email: email,
      password: password
    })
      .then(res => {
        if (res.data.ok === true) {
          localStorage.setItem('auth-token', res.data.data.token);
          Axios
            .get(`https://naivebakerr.herokuapp.com/user/detail`, {
              headers: {
                'auth-token': res.data.data.token
              }
            })
            .then(({ data }) => {
              if (data.ok === true) {
                setU(data.data);
                setA(true);
              }
            })
            .catch(err => {
              alert(err);
            })
          props.history.push('/');
        }
        else {
          alert(res.data.err.msg);
        }
      })
      .catch(res => { alert(res) })
  }

  return (
    <div className="base-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input type="text" name="email" onChange={handleemail} placeholder="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={handlepassword} placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={(e) => handlesubmit(e)}>
          Login
        </button>
      </div>
    </div>
  );
}

export default withRouter(Login);