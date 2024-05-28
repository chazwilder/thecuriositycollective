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
        className="rounded-xl"
      />
    </div>
  );
};

export default FeaturedImage;
