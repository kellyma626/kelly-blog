"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { posts } from "@/data/posts";
import Blinkies from "@/components/Blinkies";
import Gingham from "@/components/Gingham";

export default function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = React.use(params);
  const post = posts.find((p) => p.slug === slug);

  const handleBack = () => router.back();

  if (!post) {
    return (
    <div className="bg-pink-100 min-h-screen flex justify-center py-10">
      <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-md flex flex-col space-y-1">
        <Gingham />
        <div className="space-y-5">
          <Blinkies />
            <div className="max-w-3xl mx-auto p-6 space-y-6">
                <div className="space-y-2 flex flex-col">
                    <div className="flex justify-start">
                        <button
                            onClick={handleBack}
                            className="cursor-pointer font-vt323 text-pink-accent text-2xl underline underline-offset-2"
                        >
                            back {`>>`}
                        </button>
                    </div>
                    <p className="flex justify-center font-nunito text-4xl text-pink-500 font-bold">Post not found (╥﹏╥)</p>
                </div>
            </div>
          <Blinkies />
        </div>
        <Gingham />
      </div>
    </div>
    );
  }

  return (
    <div className="bg-pink-100 min-h-screen flex justify-center py-10">
      <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-md flex flex-col space-y-1">
        <Gingham />
        <div className="space-y-5">
          <Blinkies />
            <div className="max-w-3xl mx-auto p-8 space-y-6 font-nunito">
                <div className="flex justify-start">
                    <button
                        onClick={handleBack}
                        className="cursor-pointer font-vt323 text-pink-accent text-2xl underline underline-offset-2"
                    >
                        back {`>>`}
                    </button>
                </div>
                <div className="space-y-2">
                    <p className="text-4xl font-bold">{post.title}</p>
                    <p className="text-sm text-gray-400">Last updated: {post.date}</p>
                </div>
                <div className="space-y-4 text-md leading-relaxed">
                    {post.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </div>
          <Blinkies />
        </div>
        <Gingham />
      </div>
    </div>
  );
}