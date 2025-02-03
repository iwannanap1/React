import React from "react";
import appwriteSerive from "../appwrite/config";
import { Containerr, PostCard } from "../components";
import { useState } from "react";
import { useEffect } from "react";

function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteSerive.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Containerr>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Containerr>
      </div>
    );
  }
  return (
    <div className="w-full py-8">
      <Containerr>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Containerr>
    </div>
  );
}

export default Home;
