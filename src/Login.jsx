import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await fetch('http://localhost:5000/delivery/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ name, password })
        });
        const data = await res.json();
        if (res.ok) navigate('/home');
        else alert(data.msg);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Delivery Login</h2>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br /><br />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
            <button onClick={() => {
                navigate('/CreateAcc')
            }}>create account</button>
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
