import React from 'react'

const ArchiveItem = async () => {
    const res = await fetch("http://localhost:3000/api/v2/posts");
    const posts = await res.json();
  
    return (
      <div className="flex flex-row w-full h-16 items-center justify-center gap-6 p-8">
      {posts.map((post, index) => {
          return (
              <a className="uppercase" key={index} href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
          )
        })}
      </div>
    );
  };
export default ArchiveItem