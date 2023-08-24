
const COHORT_NAME = `2302-acc-ct-web-pt-a`;
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;


export const fetchAllPosts = async () => {

    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result.data.posts;

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