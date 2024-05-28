import FeaturedImage from "./FeaturedImage";
import PostDetails from "./PostDetails";
import Link from "next/link";

const ArchiveItem = async () => {
  const res = await fetch("http://localhost:3000/api/v2/posts");
  const posts = await res.json();

  return (
    <div
      id="archive"
      className="flex flex-col w-full h-full items-center justify-center gap-6 p-8 mx-auto"
    >
      {posts.map((post, index) => {
        return (
          <div
            key={index}
            className="flex flex-col max-w-4xl mx-auto w-full h-[541px] gap-6"
          >
            <Link
              className="uppercase w-full h-full flex flex-col items-center justify-center grow"
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FeaturedImage key={index} post={post} />
            </Link>
            <PostDetails key={index} post={post} />
          </div>
        );
      })}
    </div>
  );
};
export default ArchiveItem;
