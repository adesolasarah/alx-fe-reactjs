import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <h2>Viewing BlogPost ID: {id}</h2>;
}

export default BlogPost;
