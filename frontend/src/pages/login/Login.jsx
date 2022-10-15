import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className='loginLogo'>Real SNS</h3>
                    <span className='loginDesc'>本格的なSNS</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <p className="loginMsg">ログインはこちら</p>
                        <input type="text" className='loginInput' placeholder='Email' />
                        <input type="password" className='loginInput' placeholder='Password' />

                        <button className='loginButton'>Login</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className='loginRegisterButton'>Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login