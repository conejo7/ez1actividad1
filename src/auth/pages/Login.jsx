import React from 'react';
import {useNavigate} from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const onLogin = () => {
      navigate('/', {replace:true})
    }

    return (
        <div>
            <h1>Login</h1>

            <button onClick={ onLogin }>
                Login
            </button>
        </div>
    );
};

export default Login;