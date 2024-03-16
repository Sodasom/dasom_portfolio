import Header from "@/app/components/common/Header";
import ProjectCard from "@/app/components/project/ProjectCard";
import MainLayout from "@/app/layouts/MainLayout";

import { PROJECT_LIST } from "@/app/utils/config";

export default function Project() {
  return (
    <>
      <Header />
      <MainLayout>
        <div className="w-full flex justify-center items-center flex-col gap-10 mt-32 pb-10 md:flex-row">
          {PROJECT_LIST.map((list) => (
            <ProjectCard
              key={list.id}
              image={list.image}
              title={list.title}
              date={list.date}
              description={list.description}
              stack={list.stack}
              link={list.link}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
}
