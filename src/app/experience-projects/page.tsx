"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ExperienceList from "@/components/ExperienceList";
import ProjectList from "@/components/ProjectList";
import Blinkies from "@/components/Blinkies";
import Gingham from "@/components/Gingham";

export default function ExperienceProjectsPage() {

  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="bg-sage min-h-screen flex justify-center py-10">
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
                <ExperienceList />
                <ProjectList />
            </div>
          <Blinkies />
        </div>
        <Gingham />
      </div>
    </div>
  );
}