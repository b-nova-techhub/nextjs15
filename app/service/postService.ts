export type Post = {
    id: string;
    title: string;
    body: string;
};

export async function fetchPost(id: string): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch the post with ID: ${id}`);
    }

    return res.json();
}
