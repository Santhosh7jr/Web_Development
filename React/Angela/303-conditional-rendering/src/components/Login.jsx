import React from "react";
import Input from "./Input";

const Login = () => {
    return (
        <form className="form">
            <Input
                type = "text"
                placeholder="Enter Your Name"
            />
            <Input
                type = "text"
                placeholder="Enter Your Password"
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;