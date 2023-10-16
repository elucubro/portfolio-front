const blogPosts = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
console.log(blogPosts)
let body = [];


for (let path in blogPosts) {
    body.push(
        blogPosts[path]().then(({ metadata }) => {
            console.log(path)
            path = path.replace("/src/posts/", "");
            path = path.replace("*.md", "");
            console.log(path)
            console.log(path, metadata)
            return {path , metadata};
        })
    )
}

export async function load({ url, params, fetch }) {
    const posts = await Promise.all(body);
    return { 
        props: { 
            posts
        } 
    };
}