import { registerUrl } from '../API/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [result, setRegister] = useState('');

    async function handleSubmit(e, data) {
        e.preventDefault();
        try{
            const result = await registerUrl(username, password);
            setRegister(result);
        console.log(result);
        console.log("hi" + username, password);
        
        }catch (error) {
            console.error(error);
            console.log({username, password});
        }
        setUsername("");
        setPassword("");
        setConfirmPassword("");

    }

    
    return <form method="post" onSubmit={handleSubmit}>

        <h3> Register </h3>
        <label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} required 
        placeholder=" Username *"/>
        </label>
        <hr />
        <label>
        <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} required
        placeholder=" Password *" maxLength="8" minLength="6"/>
        </label>
        <hr />
        <label>
        <input value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} required
        placeholder=" Confirm your password *" maxLength="8" minLength="6" />
        </label>
        <hr />
        <label>
        <button type="submit" onClick={() => navigate(`/Login`)}> Register </button>
        </label>
    </form>
}
