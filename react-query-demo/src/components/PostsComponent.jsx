import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};

const PostsComponent = () => {
    const { data, error, isError, isLoading, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <div>
            <button onClick={refetch}>Refetch Posts</button>
            {data.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsComponent;