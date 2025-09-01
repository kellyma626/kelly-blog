import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogList() {
  // mark favs later
  const favs = posts.slice(0, 5);

  return (
    <div className="text-xl pl-5 pt-5 underline-offset-2">
      <p className="text-purple-pink">favs</p>
      <ul className="underline list-disc marker:content-['★_'] marker:text-pink-400 pl-7">
        {favs.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <br />

      <p className="text-purple-pink">all</p>
      <ul className="underline list-disc marker:content-['★_'] marker:text-pink-400 overflow-y-scroll scrollbar-cute max-h-80 pl-7">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}