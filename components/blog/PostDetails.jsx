import Image from "next/image";

const PostDetails = ({ post }) => {
  const readTime = (content) => {
    const wordCount = content.replace(/<[^>]+>/g, "").split(" ").length;
    return Math.ceil(wordCount / 200);
  };
  return (
    <div className="flex flex-col w-full h-full gap-4">
    <div className="flex flex-row w-full items-center justify-center gap-8">
      <div className="flex flex-row gap-4 items-center justify-center">
        <Image
          src={post.author.node.avatar.url}
          className="rounded-full shadow-md"
          width={35}
          height={35}
          alt="Writer Avatar"
        />
        <div className="flex flex-row items-center justify-center gap-1">
          <p className="text-sm text-gray-600">{post.author.node.firstName}</p>
          <p className="text-sm text-gray-600">{post.author.node.lastName}</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <span className="w-2 h-2 rounded-full bg-purple-600 inline-block"></span>
      </div>
      <div className="flex flex-row gap-2 items-center justify-cente text-smr">
        {new Date(post.date).toDateString()}
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <span className="w-7 h-7 rounded-full bg-green-600 text-center text-md text-white justify-center m-auto">
          {readTime(post.content)}
        </span>
        <p>min read</p>
      </div>
    </div>
    <div className="flex flex-row w-full items-center justify-center gap-8 p-8" dangerouslySetInnerHTML={{ __html: post.content }}/>
    </div>
  );
};

export default PostDetails;
