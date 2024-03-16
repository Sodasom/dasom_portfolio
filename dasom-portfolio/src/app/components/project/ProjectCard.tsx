import Image from "next/image";
import Link from "next/link";

import { IProjectCardProps } from "@/app/interface/Project.interface";

export default function ProjectCard({
  image,
  title,
  date,
  description,
  stack,
  link,
}: IProjectCardProps) {
  return (
    <div className="project_card">
      <Image
        width={360}
        height={260}
        src={image}
        alt={`${title} 프로젝트 이미지`}
        className="rounded-t-3xl"
      />
      <div className="flex flex-col pt-4 pb-10 px-4">
        <div className="mb-6">
          <h3 className="mb-2 text-2xl text-base-black font-extrabold">
            {title}
          </h3>
          <p className="mb-1 text-xs text-base-gray300 font-medium">{date}</p>
          <p className="text-xs text-base-gray500 font-medium">{description}</p>
        </div>
        <ul className="flex flex-wrap gap-2 mb-[3.125rem]">
          {stack.map((el, index) => (
            <li key={index} className="project_card_stack">
              {el}
            </li>
          ))}
        </ul>
        <div className="flex gap-6">
          {link.map((el, index) => (
            <div
              key={index}
              className="flex items-center gap-1 text-base-gray800 font-medium"
            >
              {el.icon}
              <Link href={el.url} target="_blank">
                {el.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
