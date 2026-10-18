import { useParams, Link } from "react-router";
import { posts } from "../data/posts";

export const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);
  const post = posts.find((item) => item.id === postId);

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0" }}>
        <h2 style={{ color: "#e11d48" }}>Post not found</h2>
        <p style={{ color: "#64748b", marginBottom: "20px" }}>
          No article exists with ID #{id}.
        </p>
        <Link to="/posts" style={{ color: "#2563eb", fontWeight: 600 }}>
          ← Back to all posts
        </Link>
      </div>
    );
  }

  return (
    <article>
      <Link to="/posts" style={{ color: "#2563eb", fontWeight: 500 }}>
        ← Back to all posts
      </Link>
      <h1 style={{ fontSize: "2rem", margin: "16px 0 8px 0" }}>{post.title}</h1>
      <p
        style={{ color: "#64748b", fontSize: "0.875rem", marginBottom: "24px" }}
      >
        {post.date} • {post.category}
      </p>
      <div style={{ lineHeight: 1.7, color: "#1e293b", fontSize: "1.05rem" }}>
        {post.content}
      </div>
    </article>
  );
};
