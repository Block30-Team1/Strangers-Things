import { loggingIn, registerUrl } from '../API/index';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [result, setRegister] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const result = await loggingIn(username, password);
            setRegister(result);
        console.log(result);
        
        }catch (error) {
            console.error(error);
            console.log(result);
            
        }
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    }

    return <form method="post" onSubmit={handleSubmit}>
    <h3> Login </h3>
    <label>
    <input value={username} onChange={(e) => setUsername(e.target.value)} required 
    placeholder=" Username *"/>
    </label>
    <hr />
    <label>
    <input value={password} onChange={(e) => setPassword(e.target.value)} required
    placeholder=" Password *" maxLength="8" minLength="6"/>
    </label>
    <hr />
    <div>
        <p>
            Don't have an account? Sign Up.
        </p>
    </div>
    <label>
    <button type="submit"> Login </button>
    </label>
    </form>

        
}
    