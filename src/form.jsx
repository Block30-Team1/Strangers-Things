import { registerUrl } from '../API/index';
import { useState } from 'react';

const ControlledForm = () => {
    const [messages, setMessages] = useState("");
    try {
        const form = registerUrl(),
        
    }catch(err){
        console.error(err);
    }
}


//register
/*

Form needs to contain:
- username
- enter a password (min / max / character limit)
- confirm password
- set everything as required



*/
//login
/*

After regisstering, another FORM to login and logout
- 

*/

//logout


//backed
/*

- correct AJAX request to the backend
- if successful, we give a token

//token

- token needs to be stored in STATE 
- token needs to be sent with all future requests
- fetch request with valid token is considered AUTHENTICATED
- user corresponding to the token is assumed by the api to be
making the request
*/