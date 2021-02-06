import React from 'react';
import "./login.css";

function Login() {
    return (
        <div className="login-wrapper">
            <h1>
                User login
            </h1>
            <form>
                <label>
                    <p>
                        UserName
                </p>
                    <input type="text" placeholder="USERNAME" />
                </label>

                <label>
                    <p>
                        Password
                </p>
                    <input type="password" placeholder="PASSWORD" />
                </label>
                <div>
                    <button type="submit">
                        SUBMIT
                </button>
                </div>
            </form>
        </div>
    )
}

export default Login
