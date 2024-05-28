import Image from "next/image";

const FeaturedImage = ({ post }) => {
  return (
    <div className="relative w-4/5 h-full mx-auto">
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
