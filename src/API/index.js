
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

           /*
           user: {
                username: "cacacacaccccc",
                password: "kkkkkkkkkk"
           }
           */
        })
    });
    const result = await response.json();
    console.log("the result is" + result)
    return result;
}

export const loggingIn = async (username,password) => {
    const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
                username: username,
                password: password
            }
        })
    });

    const result = await response.json();
    return result;
}