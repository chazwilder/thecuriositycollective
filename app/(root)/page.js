import Image from "next/image";
import ArchiveItem from "@/components/blog/ArchiveItem";

export default function Home() {
  return (
    <main className="flex flex-col mb-auto max-w-6xl w-full mx-auto">
       <ArchiveItem />
    </main>
  );
}
