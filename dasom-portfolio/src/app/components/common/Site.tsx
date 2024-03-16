import Link from "next/link";

import BlogIcon from "@/app/assets/icons/BlogIcon";
import GithubIcon from "@/app/assets/icons/GithubIcon";
import NotionIcon from "@/app/assets/icons/NotionIcon";
import ResumeIcon from "@/app/assets/icons/ResumeIcon";

export default function Site() {
  const SITE_LIST = [
    {
      id: 0,
      icon: <ResumeIcon width="16" height="16" />,
      title: "Resume",
      url: "https://www.notion.so/RESUME-ede1ce93c23a4a1b80a3ff819aad2745?pvs=4",
    },
    {
      id: 1,
      icon: <GithubIcon width="16" height="16" />,
      title: "Github",
      url: "https://github.com/Sodasom",
    },
    {
      id: 2,
      icon: <NotionIcon width="16" height="16" />,
      title: "Notion",
      url: "https://www.notion.so/Som-s-Study-Note-5d2ad48d07c9477f958d9bff69572ea1?pvs=4",
    },
    {
      id: 3,
      icon: <BlogIcon width="16" height="16" />,
      title: "Blog",
      url: "https://fairyworld-som.tistory.com/",
    },
  ];

  return (
    <ul className="flex flex-row gap-3 md:gap-6">
      {SITE_LIST.map((list) => (
        <li key={list.id} className="site_list">
          {list.icon}
          <Link href={list.url} target="_blank">
            {list.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
