import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import App from "./App";
import { PostCard } from "./components/PostCard";
import { posts } from "./data/posts";

describe("Blog Application Tests", () => {
  // test 1: like button toggles state when clicked
  it("toggles the like button state when clicked", async () => {
    const user = userEvent.setup();
    const testPost = posts[0];

    render(
      <MemoryRouter>
        <PostCard post={testPost} />
      </MemoryRouter>,
    );

    const button = screen.getByRole("button", {
      name: new RegExp(`Like ${testPost.title}`, "i"),
    });
    expect(button).toHaveTextContent("🤍 Like");

    await user.click(button);
    expect(button).toHaveTextContent("❤️ Liked");

    await user.click(button);
    expect(button).toHaveTextContent("🤍 Like");
  });

  // test 2: dynamic rendering of all blog post cards from the array
  it("renders all blog post cards on the posts route", () => {
    render(
      <MemoryRouter initialEntries={["/posts"]}>
        <App />
      </MemoryRouter>,
    );

    const articles = screen.getAllByRole("article");
    expect(articles).toHaveLength(posts.length);
  });

  // test 3: signed-out user is redirected from /dashboard to /signin
  it("redirects signed-out users from protected route to sign-in page", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <App />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: /Reader Sign In/i }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/This is a protected member-only area/i),
    ).not.toBeInTheDocument();
  });
});
