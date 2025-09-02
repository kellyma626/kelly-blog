import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectList() {
  return (
    <div className="space-y-8">
      <p className="text-3xl font-bold">Projects</p>
      {projects.map((proj, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <div className="flex">
            <Image
              src={proj.image}
              alt={proj.title}
              width={48}
              height={48}
              className="rounded-lg mr-4"
            />
            <div className="flex flex-col">
              <p className="text-xl font-semibold">{proj.title}</p>
              <p className="text-sm text-gray-500">{proj.techStack} · {proj.date}</p>
            </div>
          </div>
            <ul className="list-disc list-inside">
              {proj.bullets.map((b, i) => (
                <li className="text-md" key={i}>{b}</li>
              ))}
            </ul>
            <Link href={proj.link} target="_blank">
              <Image
                src="/github-logo.png"
                alt="github"
                width={30}
                height={30}
                className="rounded-lg"
              />
            </Link>
          </div>
      ))}
    </div>
  );
}
