import { login as login } from '../API/index';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


//const isLoggedIn = false;
export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let result = await login(username, password);

            if (result.success) {

                setToken(result.data.token);
                console.log(token);
                console.log(result.data.token)
                return token;
                
            }

        } catch (error) {
            console.error(error);
            console.log(result);
        }
        setUsername("");
        setPassword("");
    }
    /*
            function stayingLoggedIn(){
                try{
                    while(isLoggedIn){
                    if (result.success === true){
                        isLoggedin === true;
                        console.log("you are now logged in");
                        return {token};
                    }else{
                        console.log("isLoggedIn is false");
                        //console.log({result.success});
                        isLoggedin === false;
                    }
                }
                } catch (error){
                    console.log("sorry fail");
                    console.log(error);
                }
            }
                
            }
            stayingLoggedIn()
            */


    return (<form method="post" onSubmit={handleSubmit}>
        <h3 id="component-h3"> Login </h3>
        <label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} required
                placeholder=" Username *" />
        </label>
        <hr />
        <label>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} required
                placeholder=" Password *" maxLength="8" minLength="6" />
        </label>
        <hr />
        <div>
            <p>
                Don't have an account? Sign Up.
            </p>
        </div>
        <label>
            <button type="submit" onClick={() => navigate(`/Posts`)}> Login </button>
        </label>
    </form>)
}
