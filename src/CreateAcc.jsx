import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAcc() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async () => {
        const res = await fetch('http://localhost:5000/delivery/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({ name, password, phone })
        });
        const data = await res.json();
        if (res.ok) navigate('/home');
        else alert(data.msg);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Create Delivery Account</h2>
            <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} /><br /><br />
            <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} /><br /><br />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} /><br /><br />
            <button onClick={handleSignup}>Create Account</button>
        </div>
    );
}

export default CreateAcc;
