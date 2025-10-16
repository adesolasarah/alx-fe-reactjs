import { useParams } from "react-router-dom";

function BlogPost() {
  const { blogId } = useParams();
  return <h2>Viewing BlogPost ID: {blogId}</h2>;
}

export default BlogPost;
