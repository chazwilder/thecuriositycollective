import Image from "next/image";

const FeaturedImage = ({ post }) => {
  return (
    <div className="relative w-full h-full mx-auto flex flex-col flex-1">
      <Image
        src={post.featuredImage.node.link}
        alt="A photo of a dog"
        fill
        style={{
          objectFit: "cover",
        }}
        className="rounded-xl shadow-lg"
      />
      <p className="text-2xl absolute left-8 bottom-8 bg-white p-2">{post.title}</p>
    </div>
  );
};

export default FeaturedImage;
