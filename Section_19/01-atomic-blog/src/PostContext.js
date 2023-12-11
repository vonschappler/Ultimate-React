import { createContext, useContext, useMemo, useState } from 'react';
import { faker } from '@faker-js/faker';

function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    return Array.from({ length: 30 }, () => createRandomPost());
  });
  const [searchQuery, setSearchQuery] = useState('');
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }
  },[searchQuery, searchedPosts])

  return (
    <PostContext.Provider
      value={value}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if(context === undefined) throw new Error(`PostContext was called outside PostProvider`)
  return context;
}

export { PostProvider, usePosts };
