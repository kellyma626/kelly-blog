import Image from "next/image";
import { experiences } from "@/data/experiences";

export default function ExperienceList() {
  return (
    <div className="space-y-8">
      <p className="text-3xl font-bold">Experience</p>
      {experiences.map((exp, idx) => (
        <div key={idx} className="flex flex-col gap-4">
            <div className="flex">
              <Image
                src={exp.image}
                alt={exp.company}
                width={48}
                height={48}
                className="rounded-lg mr-4"
              />
              <div className="flex flex-col">
                <p className="text-xl font-semibold">{exp.role}</p>
                <p className="text-sm text-gray-500">
                {exp.company} · {exp.location} · {exp.date}
                </p>
              </div>
            </div>
            <ul className="list-disc list-inside">
              {exp.bullets.map((b, i) => (
                <li className="text-md" key={i}>{b}</li>
              ))}
            </ul>
        </div>
      ))}
    </div>
  );
}
