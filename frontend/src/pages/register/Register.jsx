import React from 'react';
import "./Register.css";

const Register = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Real SNS</h3>
                    <span className='loginDesc'>本格的なSNS</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <p className="loginMsg">新規登録はこちら</p>
                        <input type="text" className='loginInput' placeholder='Username' />
                        <input type="text" className='loginInput' placeholder='Email' />
                        <input type="password" className='loginInput' placeholder='Password' />
                        <input type="password" className='loginInput' placeholder='Confirm Password' />
                        <button className='loginButton'>SignUp</button>
                        <button className='loginRegisterButton'>Login Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;