import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function createRandomFeature() {
  const titles = [
    "Mastering the Art of Note-Taking",
    "Importance of Self-Care",
    // Add more titles as needed
  ];

  const descriptions = [
    "Discover expert tips and methods for taking effective notes.",
    "Explore the significance of prioritizing self-care amidst the demands of student life.",
    // Add more descriptions as needed
  ];

  const categories = [
    "Academic Resources",
    "Career Services",
    "Campus Culture",
    "Local Community Resources",
    "Social",
    "Sports",
    "Health and Wellness",
    "Technology",
    "Travel",
    "Alumni",
    // Add more categories as needed
  ];

  const dates = ["Nov 12", "Nov 11" /* Add more dates as needed */];

  return {
    id: uuidv4(),
    title: titles[Math.floor(Math.random() * titles.length)],
    date: dates[Math.floor(Math.random() * dates.length)],
    description: descriptions[Math.floor(Math.random() * descriptions.length)],
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
    category: categories[Math.floor(Math.random() * categories.length)],
  };
}

// CREATE A CONTEXT
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomFeature())
  );

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  function handleDeletePost(postId) {
    setPosts(posts.filter((post) => post.id !== postId));
  }

  const value = {
    posts: posts,
    onAddPost: handleAddPost,
    onClearPosts: handleClearPosts,
    onDeletePost: handleDeletePost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
