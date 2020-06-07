import React, { useState } from 'react';
import app from '../firebase/config'
import { useHistory } from 'react-router-dom'
const Login  = () => {

  let history = useHistory()

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const onInputChange = (e, name) => {
    let inputValue = e.target.value
    if(name === 'pass') { 
      setPass(inputValue)
    } if(name === 'email') {
      setEmail(inputValue)
    }
  }

  const loginUser = () => {
    app.auth().signInWithEmailAndPassword(email, pass).then((response) => {
      history.push('/')
    }).catch(error => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode)
    });
  }

  const registerUser = () => {
    history.push('/signup')
  }

  return (
    <div className="form-container">
      <div className="form">
        <div className="form-content">
          <div className="form-row">
            <label>Email</label>
            <input name="email" onChange={(e) => onInputChange(e,'email')}></input>
          </div>
          <div className="form-row">
            <label>Password</label>
            <input name="password" type="password" onChange={(e) => onInputChange(e, 'pass')}></input>
          </div>
          <div className="form-row">
            <div className="button-container">
              <button className="btn btn-primary" onClick={loginUser}>
                Login
              </button>
              <button className="btn btn-success" onClick={registerUser}>
                Register
              </button>
            </div>
          </div>
        </div> 
        
      </div> 
    </div> 
  )
}

export default Login


