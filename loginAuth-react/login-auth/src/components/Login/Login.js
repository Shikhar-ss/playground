import React, { useState } from 'react';
import "./login.css";
import PropTypes from "prop-types";

async function loginUser(credentials){
    return fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function Login({ setToken }) {
    const [userName, setUserName] = useState();
    const [userPassword, setPasserword] = useState();

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        const token = await loginUser({
            userName: userName,
            userPassword: userPassword
        });
        setToken(token);
    }
    return (
        <div className="login-wrapper">
            <h1>
                User login
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>
                        UserName
                </p>
                    <input type="text" placeholder="USERNAME" onChange={e => setUserName(e.target.value)}/>
                </label>

                <label>
                    <p>
                        Password
                </p>
                    <input type="password" placeholder="PASSWORD" onChange={e => setPasserword(e.target.value)}/>
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}


