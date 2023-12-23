async function getPosts() {
    let posts = await fetch('https://blog.orafaelribeiro.com/wp-json/wp/v2/posts');

    return posts.json();
}

export { getPosts };