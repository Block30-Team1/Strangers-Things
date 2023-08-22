import { registerUrl } from '../API/index';
import { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [result, setRegister] = useState({});
    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const result = await registerUrl();
            setRegister(result);
        console.log({ username, password, confirmPassword })
        
        }catch (error) {
            console.error(error);
        }
        setUsername("");

    }

    async function passwordVerification () {


    if (confirmPassword === password){
        console.log("Results match!");
    } else {
        alert("Passwords don't match");
        return false;
    }
}


    
    return <form method="post" onSubmit={handleSubmit}>

        <h3> Register </h3>
        <label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} required 
        placeholder=" Username *"/>
        </label>
        <hr />
        <label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} required
        placeholder=" Password *" maxLenght="8" minLength="6"/>
        </label>
        <hr />
        <label>
        <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required
        placeholder=" Confirm your password *" maxLenght="8" minLength="6" />
        </label>
        <hr />
        <label>
        <button type="submit"> Register </button>
        </label>
    </form>

}