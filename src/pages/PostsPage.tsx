import { posts } from "../data/posts";
import { PostCard } from "../components/PostCard";

export const PostsPage = () => {
  return (
    <div>
      <h2 style={{ fontSize: "1.75rem", marginBottom: "16px" }}>
        All Articles
      </h2>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
