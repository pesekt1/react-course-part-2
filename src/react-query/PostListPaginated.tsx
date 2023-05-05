import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostListPaginated = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <h1>Post list</h1>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary"
      >
        Previous
      </button>
      <button onClick={() => setPage(page + 1)} className="btn btn-primary">
        Next
      </button>
    </>
  );
};

export default PostListPaginated;
