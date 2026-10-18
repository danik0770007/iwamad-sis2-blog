import { useState } from "react";
import { Link } from "react-router";
import type { BlogPost } from "../data/posts";

type PostCardProps = {
  post: BlogPost;
};

export const PostCard = ({ post }: PostCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <article
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "16px",
        backgroundColor: "#ffffff",
      }}
    >
      <h2 style={{ margin: "0 0 8px 0", fontSize: "1.25rem" }}>{post.title}</h2>
      <p
        style={{ color: "#64748b", fontSize: "0.875rem", margin: "0 0 12px 0" }}
      >
        {post.date} • {post.category}
      </p>
      <p style={{ margin: "0 0 16px 0", lineHeight: 1.5 }}>{post.summary}</p>

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Link
          to={`/posts/${post.id}`}
          style={{ color: "#2563eb", fontWeight: 500 }}
        >
          Read article →
        </Link>
        <button
          type="button"
          onClick={() => setLiked((prev) => !prev)}
          aria-label={`Like ${post.title}`}
          style={{
            cursor: "pointer",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "1px solid #cbd5e1",
            backgroundColor: liked ? "#fee2e2" : "#ffffff",
            fontWeight: 500,
          }}
        >
          {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
      </div>
    </article>
  );
};
