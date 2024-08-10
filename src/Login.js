import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', { username, password });
            setMessage(response.data);
        } catch (error) {
            setMessage('Login failed! Please check your username and password.');
        }
    };

    return (
        <div>
            <h2 className="mystyle" >Login</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="exampleDropdownFormPassword1" class="form-label"><strong>Username:</strong></label>
                    <input 
                        type="text" 
                        class="form-control"
                        id="exampleDropdownFormEmail1"
                        placeholder="user name"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <br/>
                    <label for="exampleDropdownFormPassword1" class="form-label"><strong>Password:</strong></label>
                    <input 
                        type="password" 
                        class="form-control"
                        id="exampleDropdownFormEmail1"
                        placeholder="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <br/><br/>
                <div class="d-grid gap-2"><button class="btn btn-primary" type="summit">Login</button></div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
