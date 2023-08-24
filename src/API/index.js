
const COHORT_NAME = `2302-acc-ct-web-pt-a`;
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
const token = 'eyJfaWQiOiI1ZTg5MDY2ZGQ0MzkxNjAwTc1NTNlMDUiLCJ1c2VybmFtZSI6Im1hdHQiLCJpYXQiOjE1ODYwMzgzODF9';


export const fetchAllPosts = async () => {

    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result.data.posts;

}

export const registerUrl = async (username, password) => {
    console.log(`username: ${username}, password: ${password}`)

    const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            }
        })
    });
    const result = await response.json();
    console.log("the result is" + result)
    return result;
}

export const login = async (username, password) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password,
            }
        })
    });

    const result = await response.json();
    console.log(result);

    return result;

}

export const authorization = async (token) => {

    if (token){
          const response = await fetch(`${BASE_URL}/someEndPoint`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ /* whatever things you need to send to the API */ })
          });
            const result = await response.json();
            console.log(result);
            return result
    } else {
        const response = await fetch(`${BASE_URL}/someEndPoint`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ /* whatever things you need to send to the API */ })
          });
    }
}


export default async function deletePlayer() {

    try {

        const response = await fetch(`${BASE_URL}/posts/POST_ID`, {

            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN_STRING_HERE}`
            }
        });

        const result = await response.json();
        return result
    } catch (err) {
        console.error('This is a delete error'.err);
    }
}

export const myData = async () => {
    const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
    });
    const result = await response.json();
    console.log(result);
    return result;
}