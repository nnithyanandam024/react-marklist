import React, { useState } from "react";

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "12345") {
            setIsAuthenticated(true);
        } 
        else if (username === "user" && password === "12345") {
            setIsAuthenticated(true);
        }
        else if (username === "nithyanandam" && password === "12345") {
            setIsAuthenticated(true);
        }
        else if (username === "sabareesh" && password === "12345") {
            setIsAuthenticated(true);
        }
        else if (username === "mithun" && password === "12345") {
            setIsAuthenticated(true);
        }
        else if (username === "murugan" && password === "12345") { 
            setIsAuthenticated(true);
        }
        else {
            alert("Invalid username or password!");
        }
    };

    return (
        <form onSubmit={handleLogin} style={formStyle}>
            <h2>Login</h2>
            <div style={inputGroup}>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div style={inputGroup}>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" style={buttonStyle}>
                Login
            </button>
        </form>
    );
};

export default Login;


const formStyle = {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    position: "absolute",
    margin: "200px 650px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const inputGroup = {
    marginBottom: "15px",
};

const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};
