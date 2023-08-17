
const COHORT_NAME = `2302-acc-ct-web-pt-a`;
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const fetchAllPosts = async () => {

    const response = await fetch(`${BASE_URL}/posts`);
    const result = await response.json();
    return result.data.posts;

}