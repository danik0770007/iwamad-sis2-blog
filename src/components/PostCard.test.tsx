import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { describe, it, expect } from "vitest";
import { PostCard } from "./PostCard";

const mockPost = {
  id: 1,
  title: "Test Post Title",
  excerpt: "A short description for testing.",
  summary: "A short description for testing.",
  category: "General",
  content: "Full testing post content.",
  author: "Tester",
  date: "2026-10-18",
};

describe("PostCard Component", () => {
  it("updates like counter and label when clicked", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <PostCard post={mockPost} />
      </MemoryRouter>,
    );

    const likeButton = screen.getByRole("button", {
      name: /like test post title/i,
    });
    expect(likeButton).toHaveTextContent("🤍 Like");

    await user.click(likeButton);
    expect(likeButton).toHaveTextContent("❤️ Liked");

    await user.click(likeButton);
    expect(likeButton).toHaveTextContent("🤍 Like");
  });
});
