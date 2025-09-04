import Image from "next/image";
import Button from "@/components/Button";
import { posts } from "@/data/posts";
import Link from "next/link";

export default function Welcome() {
  return (
    <div className="border-3 border-pink-200 border-dotted bg-light-lilac px-4 pt-5 pb-8 rounded-lg flex flex-col">
          <p className="font-merriweather font-semibold text-6xl text-hot-pink text-center mt-5 -mb-5">
              Welcome to my blog !!
          </p>
          <div className="flex mt-15 px-10">
            <div className="flex-1">
              <Button href="https://kellyma626.github.io/" label="portfolio" />
              <Button href="https://www.linkedin.com/in/kellyma626/" label="linkedin" />
              <Button href="https://github.com/kellyma626" label="github" />
              <Button href="Kelly_Ma_Resume.pdf" label="resume" />
            </div>
            <div className="flex-1 -mt-7 relative">
              <Image
              src="/girl.png"
              alt="girl"
              width={300}
              height={40}
              />
              <Image
              src="/laptop.png"
              alt="laptop"
              width={200}
              height={40}
              className="absolute -translate-x-10 -translate-y-55"
              />
            </div>
            <div className="flex-1">
              <br />
              <p className="font-vt323 text-brown-pink text-2xl">My personal knowledge library: notes, ideas, lessons, and reflections from all parts of life.</p>
              <br />
              <Link className="font-vt323 text-pink-400 text-2xl underline underline-offset-2" href={`/blog/${posts[0].slug}`}>
                {`>>`} latest-blog
              </Link>
              <br/>
              <Link className="font-vt323 text-pink-400 text-2xl underline underline-offset-2" href="/experience-projects">
                {`>>`} experiences-and-projects
              </Link>
            </div>
          </div>
        </div>
  );
}